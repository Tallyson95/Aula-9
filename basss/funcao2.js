var vetnum1 = [1,3,5,7,9,11,13]
var vetnum2 = [1,2,3,4,5,6,9,11,13]
var result1 = []

for(var i=0; i<vetnum1.length; i++){
    for(var j=0; j<vetnum2.length; j++)
    if(vetnum1 [i] == vetnum2 [j])
    result1.push(vetnum1[i])
}

console.log(result1)
