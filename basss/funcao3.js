//code calculo de data de nascimento
var data = new Date()
var atual = data.getFullYear()
var nome = ["Anelise","Tallyson","Tatiana"]
var idade = [1998,1996,1979]

idade2 = idade.map(idade=>{
    return atual-idade
})
console.log(nome)
console.log(idade2)



//CÓDIGO DE DESCONTO
//var valor = [10,50,120,20,500]
//var desconto = valor.map(valor=>{
 //   return valor*0.90
//})
//console.log(valor)
//console.log(desconto)





