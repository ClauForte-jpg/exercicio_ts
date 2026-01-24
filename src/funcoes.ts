function calculaArea(base: number, altura: number): number {
    return base * altura;
}

const calculaArea2 = (base: number, altura: number): number => base * altura;

function somar(...numeros: number[]): void {
    const total = numeros.reduce((acumulador, atual) => acumulador + atual, 0);
    console.log("Total:", total);
    console.log("Números:", numeros);
}

//void

function teste(): string | number {
    if (10>5) {
        return 'dez maior que cinco'
    } else {
        return 5
    }
}

const resultadoDeTeste = teste()
