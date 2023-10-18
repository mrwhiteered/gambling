const scrollBar = document.querySelector('.scroolBar');
const scroollThumb = document.querySelector('.scroollThumb');
const blogContainer = document.querySelector('.blog__container');

blogContainer.addEventListener('scroll', changeHeight);

function changeHeight() {
    // Вычисляем новое значение top
    let topValue = blogContainer.scrollTop  + 'px';
    console.log(topValue)
    // Устанавливаем новое значение top для элемента scroollThumb
    scroollThumb.style.marginTop = topValue;
}
