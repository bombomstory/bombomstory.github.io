document.addEventListener('DOMContentLoaded', () => {
    // ตั้งค่าปีปัจจุบันใน Footer
    const currentYearSpan = document.getElementById('current-year');
    currentYearSpan.textContent = new Date().getFullYear();

    // Smooth Scroll สำหรับเมนู
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Toggle เมนูสำหรับ Hamburger
    const hamburgerMenu = document.querySelector('.hamburger-menu');
    const navMenu = document.querySelector('.nav');

    hamburgerMenu.addEventListener('click', () => {
        navMenu.classList.toggle('is-active');
    });

    // ปิดเมนูเมื่อคลิกที่ลิงก์ในเมนู
    document.querySelectorAll('.nav a').forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('is-active');
        });
    });
});