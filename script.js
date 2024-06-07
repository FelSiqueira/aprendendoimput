function multiplicar() {
    const input1 = parseFloat(document.getElementById('input1').value);
    const input2 = parseFloat(document.getElementById('input2').value);
    const input3 = parseFloat(document.getElementById('input3').value);
    const input4 = parseFloat(document.getElementById('input4').value);
    const input5 = parseFloat(document.getElementById('input5').value);
    const resultado = input1 + input2 + input3 + input4 + input5;
    
    
    document.getElementById('resultado').innerText = `Resultado: ${resultado}`;
    document.getElementById('popup').style.display = 'flex';
}

function fecharPopup() {
    document.getElementById('popup').style.display = 'none';
}
