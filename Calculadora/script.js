const display = document.getElementById('display');

// tem input pq vai receber um.
function appendToDisplay(input) {
    display.value += input;
}

function limpar() {
    display.value = '';
}

function calcular() {
    //essa funçao pega uma expressao tipo 1+1+1+1 e da um resultado como uma propria calculadora
    // mas pode dar erros, por isso usa o try e catch
    try {
        display.value = eval(display.value);
    } catch (error) {
        display.value = 'Erro';
    }
}