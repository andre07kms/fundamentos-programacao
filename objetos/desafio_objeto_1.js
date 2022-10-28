//Data 
//atributos: dia, mes, ano
//metodo: exibir -> 'dia/mes/ano'

const data = {
    dia: 12,
    mes: 02,
    ano: 1992,
    exibir : function() {
      return `${this.dia}/${this.mes}/${this.ano}`;


    }

}

console.log(data.exibir());
