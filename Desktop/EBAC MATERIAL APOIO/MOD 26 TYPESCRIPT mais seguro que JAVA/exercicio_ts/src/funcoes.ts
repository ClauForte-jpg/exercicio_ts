// --- FUNÇÕES DO EXERCÍCIO EBAC ---

// Função de multiplicação: recebe dois números e retorna o resultado
function multiplicar(a: number, b: number): number {
    return a * b;
}

// Função de saudação: recebe um nome e retorna "Olá " + nome
function saudar(nome: string): string {
    return "Olá " + nome;
}


// --- OUTRAS FUNÇÕES DA AULA ---

function calculaArea(base: number, altura: number): number {
    return base * altura;
}

const calculaArea2 = (base: number, altura: number): number => base * altura;

function somar(...numeros: number[]): void {
    const total = numeros.reduce((acumulador, atual) => acumulador + atual, 0);
    console.log("Total:", total);
    console.log("Números:", numeros);
}

function teste(): string | number {
    if (10 > 5) {
        return 'dez maior que cinco';
    } else {
        return 5;
    }
}

const resultadoDeTeste = teste();


// --- TESTES NO TERMINAL ---
// (Ao rodar 'node src/funcoes.js', você verá os resultados abaixo)

console.log("--- Resultados do Exercício ---");
console.log("Resultado da Multiplicação (5 * 10):", multiplicar(5, 10));
console.log("Resultado da Saudação:", saudar("Seu Nome"));

console.log("\n--- Outros Testes ---");
console.log("Área:", calculaArea(10, 20));
somar(1, 2, 3, 4, 5);
console.log("Resultado do Teste:", resultadoDeTeste);