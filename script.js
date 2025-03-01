// Анимация при скролле
const elements = document.querySelectorAll('#about, .project');
const images = document.querySelectorAll('.project img');

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            // Если это проект, добавляем "sticky" для картинки
            const img = entry.target.querySelector('img');
            if (img) {
                img.classList.add('sticky');
            }
        }
    });
}, { threshold: 0.5 });

elements.forEach(element => observer.observe(element));

// Убираем класс sticky, если элемент выходит из зоны видимости
const stickyObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (!entry.isIntersecting) {
            entry.target.classList.remove('sticky');
        }
    });
}, { threshold: 0 });

images.forEach(image => stickyObserver.observe(image));