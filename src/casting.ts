namespace casting {
    let idade: any = 25;

    // 1. Casting para number: Seguro pois o valor real é 25
    (idade as number).toFixed();

    // 2. Casting para string: CUIDADO. O TS aceita, mas métodos de string 
    // falharão no runtime porque o valor ainda é um number (25).
    // O correto para converter de fato é:
    const idadeEmString = String(idade);
    console.log(idadeEmString.length);

    // 3. ERRO ANTERIOR: Não podemos dar "as string[]" em um número e usar forEach.
    // Correção: Verificamos se é um array antes de iterar.
    if (Array.isArray(idade)) {
        (idade as string[]).forEach(x => {
            console.log(x);
        });
    } else {
        console.log("A variável 'idade' não é um array.");
    }

    // 4. Double Casting: Força o TS a aceitar, mas é uma má prática.
    // Se precisar converter número para string, use String().
    let nome: string = (35 as unknown) as string;
    
    // Agora o ponto funciona e o código não quebra se usarmos métodos de string
    // após a conversão real acima.
    console.log(nome.toString()); 
} // Fechamento do namespace que faltava