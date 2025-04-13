function toggleMenu() {
    const menu = document.getElementById("mobile-menu");
    menu.classList.toggle("active");
}
    
document.querySelector('.pic1').addEventListener('mouseenter', function () {
    document.querySelector('#diem-den').scrollIntoView({
        behavior: 'smooth'
    });
});