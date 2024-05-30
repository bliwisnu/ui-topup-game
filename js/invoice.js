const caraPembayaran = document.getElementById('caraPembayaran');
const textTutorial = document.getElementById('textTutorial');

caraPembayaran.addEventListener('click', function () {
    if (textTutorial.style.display === 'none' || textTutorial.style.display === '') {
        textTutorial.style.display = 'block';
    } else {
        textTutorial.style.display = 'none';
    }
});