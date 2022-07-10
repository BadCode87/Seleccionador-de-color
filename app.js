const inputColor = document.querySelector("#inputColor");
const btnVisualizar = document.querySelector("#btnVisualizar");
const textoHex = document.querySelector("#textoHex");
const cardColor = document.querySelector("#cardColor");


console.log(inputColor.value);


btnVisualizar.addEventListener("click", () => {
    console.log("Me diste click");
    console.log(inputColor.value);
    textoHex.textContent = inputColor.value;
    cardColor.style.backgroundColor = inputColor.value;
})