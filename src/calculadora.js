let somarDoisNumeros = function somarDoisNumeros(num1, num2){
    const resultado = num1 + num2
    return resultado;
}

let subtrairDoisNumeros = function subtrairDoisNuemros(num1, num2){
    return num1 - num2;
}

const multiplicarDoisNumeros = (num1, num2) => num1 * num2;

const dividirDoisNumeros = (num1, num2) => num1 / num2;

module.exports = {
    somarDoisNumeros,
    subtrairDoisNumeros,
    multiplicarDoisNumeros,
    dividirDoisNumeros
};