// --- EXERCÍCIO TS CORRIGIDO ---

// Função de multiplicação com tipagem numérica
function multiplicar(a: number, b: number): number {
    return a * b;
}

// Função de saudação com tipagem explícita (conforme solicitado)
function saudar(nome: string): string {
    return "Olá " + nome;
}

// Testes de validação
console.log(multiplicar(5, 10)); 
console.log(saudar("Claudia")); 