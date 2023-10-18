const burgerBtn = document.getElementById('burgerBtn');
const nav = document.getElementById('navPhone');

const firstbtn = document.querySelector('.first')
const midbtn = document.querySelector('.mid')
const lastbtn = document.querySelector('.lastLine')

burgerBtn.addEventListener('pointerdown', openMenu);
function openMenu(){
    nav.classList.toggle('navActive');
    firstbtn.classList.toggle('firstActive')
    midbtn.classList.toggle('midActive')
    lastbtn.classList.toggle('lastLineActive')

    if (nav.classList.contains("navActive")) {
        // Если меню открыто, предотвращаем скроллинг страницы
        document.body.style.position = 'fixed';
document.body.style.overflowY = 'scroll';
document.body.style.width = '100%';
    } else {
        // Если меню закрыто, разрешаем скроллинг страницы
        document.body.style.position = 'static';
document.body.style.overflowY = 'auto';
document.body.style.width = 'auto';
    }
}