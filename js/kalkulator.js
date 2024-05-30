// JS Kontak Kami
const headKalkulator = document.getElementById('headKalkulator');
const bodyKalkulator = document.getElementById('bodyKalkulator');

headKalkulator.addEventListener('click', function () {
    // Periksa apakah bodyMasalah sedang ditampilkan atau disembunyikan
    if (bodyKalkulator.style.display === 'none') {
        bodyKalkulator.style.display = 'block'; // Tampilkan kembali bodyMasalah
    } else {
        bodyKalkulator.style.display = 'none'; // Sembunyikan bodyMasalah
    }
});