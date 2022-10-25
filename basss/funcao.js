var num1 = [2,5,8,12]
var num2 = prompt("Digite um numero de 1 a 5: ")

for (i=0;i<num1.length; i++){
    if (num1 [i] == num2){
        msg2 = "Seu número existe na base de dados"
        break
}
else{
    msg2 = "Não"
}
}

console.log(msg2)