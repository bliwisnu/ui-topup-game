// JS Kontak Kami
const headMasalah = document.getElementById('headMasalah');
const bodyMasalah = document.getElementById('bodyMasalah');

headMasalah.addEventListener('click', function () {
    // Periksa apakah bodyMasalah sedang ditampilkan atau disembunyikan
    if (bodyMasalah.style.display === 'none') {
        bodyMasalah.style.display = 'block'; // Tampilkan kembali bodyMasalah
    } else {
        bodyMasalah.style.display = 'none'; // Sembunyikan bodyMasalah
    }
});
