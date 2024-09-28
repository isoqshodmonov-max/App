const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Statik fayllar (CSS) uchun public papkasini belgilang
app.use(express.static(path.join(__dirname, 'public')));

// Asosiy yo'l
app.get('/', (req, res) => {
    res.send(`
    <!DOCTYPE html>
    <html lang="uz">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Oddiy Veb Sayt</title>
        <style>
            body {
                font-family: Arial, sans-serif;
                margin: 0;
                padding: 0;
                background-color: #f4f4f4;
            }
            header {
                background: #35424a;
                color: #ffffff;
                padding: 10px 0;
                text-align: center;
            }
            main {
                padding: 20px;
            }
            footer {
                text-align: center;
                padding: 10px 0;
                background: #35424a;
                color: #ffffff;
                position: relative;
                bottom: 0;
                width: 100%;
            }
        </style>
    </head>
    <body>
        <header>
            <h1>Xush kelibsiz!</h1>
        </header>
        <main>
            <section>
                <h2>Bu mening birinchi Node.js veb saytim!</h2>
                <p>Bu yerda siz oddiy HTML va CSS bilan yaratilgan veb saytni ko'rishingiz mumkin.</p>
            </section>
        </main>
        <footer>
            <p>© 2024. Barcha huquqlar himoyalangan.</p>
        </footer>
    </body>
    </html>
    `);
});

// Serverni ishga tushirish
app.listen(PORT, () => {
    console.log(`Server http://localhost:${PORT} da ishlayapti`);
});
