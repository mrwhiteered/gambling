// Получите контейнер скроллбара
const blogContainer = document.querySelector('.blog__container');

// Добавьте слушателя события прокрутки для контейнера
blogContainer.addEventListener('scroll', updateThumb);

// Обновление ползунка скроллбара
function updateThumb() {
    const scrollContainer = blogContainer;
    const scrollbarThumb = scrollContainer.querySelector('.blog__container::-webkit-scrollbar-thumb');
    
    // Рассчитайте положение ползунка в зависимости от прокрутки
    const maxScroll = scrollContainer.scrollHeight - scrollContainer.clientHeight;
    const scrollPercentage = (scrollContainer.scrollTop / maxScroll) * 100;
    
    // Обновите стиль ползунка
    scrollbarThumb.style.height = `${scrollPercentage}%`;
}

// Вызовите функцию для установки начального стиля ползунка
updateThumb();


