const columns = document.querySelectorAll('.chips__column');

columns.forEach((column) => {
    const chips = column.querySelectorAll('.chip');

    // Функция, которая будет вызвана при завершении анимации
    function onAnimationEnd() {
        // Уберем обработчик, чтобы избежать его многократного вызова
        this.removeEventListener('animationiteration', onAnimationEnd);
        // Получим первую картинку и переместим ее вниз
        const firstChip = chips[0];
        firstChip.style.transform = 'translateY(0%)';
        // Перемещаем первую картинку в конец списка
        column.appendChild(firstChip);
    }

    chips.forEach((chip, index) => {
        // Устанавливаем начальное значение анимации
        chip.style.animation = `moveChips 4s linear ${index * 0.5}s infinite`;
        // Добавляем обработчик события завершения анимации
        chip.addEventListener('animationiteration', onAnimationEnd);
    });
});
