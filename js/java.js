function calcularIMC() {
    // Pega os valores dos campos
    let peso = document.getElementById("peso").value;
    let altura = document.getElementById("altura").value;

    // Verifica se os campos foram preenchidos
    if (peso && altura) {
        // Calcula o IMC
        let imc = peso / (altura * altura);
        
        // Exibe o resultado formatado
        document.getElementById("resultado").innerText = "Seu IMC é: " + imc.toFixed(2);
    } else {
        // Caso os campos não estejam preenchidos
        document.getElementById("resultado").innerText = "Por favor, preencha todos os campos!";
    }
}
