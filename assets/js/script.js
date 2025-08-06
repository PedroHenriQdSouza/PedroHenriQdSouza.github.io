
window.addEventListener('scroll', function () {
    const nav = document.getElementById('menu');
    if (window.scrollY > 50) { // Change 50 to the desired scroll threshold
        nav.classList.add('scrolled');
    } else {
        nav.classList.remove('scrolled');
    }
});
