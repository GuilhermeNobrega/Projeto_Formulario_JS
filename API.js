/* Para utilizar a API da Marvel em seu código JavaScript para obter datas de nascimento dos heróis, você precisará seguir alguns passos. A API da Marvel requer uma chave de autenticação que você pode obter após se inscrever como desenvolvedor no site da Marvel Developer (developer.marvel.com). Assumindo que você já possui sua chave de autenticação (chamada de "API key"):

Passo 1: Configurar sua chave de autenticação
Certifique-se de ter sua chave de autenticação da Marvel API (API key) em mãos. Ela será usada para fazer as solicitações à API e deve ser incluída nos cabeçalhos das requisições HTTP.

Passo 2: Realizar as solicitações HTTP
Para fazer solicitações HTTP na API da Marvel, você pode usar a função fetch do JavaScript ou bibliotecas como Axios ou jQuery. Vou mostrar como fazer utilizando a função fetch, que é nativa do JavaScript.

A URL base da API da Marvel é: https://gateway.marvel.com/v1/public/ */

var chavepublica = "2c4b9fc14553fb325ec2aecf3ecb032f"
var hashmd5 = "2c97e9633fe2b75b94b7517faa907463"
var ts = "1"
fetch(`https://gateway.marvel.com:443/v1/public/characters?ts=${ts}&apikey=${chavepublica}&hash=${hashmd5}&limit=8`
).then((Response) => {
    return Response.json();
}).then((jsonParsed) =>{
    console.log(jsonParsed);
    var divRecebedorHerois = document.querySelector('#quadradinhos');
    jsonParsed.data.results.forEach(element => {
        var caminhoImagem = element.thumbnail.path + '.' + element.thumbnail.extension;
        var nomeHeroi = element.name;
        createDivHero(caminhoImagem, nomeHeroi, divRecebedorHerois);
    });
})
function createDivHero(caminhoImagem,nomeHeroi,divtoAppend){
    var divPai = document.createElement('div');
    var divFilho = document.createElement('div');
    var textName = document.createElement('text');
    var img = document.createElement('img');

    textName.textContent = nomeHeroi;
    img.src = caminhoImagem;
    divFilho.appendChild(img);
    divFilho.appendChild(textName);
    divPai.appendChild(divFilho);
    divtoAppend.appendChild(divPai);
    
    divPai.classList.add("personagem");
}
