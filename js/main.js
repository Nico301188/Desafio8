
function onSubmitIniciar(e) {
    window.alert("Inició la afiliación!")
}

function reset() {
    var form = document.getElementById('myForm');
    form.reset();
}
let i = 0
const archivos = [
    "css/estilos.css",
    "css/estilos-retro.css",
    "css/estilos-futuro.css",
    "",

]

function changeStyles() {
    if (i > 0) {
        let btnDinamin = document.getElementById('estilo');
        const number = Math.floor(Math.random() * archivos.length)
        btnDinamin.href = `${archivos[number]}`
    }
    i = 1
}

function changeStylesSecuencial() {

    let btnDinamin = document.getElementById('estilo');

    if (btnDinamin.href.includes(`${archivos[0]}`)) {
        btnDinamin.href = `${archivos[1]}`

    } else if (btnDinamin.href.includes(`${archivos[1]}`)) {
        btnDinamin.href = `${archivos[2]}`

    } else if (btnDinamin.href.includes(`${archivos[2]}`)) {
        btnDinamin.href = `${archivos[3]}`

    } else if (btnDinamin.href.includes(`${archivos[3]}`)) {
        btnDinamin.href = `${archivos[0]}`
    }
}

document.addEventListener('DOMContentLoaded', function () {

    changeStyles()
})