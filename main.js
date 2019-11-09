const $form = document.querySelector("#formulario")
const $calcular = document.querySelector('#calcular')
const $reset = document.querySelector('#reset')

$calcular.onclick = function () {
    mostrar()
}

function mostrar() {
    let puntoUnoX = Number($form.querySelector('#puntoUnoX').value)
    let puntoUnoY = Number($form.querySelector('#puntoUnoY').value)
    let puntoDosX = Number($form.querySelector('#puntoDosX').value)
    let puntoDosY = Number($form.querySelector('#puntoDosY').value)
    let nodoResultado = document.querySelector('#resultado')
    let distancia = Math.sqrt(Math.pow(puntoDosX - puntoUnoX, 2) + Math.pow(puntoDosY - puntoUnoY, 2));
    let kmXhoraAmetrosXMin = 83.3333;
    let tiempoCaminata = distancia / kmXhoraAmetrosXMin;

    if (tiempoCaminata > 0) {
        nodoResultado.className = ('valido')
        nodoResultado.innerText = `La distancia entre el punto 1 y el punto 2 es de ${distancia.toFixed(2)} metros. \n Tardarias ${tiempoCaminata.toFixed(2)} minutos en llegar caminando a 5km/h.`
    } else {
        nodoResultado.className = ('error')
        nodoResultado.innerText = 'Completa los campos correctamente'
    }
}

$reset.onclick = function () {
    reiniciar()
}

function reiniciar() {
    let nodoResultado = document.querySelector('#resultado')
    nodoResultado.className = ('')
    nodoResultado.innerText = ''
}

validarPuntoUnoX(puntoUnoX);
validarPuntoUnoY(puntoUnoY);
validarPuntoDosX(puntoDosX);
validarPuntoDosY(puntoDosY);