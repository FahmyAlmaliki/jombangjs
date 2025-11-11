const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Serve static files (HTML, CSS, JS)
app.use(express.static(__dirname));

// Route untuk halaman utama
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// Start server
app.listen(PORT, () => {
    console.log(`🌤️  Server berjalan di http://localhost:${PORT}`);
    console.log(`📊 Dashboard Monitoring Cuaca - Jombang Weather Station`);
    console.log(`\nTekan CTRL+C untuk menghentikan server`);
});
