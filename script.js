function Converter() {
    var valorElemento = document.getElementById("valor");
    var valor = valorElemento.value;
    var valorDolarNumerico = parseFloat(valor);
    var valorReal = valorDolarNumerico * 5.35;
  
    var elementoValorConvertido = document.getElementById("valorConvertido");
  
    var valorConvertido = "valor convertido para(R$): " + valorReal;
    elementoValorConvertido.innerHTML = valorConvertido;
  }
  