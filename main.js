const $form = document.querySelector("#formulario");
const $calcular = document.querySelector("#calcular");
const $reset = document.querySelector("#reset");

$calcular.onclick = () => {
  mostrar();
};

function mostrar() {
  const puntoUnoX = Number($form.querySelector("#puntoUnoX").value);
  const puntoUnoY = Number($form.querySelector("#puntoUnoY").value);
  const puntoDosX = Number($form.querySelector("#puntoDosX").value);
  const puntoDosY = Number($form.querySelector("#puntoDosY").value);
  const nodoResultado = document.querySelector("#resultado");
  const distanciaMetros = Math.sqrt((puntoDosX - puntoUnoX) ** 2 + (puntoDosY - puntoUnoY) ** 2);
  const distanciaKm = distanciaMetros * 0.001;
  const kmXhoraAmetrosXMin = 83.3333;
  const tiempoCaminataMinutos = distanciaMetros / kmXhoraAmetrosXMin;
  const tiempoCaminataHoras = tiempoCaminataMinutos / 60;

  if (tiempoCaminataMinutos > 0) {
    nodoResultado.className = "valido";
    nodoResultado.innerText = `• La distancia entre el punto 1 y el punto 2 es de ${distanciaMetros.toFixed(
      0
    )} metros (${distanciaKm.toFixed(1)}km). \n • Tardarias ${tiempoCaminataMinutos.toFixed(
      0
    )} minutos (${tiempoCaminataHoras.toFixed(1)} horas) en llegar caminando a 5km/h.`;
  } else {
    nodoResultado.className = "error";
    nodoResultado.innerText = "Completa los campos correctamente";
  }
}

$reset.onclick = () => {
  reiniciar();
};

function reiniciar() {
  const nodoResultado = document.querySelector("#resultado");
  nodoResultado.className = "";
  nodoResultado.innerText = "";
}

validarPuntoUnoX(puntoUnoX);
validarPuntoUnoY(puntoUnoY);
validarPuntoDosX(puntoDosX);
validarPuntoDosY(puntoDosY);
