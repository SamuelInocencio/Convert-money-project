// Manipulação do DOM
document.addEventListener("DOMContentLoaded", () => {
    const button = document.getElementById("changeColor");
    button.addEventListener("click", () => {
        document.body.style.backgroundColor =
            document.body.style.backgroundColor === "#ffff00" ? "#00ff00" : "lightcoral";
    });
});