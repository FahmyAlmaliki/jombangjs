# Website Monitoring Cuaca - Jombang Weather Station

Website monitoring cuaca real-time dengan tema gelap yang modern.

## 📊 Data yang Ditampilkan

1. **Curah Hujan** 💧
2. **Tekanan Udara** 🌡️
3. **Kelembaban** 💦
4. **Suhu Temperatur** 🌡️
5. **Kecepatan Angin** 💨
6. **Arah Angin** 🧭

## 🚀 Cara Menggunakan

### Buka Website
Double-click file `index.html` atau buka dengan browser:
```
Right click → Open with → Browser pilihan Anda
```

### Jika Grafik Tidak Muncul
Pastikan Grafana **allow embedding**. Edit `grafana.ini`:

```ini
[security]
allow_embedding = true
cookie_samesite = lax
```

Restart Grafana:
```bash
sudo systemctl restart grafana-server
```

## 🎨 Fitur

- ✅ **Dark Theme** - UI modern dengan tema gelap
- ✅ **Responsive** - Tampil baik di desktop dan mobile
- ✅ **Auto-refresh** - Update otomatis setiap 5 menit
- ✅ **Smooth animations** - Hover effects dan transitions
- ✅ **Obfuscated config** - URL tidak mudah dilihat

## 📁 Struktur File

```
jombang web/
├── index.html        # Halaman utama
├── style.css         # Styling (dark theme)
├── script.js         # JavaScript functionality
├── config.min.js     # Konfigurasi Grafana (obfuscated)
└── README.md         # Dokumentasi
```

## � Konfigurasi

Jika perlu ubah konfigurasi (URL Grafana, Panel ID, dll):
1. Edit nilai di `config.min.js`
2. Atau buat file `config.js` baru dengan format biasa

## � Tips Keamanan

- Config di-obfuscate agar tidak mudah dilihat
- Untuk keamanan maksimal, gunakan autentikasi Grafana
- Gunakan HTTPS jika deploy ke production

## 📞 Support

Untuk pertanyaan atau masalah teknis, hubungi administrator sistem.

---

**Developed for Jombang Weather Station**  
© 2025 - Real-time Weather Monitoring System
