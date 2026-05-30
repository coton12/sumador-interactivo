

    // Lógica para resolver la suma
    function calcularSuma() {
            // El parseFloat es clave, si no JavaScript junta los números como texto (ej: 2 + 2 = 22)
            const n1 = parseFloat(document.getElementById('sumNum1').value);
    const n2 = parseFloat(document.getElementById('sumNum2').value);
    const rContainer = document.getElementById('resSuma');

    if (isNaN(n1) || isNaN(n2)) {
        rContainer.textContent = "Por favor, llena ambos campos.";
    return;
            }

    rContainer.textContent = `Resultado: ${n1 + n2}`;
}
