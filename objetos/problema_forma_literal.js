const d1 = {
    dia: 12,
    mes: 02,
    ano: 1992,
    exibir : function() {
      return `${this.dia}/${this.mes}/${this.ano}`;


    }

}

const d2 = {
    dia: 22,
    mes: 11,
    ano: 2023,
    exibir : function() {
      return `${this.dia}/${this.mes}/${this.ano}`;


    }

}

const d3 = {
    dia: 03,
    mes: 04,
    ano: 2022,
    exibir : function() {
      return `${this.dia}/${this.mes}/${this.ano}`;


    }

}


console.log(d1.exibir());
console.log(d2.exibir());
console.log(d3.exibir());