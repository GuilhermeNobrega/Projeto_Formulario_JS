var i = 5
var lista = []
for(var c = 0;c<i;c++){
    var input = Number(prompt("Digite valor para C:"));
    lista.push(input);
    tamanho = lista.length;
    console.log(tamanho);
    console.log(`Valores salvos: ${lista[c]}`)
    //console.log(`Já temos ${i} valores. Faltam ${i-1}`)
}