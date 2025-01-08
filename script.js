const convertButton = document.getElementById('convert-button');
const currencySelect = document.getElementById('currency-select');
const outputCurrencyFlag = document.getElementById('output-currency-flag');
const outputCurrencyTitle = document.getElementById('output-currency-title');




function convertValues() {
    const inputCurrencyValue = document.getElementById('input-value').value;
    const inputCurrency = document.getElementById('input-currency');
    const outputCurrency = document.getElementById('output-currency');



    const dolarToday = 6.2;
    const euroToday = 7;

    switch (currencySelect.value) {
        case 'dolar':
            outputCurrency.innerHTML = new Intl.NumberFormat('en-US', {
                style: 'currency',
                currency: 'USD',
            }).format(inputCurrencyValue / dolarToday);
            break;

        case 'euro':
            outputCurrency.innerHTML = new Intl.NumberFormat('de-DE', {
                style: 'currency',
                currency: 'EUR'
            }).format(inputCurrencyValue / euroToday);
            break;

        default:
            console.log('Moeda não reconhecida.');
            // Adicione lógica para valores desconhecidos aqui
    }



    inputCurrency.innerHTML = new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL'
    }).format(inputCurrencyValue);
}

function changeCurrency() {
    switch (currencySelect.value) {
        case 'dolar':
            outputCurrencyFlag.src = "./assets/dolar.png";
            outputCurrencyTitle.innerHTML = "Dolar Americano";
            break;
        case 'euro':
            outputCurrencyFlag.src = "./assets/euro.png";
            outputCurrencyTitle.innerHTML = "Euro";
            break;
        default:
            // Adicione o código para o caso padrão
            break;
    }
    convertValues();
}


currencySelect.addEventListener("change", changeCurrency);
convertButton.addEventListener('click', convertValues);