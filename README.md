# AFFESTA VOL. 1
### Al Falah Festival - Website Resmi

<p align="center">
  <img src="https://raw.githubusercontent.com/MQSTH/affesta.com/refs/heads/main/style/img/logo/lg_n_bg.png" alt="Logo AFFESTA" width="400">
</p>

<p align="center">
  <strong>Åšaktisamyogah</strong> - Penyatuan energi spiritual dan kekuatan batin
</p>

<p align="center">
  <img src="https://img.shields.io/badge/Tanggal%20Acara-26%20September%202025-purple?style=flat-square" alt="Tanggal Acara">
  <img src="https://img.shields.io/badge/Teknologi-HTML5%20|%20CSS3%20|%20JavaScript-orange?style=flat-square" alt="Stack Teknologi">
  <img src="https://img.shields.io/badge/Responsif-Mobile%20First-green?style=flat-square" alt="Desain Responsif">
</p>

---

## Tentang AFFESTA

AFFESTA (Al Falah Festival) adalah acara tahunan inovatif yang diselenggarakan oleh **Ikatan Pelajar Madrasah Al Falah (IPMA) Komisariat Aliyah**, yang merupakan evolusi dari program ASA (Al Falah Sport and Art) yang telah berjalan selama 7 tahun. Festival ini fokus khusus pada **kompetisi keterampilan dan seni**, mempertemukan siswa dari berbagai sekolah dalam perayaan kreativitas dan bakat.

Tema Sansekerta **"Åšaktisamyogah"** melambangkan penyatuan energi spiritual antara panitia dan peserta, menggambarkan kekuatan kolektif yang muncul ketika komunitas yang beragam bersatu.

---

## Pratinjau Langsung

**Hitung Mundur Acara**: 26 September 2025 pukul 08:00 WIB

```
Hari  Jam  Menit  Detik
 018   14    32     45
```

---

## Kategori Lomba

| Lomba | Tingkat | Pendaftaran |
|-------|---------|-------------|
| **Ratoh Jaroe** | SMP & SMA | Dibuka |
| **Hadroh Banjari** | Semua Tingkat | Dibuka |
| **Scout Skill Competition** | SMP & SMA | Dibuka |

---

## Tinjauan Teknis

### Arsitektur
```
Aplikasi Frontend Murni
├── HTML5 Murni (Markup semantik)
├── CSS3 Modern (Grid, Flexbox, Custom Properties)
└── JavaScript Vanilla (ES6+, Tanpa framework)
```

### Fitur Utama

**Sistem Desain Responsif**
- Pendekatan mobile-first dengan 4 breakpoint
- Interaksi yang dioptimalkan untuk sentuhan
- Layout adaptif untuk semua ukuran layar

**Elemen Interaktif**
- Timer hitung mundur real-time dengan pembaruan otomatis
- Sistem pergantian konten dinamis (toggle SMP/SMA)
- Widget media sosial mengambang dengan animasi halus
- Validasi form progresif

**Optimasi Performa**
- Lazy loading untuk gambar latar belakang
- Intersection Observer API untuk animasi
- Event listener pasif
- Pengiriman aset yang dioptimalkan

---

## Filosofi Desain

### Psikologi Warna
```css
Warna Primer:
--purple: #aa00f9    /* Kreativitas, spiritualitas, kebijaksanaan */
--orange: #efb200    /* Kehangatan, antusiasme, optimisme */

Warna Pendukung:
--light-gray: #efefef
--dark-gray: #262626
```

### Elemen Budaya
- **Motif Batik Parang**: Pola tradisional Indonesia yang melambangkan ketekunan
- **Elemen Garuda**: Melambangkan kekuatan dan identitas nasional
- **Petir/Guntur**: Melambangkan energi dan transformasi
- **Pola Daun**: Melambangkan keterkaitan dan pertumbuhan

---

## Struktur File

```
affesta-website/
│
├── index.html                 # Entry point aplikasi utama
├── style/
│   ├── style.css             # Sistem styling lengkap
│   └── img/                  # Aset gambar yang dioptimalkan
│       ├── logo/             # File identitas brand
│       ├── background/       # Latar belakang section
│       └── icon/            # Ikon kategori lomba
│
└── script/
    └── index.js              # Logika aplikasi & interaksi
```

---

## Kompatibilitas Browser

| Fitur | Dukungan |
|-------|----------|
| **CSS Grid** | Chrome 57+, Firefox 52+, Safari 10.1+ |
| **CSS Custom Properties** | Chrome 49+, Firefox 31+, Safari 9.1+ |
| **Intersection Observer** | Chrome 51+, Firefox 55+, Safari 12.1+ |
| **Fitur ES6** | Chrome 51+, Firefox 54+, Safari 10+ |

---

## Metrik Performa

- **First Contentful Paint**: < 1.5s
- **Largest Contentful Paint**: < 2.5s
- **Cumulative Layout Shift**: < 0.1
- **Bundle JavaScript**: ~15KB (tidak diminifikasi)
- **Bundle CSS**: ~25KB (tidak diminifikasi)

---

## Standar Aksesibilitas

### Kepatuhan WCAG 2.1
- **Kontras Warna**: Rating AAA (minimum 7:1)
- **Target Sentuhan**: Ukuran minimum 44px
- **Navigasi Keyboard**: Dukungan penuh dengan manajemen fokus
- **Screen Reader**: HTML semantik dengan label ARIA
- **Preferensi Gerakan**: Menghormati `prefers-reduced-motion`

### Breakpoint Responsif
```css
Mobile Kecil:   320px - 374px
Mobile Sedang:  375px - 424px  
Mobile Besar:   425px - 767px
Tablet+:        768px ke atas
```

---

## Instalasi & Setup

### Mulai Cepat
```bash
# Clone repository
git clone https://github.com/yourusername/affesta-website.git

# Navigasi ke direktori proyek
cd affesta-website

# Buka di browser (tidak perlu proses build)
open index.html
```

### Server Development (Opsional)
```bash
# Menggunakan Python 3
python -m http.server 8000

# Menggunakan Node.js
npx serve .

# Akses di http://localhost:8000
```

---

## Arsitektur JavaScript

### Modul Inti

**Sistem Countdown**
```javascript
// Update otomatis setiap detik
const targetDate = new Date("2025-09-26T08:00:00+07:00");
function updateCountdown() {
  // Kalkulasi real-time dan update DOM
}
```

**Controller Navigasi**
```javascript
// Transformasi navbar berbasis scroll
// Manajemen menu mobile dengan gesture sentuh
// Smooth scrolling dengan kalkulasi offset
```

**Manajemen Konten**
```javascript
// Sistem toggle dinamis untuk tingkat lomba
// Pergantian URL dan konten real-time
// Manajemen state animasi
```

---

## Fitur CSS

### Sistem Layout Modern
```css
/* CSS Grid untuk layout responsif */
.contact-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 30px;
}

/* Flexbox untuk alignment komponen */
.navbar-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
```

### Efek Visual Lanjutan
```css
/* Desain glassmorphism */
.countdown-item {
  background: rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.3);
}

/* Animasi gradient */
.submit-btn {
  background: linear-gradient(135deg, var(--purple), var(--yellow));
  transition: all 0.3s ease;
}
```

---

## Pertimbangan Keamanan

### Perlindungan Client-Side
- Sanitasi input untuk field form
- Langkah pencegahan XSS
- Header Content Security Policy (direkomendasikan)
- Pencegahan akses developer tools

### Penanganan Data
- Tidak ada data sensitif yang disimpan di localStorage
- Validasi form sebelum pengiriman
- Penanganan link eksternal yang aman

---

## Opsi Deployment

### Platform Hosting Statis
- **Netlify**: Deployment drag & drop
- **Vercel**: Deployment berbasis Git
- **GitHub Pages**: Hosting gratis untuk repository
- **Firebase Hosting**: Integrasi Google Cloud

### Server Web Tradisional
- Apache dengan mod_rewrite
- Nginx dengan tipe MIME yang tepat
- Lingkungan hosting PHP/Node.js apapun

---

## Pengembangan Masa Depan

### Fitur Phase 2
- Integrasi backend untuk pemrosesan form
- Sistem registrasi dan autentikasi pengguna
- Content Management System (CMS)
- Dukungan multi-bahasa (Indonesia/Inggris)

### Fitur Phase 3
- Kemampuan Progressive Web App (PWA)
- Push notification untuk update acara
- Leaderboard peserta real-time
- Pengembangan aplikasi mobile

---

## Kontribusi

### Panduan Development
1. Pertahankan struktur HTML semantik
2. Ikuti metodologi BEM untuk kelas CSS
3. Gunakan fitur ES6+ secara konsisten
4. Pastikan kepatuhan aksesibilitas
5. Test di berbagai perangkat dan browser

### Standar Code
- Gunakan indentasi 2 spasi
- Komentar untuk fungsionalitas kompleks
- Optimasi gambar sebelum menambahkan
- Validasi HTML/CSS sebelum commit

---

## Lisensi & Copyright

```
© 2025 gigimerah
Seluruh hak cipta dilindungi.

Website ini dikembangkan untuk AFFESTA VOL. 1
Diselenggarakan oleh Ikatan Pelajar Madrasah Al Falah (IPMA)
```

---

## Informasi Kontak

Untuk dukungan teknis atau pertanyaan terkait website, silakan hubungi koordinator lomba masing-masing yang tercantum di website resmi.

**Developer Website**: gigimerah  
**Penyelenggara Acara**: IPMA Komisariat Aliyah  
**Tanggal Acara**: 26 September 2025
