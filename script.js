function Converter() {
    const valorElemento = document.getElementById("valor");
    const valor = valorElemento.value;
    const valorDolarNumerico = parseFloat(valor);
    const valorReal = valorDolarNumerico * 5.35;
  
    const elementoValorConvertido = document.getElementById("valorConvertido");
  
    const valorFinal = "valor convertido para(R$): " + valorReal.toLocaleString('pt-BR', { style: 'currency', currency:'BRL' });
    elementoValorConvertido.innerHTML = valorFinal;
  }
  