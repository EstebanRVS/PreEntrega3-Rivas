//Tomo los elementos del dom
const botonTomar = document.querySelectorAll('button');
 
let totalValor = 0;

// Agregar evento click a cada botón de TOMARCLASE
botonTomar.forEach((boton) => {
  boton.addEventListener('click', () => {
    
  });
});

/* CALCULADORA */

function calcularIMC() {
    let peso = document.getElementById("peso").value;
    let altura = document.getElementById("altura").value;
    let resultado = document.getElementById("resultado");
    
    //indico que hay q completar los campos 
    if(peso === '' || altura === '') {
      resultado.textContent = "Por favor, introduce tus datos.";
      return;
    }
    
    let imc = peso / (altura * altura);
    //muestro resultado
    resultado.textContent = "Tu índice de masa corporal es: " + imc.toFixed(2);
  }
  