'use strict'
document.querySelectorAll('.learn-more').forEach(item => {
    item.addEventListener('click', (e) => {
        e.target.parentElement.parentElement.classList.add('rotate');
    });
});
