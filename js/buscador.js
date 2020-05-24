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

// Variables
const marca = document.querySelector('#marca'),
      year = document.querySelector('#year'),
      minimo = document.querySelector('#minimo'),
      maximo = document.querySelector('#maximo'),
      transmision = document.querySelector('#transmision'),
      puertas = document.querySelector('#puertas'),
      color = document.querySelector('#color');

// Datos para la busqueda
let datosBusqueda = {
    marca: '',
    year: '',
    minimo: '',
    maximo: '',
    puertas: '',
    transmision: '',
    color: ''
}

// Event Listeners
document.addEventListener('DOMContentLoaded', () => mostrarAutos(autos));
marca.addEventListener('input', (e) => {
    // const selected = e.target.options[e.target.options.selectedIndex].value
    datosBusqueda.marca = e.target.value
    // Llamar función de filtrar autos
    filtrarAutos()
})

// Functions
function obtenerAutos() {
    return autos
}

function mostrarAutos(autos) {
    const contenedor = document.querySelector('#resultado')
    autos.forEach(auto => {
        // console.log(auto)
        const autoHTML = document.createElement('p')
        autoHTML.innerHTML = `${auto.marca} ${auto.modelo} ${auto.color} - ${auto.year} - ${auto.puertas} puertas - Transmisión: ${auto.transmision} - Precio: $${auto.precio}`
        contenedor.appendChild(autoHTML)
    });
}

function filtrarAutos() {
    console.log('Filtrar Autos')
}