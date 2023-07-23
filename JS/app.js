import { valida } from "./validaciones.js";

const inputs = document.querySelector("input");

inputs.forEach((input) => {
    input.addEventListener("blur", (input) => {
        valida(input.target);
    });
});