function toggleMenu() {
    const menu = document.getElementById("mobile-menu");

    // Kiểm tra nếu đã có lớp 'active' nghĩa là đã nhấn rồi
    if (menu.classList.contains("active")) {
        console.log("Đã nhấn nút ☰ - menu đang mở");
    } else {
        console.log("Chưa nhấn hoặc menu đang đóng");
    }

    // Toggle menu
    menu.classList.toggle("active");
}
