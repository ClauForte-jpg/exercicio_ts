
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
(document.getElementById("msg") as HTMLElement).textContent = saudacao;

// Função para carregar o perfil do GitHub
async function carregarPerfil() {
    const usuario = "ClauForte-jpg";
    const url = `https://api.github.com/users/${usuario}`;

    try {
        const resp = await fetch(url);
        const dados = await resp.json();

        // Preenche os dados na página
        (document.getElementById("avatar") as HTMLImageElement).src = dados.avatar_url;
        (document.getElementById("nome") as HTMLElement).textContent = dados.name || dados.login;
        (document.getElementById("usuario") as HTMLElement).textContent = "@" + dados.login;
        (document.getElementById("repos") as HTMLElement).textContent = dados.public_repos;
        (document.getElementById("seguidores") as HTMLElement).textContent = dados.followers;
        (document.getElementById("github") as HTMLAnchorElement).href = dados.html_url;
    } catch (erro) {
        alert("Erro ao carregar perfil do GitHub!");
    }
}

// Chama a função para carregar o perfil ao abrir a página
carregarPerfil();

