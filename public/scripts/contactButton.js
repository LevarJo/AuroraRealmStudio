document.addEventListener("DOMContentLoaded", function () {
    let button = document.getElementById("contactButton");
    let dropdown = document.getElementById("dropdownContacts");

    button.addEventListener("click", function (event) {
        dropdown.style.display = dropdown.style.display === "block" ? "none" : "block";
        event.stopPropagation(); // Останавливаем распространение события
    });

    document.addEventListener("click", function () {
        dropdown.style.display = "none";
    });

    dropdown.addEventListener("click", function (event) {
        event.stopPropagation(); // Останавливаем закрытие при клике на меню
    });
});