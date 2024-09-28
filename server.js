const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const session = require('express-session');

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));

app.use(session({
    secret: 'secret-key',
    resave: false,
    saveUninitialized: true
}));

// Foydalanuvchilar ro'yxati
const users = {
    admin: { username: 'isoqshodmonov', password: 'zxc123!-+', role: 'Admin' }
};

// Yangiliklar ro'yxati
const newsList = [];

// Login sahifasi
app.get('/', (req, res) => {
    if (req.session.user) {
        res.redirect('/admin');
    } else {
        res.sendFile(path.join(__dirname, 'public', 'index.html'));
    }
});

// Admin login
app.post('/login', (req, res) => {
    const { username, password } = req.body;
    const user = users.admin;

    if (user.username === username && user.password === password) {
        req.session.user = user;
        res.redirect('/admin');
    } else {
        res.send('Login yoki parol xato!');
    }
});

// Admin panel (faqat adminlar uchun)
app.get('/admin', (req, res) => {
    if (req.session.user && req.session.user.role === 'Admin') {
        // admin.html faylini server orqali jo'natish
        res.sendFile(path.join(__dirname, 'views', 'admin.html'));
    } else {
        res.redirect('/login.html');
    }
});

// Foydalanuvchilar uchun yangiliklarni olish
app.get('/get-news', (req, res) => {
    res.json(newsList);
});

app.post('/add-news', (req, res) => {
    const { title, details, imageUrl } = req.body;

    // Foydalanuvchi admin ekanligini tekshirish
    if (req.session.user && req.session.user.role === 'Admin') {
        const currentDate = new Date();
        const newNews = { 
            title, 
            details, 
            imageUrl, 
            timestamp: currentDate,
            formattedDate: `${currentDate.getDate()}/${currentDate.getMonth() + 1}/${currentDate.getFullYear()} ${currentDate.getHours()}:${currentDate.getMinutes()}`,
            views: 0 // Ko'rish soni
        };
        newsList.push(newNews);
        res.json({ success: true, message: 'Yangilik yuborildi!' });
    } else {
        res.status(403).json({ success: false, message: 'Ruxsat yo\'q!' });
    }
});

// Yangilikni ko'rish (foydalanuvchilar uchun)
app.get('/get-news', (req, res) => {
    if (req.session.user) {
        res.json(newsList);
    } else {
        res.status(403).json({ success: false, message: 'Ruxsat yo\'q!' });
    }
});

// Yangilik ko'rish sonini oshirish
app.post('/view-news/:index', (req, res) => {
    const index = req.params.index;
    if (newsList[index]) {
        newsList[index].views += 1; // Ko'rish sonini oshirish
        res.json({ success: true, message: 'Ko\'rish soni oshirildi.' });
    } else {
        res.status(404).json({ success: false, message: 'Yangilik topilmadi.' });
    }
});

// Yangilikni o'chirish
app.delete('/delete-news/:index', (req, res) => {
    const index = req.params.index;

    // Foydalanuvchi admin ekanligini tekshirish
    if (req.session.user && req.session.user.role === 'Admin') {
        if (newsList[index]) {
            newsList.splice(index, 1); // Yangilikni o'chirish
            res.json({ success: true, message: 'Yangilik o\'chirildi!' });
        } else {
            res.status(404).json({ success: false, message: 'Yangilik topilmadi.' });
        }
    } else {
        res.status(403).json({ success: false, message: 'Ruxsat yo\'q!' });
    }
});


// Admin logout
app.post('/logout', (req, res) => {
    req.session.destroy(err => {
        if (err) {
            return res.redirect('/admin');
        }
        res.clearCookie('connect.sid');
        res.redirect('/');
    });
});

// Yangiliklarni ko'rish (foydalanuvchilar uchun)
app.get('/get-news', (req, res) => {
    res.json(newsList);
});

// Serverni ishga tushirish
app.listen(port, () => {
    console.log(`Server http://localhost:${port} da ishlayapti`);
});
