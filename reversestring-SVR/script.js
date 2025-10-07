// Referencias a los elementos
const inputText = document.getElementById('inputText');
const outputText = document.getElementById('outputText');
const btnInvertir = document.getElementById('btnInvertir');
const btnCopiar = document.getElementById('btnCopiar');

// Función para invertir una cadena
function invertirCadena(cadena) {
  return cadena.split('').reverse().join('');
}

// Al hacer clic en "Invertir"
btnInvertir.addEventListener('click', () => {
  const texto = inputText.value.trim();

  if (texto === '') {
    alert('Por favor escribe un texto primero.');
    return;
  }

  const textoInvertido = invertirCadena(texto);
  outputText.value = textoInvertido;
  outputText.disabled = true;
});

// Al hacer clic en "Copiar"
btnCopiar.addEventListener('click', () => {
  if (outputText.value === '') {
    alert('No hay texto para copiar.');
    return;
  }

  outputText.disabled = false; // habilitamos para poder seleccionar
  outputText.select();
  document.execCommand('copy');
  outputText.disabled = true;

  alert('Texto copiado al portapapeles.');
});
