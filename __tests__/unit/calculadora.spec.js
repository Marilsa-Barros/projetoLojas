// Importação das funções da calculadora
const calculadora = require("../../src/calculadora.js");

// Importação do arquivo de massa para o teste de divisão
const massaDivisaoJSON = require("../../vendors/massaUnidade");

test("somar 2 + 3", () => {
    // 1- Configura
    // 1.1 Dados de entrada - Input
    const num1 = 2;
    const num2 = 3;
    // 1.2 Dados de saída- Output - Resutado Esperado
    const resultadoEsperado = 5;

    // 1.3- REferência  a função queserá testada (SUT)
    const somarDoisNumeros = calculadora.somarDoisNumeros;

    const resultadoAtual = somarDoisNumeros(num1, num2)

    // 2/3- Executa / Valida
    expect(resultadoAtual).toBe(resultadoEsperado);
})

test("subtrair 50 - 10", () => {
    // 1- Configura
    const num1 = 50;
    const num2 = 10;
    const resultadoEsperado = 40;

    // 2- Executa
    const subtrairDoisNumeros = calculadora.subtrairDoisNumeros;
    const resultadoAtual = subtrairDoisNumeros(num1, num2);

    // 3- Valida
    expect (resultadoAtual).toBe(resultadoEsperado);
});
    test("multiplicar 3 * 6", () => {
        // 1- Configura
        const num1 = 3;
        const num2 = 6;
        const resultadoEsperado = 18

        // 2- Executa / Valida
        const multiplicarDoisNumeros = calculadora.multiplicarDoisNumeros;
        expect (multiplicarDoisNumeros(num1, num2)).toBe(resultadoEsperado);        
        
    });

        // Teste Positivo
    test("dividir 8 / 4", () => {
        const num1 = 8;
        const num2 = 4;
        const resultadoEsperado = 2;
        const dividirDoisNumeros = calculadora.dividirDoisNumeros;
        expect(dividirDoisNumeros(num1, num2)).toBe(resultadoEsperado);    
    });

    // Teste Negativo / Teste de Exceção
    test("dividir por 0", () => {
        const num1 = 7;
        const num2 = 0;
        const resultadoEsperado = Infinity;
        const dividirDoisNUmeros = calculadora.dividirDoisNumeros;
        expect(dividirDoisNUmeros(num1, num2)).toBe(resultadoEsperado);     
    });

    // Teste Dta Driven Test para a função dividirDoisNumeros
    // Lista / Array  / Tuplas que contém a massa de teste
    const massaDivisao = [
    [8,4,2],
    [7,0,Infinity],
    [9,3,3],
    [-10,2,-5],
    [-20,-5,4]
    ]

    // Script que usará  a massa de teste no formato lista
    test.each(massaDivisao)("Dividir %f / %f", (num1, num2, resultadoEsperado) => {
        const dividirDoisNumeros = calculadora.dividirDoisNumeros;
        expect(dividirDoisNumeros(num1, num2)).toBe(resultadoEsperado);
    });

    // Script que usa a massa de teste no formato json
    test.each(massaDivisaoJSON.array.map(elemento => [
        elemento.num1,
        elemento.num2,
        elemento.resultadoEsperado
    ]))("Divida %f / %f", (num1, num2, resultadoEsperado) => {
        expect(calculadora.dividirDoisNumeros(num1, num2)).toBe(resultadoEsperado);
    });
