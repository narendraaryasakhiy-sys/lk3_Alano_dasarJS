// Toggle Hamburger Menu untuk Tampilan Mobile
const hamburger = document.getElementById('hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('active');
});

// Tutup menu otomatis ketika salah satu link diklik di HP
document.querySelectorAll('.nav-menu a').forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
    });
});

// Efek interaktif sederhana untuk Formulir Kontak
const contactForm = document.getElementById('contact-form');

contactForm.addEventListener('submit', function(e) {
    e.preventDefault(); // Mencegah halaman reload

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    if(name && email && message) {
        alert(`Terima kasih, ${name}! Pesan Anda telah berhasil dikirim.`);
        contactForm.reset(); // Mengosongkan form kembali
    } else {
        alert('Harap isi semua kolom terlebih dahulu!');
    }
});

// Efek Navbar berubah sedikit saat di-scroll (opsional)
window.addEventListener('scroll', () => {
    const header = document.getElementById('header');
    if (window.scrollY > 50) {
        header.style.boxShadow = '0 4px 20px rgba(0,0,0,0.5)';
    } else {
        header.style.boxShadow = 'none';
    }
});