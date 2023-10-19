const scrollBar = document.querySelector('.scroolBar');
const scroollThumb = document.querySelector('.scroollThumb');
const blogContainer = document.querySelector('.blog__container');
const right = document.querySelector('.right');

blogContainer.addEventListener('scroll', changeHeight);

function changeHeight() {

    let topValue = blogContainer.scrollTop + 'px';

    scroollThumb.style.marginTop = topValue;
}



