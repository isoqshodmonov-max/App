const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// Asosiy sahifa
app.get('/', (req, res) => {
  res.send(`
    <!DOCTYPE html>
    <html lang="uz">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Mening Websaytim</title>
    </head>
    <body>
        <h1>Salom, bu mening websaytim!</h1>
        <p>Node.js va Express bilan yaratilgan.</p>
    </body>
    </html>
  `);
});

// Serverni ishga tushirish
app.listen(PORT, () => {
  console.log(`Server ${PORT} portda ishga tushdi`);
});
