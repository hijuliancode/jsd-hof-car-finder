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
year.addEventListener('input', (e) => {
    datosBusqueda.year = Number(e.target.value)
    filtrarAutos()
})
minimo.addEventListener('input', (e) => {
    datosBusqueda.minimo = Number(e.target.value)
    filtrarAutos()
})
maximo.addEventListener('input', (e) => {
    datosBusqueda.maximo = Number(e.target.value)
    filtrarAutos()
})
puertas.addEventListener('input', (e) => {
    datosBusqueda.puertas = e.target.value
    filtrarAutos()
})
transmision.addEventListener('input', (e) => {
    datosBusqueda.transmision = e.target.value
    filtrarAutos()
})
color.addEventListener('input', (e) => {
    datosBusqueda.color = e.target.value
    filtrarAutos()
})

// Functions
function obtenerAutos() {
    return autos
}

function limpiarHtml() {
    const contenedor = document.querySelector('#resultado')
    // contenedor.innerHTML = '' // limpiar resultados anteriores
    while(contenedor.firstChild) { // limpiar resultados anteriores
        contenedor.removeChild(contenedor.firstChild)
    }
}

function mostrarAutos(autos) {
    limpiarHtml();
    const contenedor = document.querySelector('#resultado')
    autos.forEach(auto => {
        // console.log(auto)
        const autoHTML = document.createElement('p')
        autoHTML.innerHTML = `${auto.marca} ${auto.modelo} ${auto.color} - ${auto.year} - ${auto.puertas} puertas - Transmisión: ${auto.transmision} - Precio: $${auto.precio}`
        contenedor.appendChild(autoHTML)
    });
}

function noResultados() {
    limpiarHtml()
    const noResultado = document.createElement('div')
    noResultado.classList.add('alerta', 'error')
    noResultado.appendChild(document.createTextNode('No hay resultados'))
    document.querySelector('#resultado').appendChild(noResultado)
}

function filtrarAutos() {
    // automaticamente se pasa un auto como parametro de filtrar marca
    const resultado = obtenerAutos()
                      .filter(filtrarMarca)
                      .filter(filtrarYear)
                      .filter(filtrarMinimo)
                      .filter(filtrarMaximo)
                      .filter(filtrarPuertas)
                      .filter(filtrarTransmision)
                      .filter(filtrarColor)

    console.log('resultado', resultado)
    if (resultado.length) {
        mostrarAutos(resultado)
    } else {
        noResultados()
    }
}

function filtrarMarca(auto) {
    if(datosBusqueda.marca) {
        return auto.marca === datosBusqueda.marca
    } else {
        return auto;
    }
}
function filtrarYear(auto) {
    if(datosBusqueda.year) {
        return auto.year === datosBusqueda.year
    } else {
        return auto;
    }
}
function filtrarMinimo(auto) {
    if(datosBusqueda.minimo) {
        return auto.precio >= datosBusqueda.minimo
    } else {
        return auto;
    }
}
function filtrarMaximo(auto) {
    if(datosBusqueda.maximo) {
        return auto.precio <= datosBusqueda.maximo
    } else {
        return auto;
    }
}
function filtrarPuertas(auto) {
    if(datosBusqueda.puertas) {
        return auto.puertas === datosBusqueda.puertas
    } else {
        return auto;
    }
}
function filtrarTransmision(auto) {
    if(datosBusqueda.transmision) {
        return auto.transmision === datosBusqueda.transmision
    } else {
        return auto;
    }
}
function filtrarColor(auto) {
    if(datosBusqueda.color) {
        return auto.color === datosBusqueda.color
    } else {
        return auto;
    }
}
