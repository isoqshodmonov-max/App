const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const session = require('express-session');

const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));

app.use(session({
    secret: 'secret-key',
    resave: false,
    saveUninitialized: true
}));

const users = {
    admin: { username: 'isoqshodmonov', password: 'zxc123!-+', role: 'Admin' }
};

const newsList = [];

// Login sahifasi
app.get('/', (req, res) => {
    if (req.session.user) {
        res.redirect('/admin');
    } else {
        const indexPath = path.join(__dirname, 'public', 'index.html');
        res.sendFile(indexPath, (err) => {
            if (err) {
                // Agar index.html ni topa olmasa, h1 yuborish
                res.send('<h1>Salom, diling!</h1>');
            }
        });
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

// Admin panel
app.get('/admin', (req, res) => {
    if (req.session.user && req.session.user.role === 'Admin') {
        res.sendFile(path.join(__dirname, 'views', 'admin.html'));
    } else {
        res.redirect('/login.html');
    }
});

// Yangiliklarni olish
app.get('/get-news', (req, res) => {
    res.json(newsList);
});

// Yangilik qo'shish
app.post('/add-news', (req, res) => {
    const { title, details, imageUrl } = req.body;

    if (req.session.user && req.session.user.role === 'Admin') {
        const currentDate = new Date();
        const newNews = { 
            title, 
            details, 
            imageUrl, 
            timestamp: currentDate,
            formattedDate: `${currentDate.getDate()}/${currentDate.getMonth() + 1}/${currentDate.getFullYear()} ${currentDate.getHours()}:${currentDate.getMinutes()}`,
            views: 0
        };
        newsList.push(newNews);
        res.json({ success: true, message: 'Yangilik yuborildi!' });
    } else {
        res.status(403).json({ success: false, message: 'Ruxsat yo\'q!' });
    }
});

// Yangilik ko'rish sonini oshirish
app.post('/view-news/:index', (req, res) => {
    const index = req.params.index;
    if (newsList[index]) {
        newsList[index].views += 1;
        res.json({ success: true, message: 'Ko\'rish soni oshirildi.' });
    } else {
        res.status(404).json({ success: false, message: 'Yangilik topilmadi.' });
    }
});

// Yangilikni o'chirish
app.delete('/delete-news/:index', (req, res) => {
    const index = req.params.index;

    if (req.session.user && req.session.user.role === 'Admin') {
        if (newsList[index]) {
            newsList.splice(index, 1);
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

// Serverni ishga tushirish
app.listen(port, () => {
    console.log(`Server http://localhost:${port} da ishlayapti`);
});
