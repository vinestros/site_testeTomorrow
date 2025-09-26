function descontoPercentual() {
    let valor1 = document.getElementById("valor1").value; // preço original
    let valor2 = document.getElementById("valor2").value; // percentual de desconto

    let resultado = "Informe valores válidos";

    if (!isNaN(valor1) && !isNaN(valor2) && valor1 !== "" && valor2 !== "") {
        let preco = parseFloat(valor1);
        let desconto = parseFloat(valor2);

        let valorFinal = preco - (preco * desconto / 100);
        resultado = "Preço com desconto: R$ " + valorFinal.toFixed(2);
    }

    document.getElementById("resultado").textContent = resultado;
}
