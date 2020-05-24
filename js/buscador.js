import { autos } from "./app.js";

// crear los años
const years = document.createElement('option');
const  max = new Date().getFullYear();
let  min = max - 10;

for(let i = max; i >  min; i--) {
    let option =  document.createElement('option');
    option.value = i;
    option.innerText = i;
    document.querySelector('#year').appendChild(option);
}

function obtenerAutos() {
    return autos
}

// Event Listeners
document.addEventListener('DOMContentLoaded', () => mostrarAutos(autos));

function mostrarAutos(autos) {
    const contenedor = document.querySelector('#resultado')
    autos.forEach(auto => {
        console.log(auto)
        const autoHTML = document.createElement('p')
        autoHTML.innerHTML = `
            ${auto.marca} ${auto.modelo} ${auto.color} - ${auto.year} - ${auto.puertas} puertas - Transmisión: ${auto.transmision} - Precio: $${auto.precio}
        `
        contenedor.appendChild(autoHTML)
    });
}