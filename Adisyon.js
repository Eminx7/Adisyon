
const menuItems = [
    "Peynirli Börek - 35₺",
    "Kıymalı Börek - 40₺",
    "Patatesli Börek - 35₺",
    "Ispanaklı Börek - 35₺",
    "Su Böreği - 50₺",
    "Sigara Böreği - 30₺",
    "Kola - 30₺",
    "Ayran - 25₺"
];

const menuDiv = document.getElementById("menu");
menuItems.forEach(item => {
    const div = document.createElement("div");
    div.textContent = item;
    div.style.margin = "10px";
    menuDiv.appendChild(div);
});
