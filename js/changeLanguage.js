const langBtn = document.getElementById('langBtn');
const textLang = langBtn.querySelector('.language');
let langSave = localStorage.getItem('language');

textLang.innerHTML = langSave;
langBtn.addEventListener('pointerdown', changeLang);

function changeLang() {
    textLang.innerHTML === 'EN' ? (textLang.innerHTML = 'RU', localStorage.setItem('language', 'RU')) : (textLang.innerHTML = 'EN', localStorage.setItem('language', 'EN'));
}