"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
// Declaração das variáveis e concatenação igual ao modelo
let saudacao = "olá";
const nome = "maria";
// Concatenando com +
saudacao = "olá " + nome;
console.log(saudacao); // olá maria
// Usando template string
saudacao = `olá ${nome}`;
console.log(saudacao); // olá maria
// Usando expressão dentro do template string
saudacao = `olá ${10 + 10}`;
console.log(saudacao); // olá 20
// Exibe o último valor na página
document.getElementById("msg").textContent = saudacao;
// Função para carregar o perfil do GitHub
function carregarPerfil() {
    return __awaiter(this, void 0, void 0, function* () {
        const usuario = "ClauForte-jpg";
        const url = `https://api.github.com/users/${usuario}`;
        try {
            const resp = yield fetch(url);
            const dados = yield resp.json();
            // Preenche os dados na página
            document.getElementById("avatar").src = dados.avatar_url;
            document.getElementById("nome").textContent = dados.name || dados.login;
            document.getElementById("usuario").textContent = "@" + dados.login;
            document.getElementById("repos").textContent = dados.public_repos;
            document.getElementById("seguidores").textContent = dados.followers;
            document.getElementById("github").href = dados.html_url;
        }
        catch (erro) {
            alert("Erro ao carregar perfil do GitHub!");
        }
    });
}
// Chama a função para carregar o perfil ao abrir a página
carregarPerfil();
