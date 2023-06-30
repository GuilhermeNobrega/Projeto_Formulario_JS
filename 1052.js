var A = Number(window.prompt("Valor nota A"))
var B = Number(window.prompt("Valor nota B"))
var media = (A*3.5 + B*7.5) / 11
console.log(`Valor da media = ${media} `)



let c = Number(prompt("Digite seu valor e veremos seus antecessores e sucessores"))
let escolha= (prompt("Se deseja ver seu sucessor, digite S. Caso contrario, A:"))
switch(escolha){
    case("A"):
//antecessores:
    let antes = []
    for(c;c!=-1;c--){
        console.log(`antecessores: ${c}`);
        antes.push({"antecessores:": c});
        if(c==0){
            break;
        }
    }break;

    case("S"):
//sucessores
    let depois = []
    for(c;c!=-1;c++){
        console.log(`Sucessores: ${c}`);
        depois.push({"Sucessores": c});
        if(c==100){
            break;
        }
    }break;

}
