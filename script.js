const convertButton = document.getElementById('convert-button');
const currencySelect = document.getElementById('currency-select');
const outputCurrencyFlag = document.getElementById('output-currency-flag');
const outputCurrencyTitle = document.getElementById('output-currency-title');




function convertValues() {
    const inputCurrencyValue = document.getElementById('input-value').value;
    const inputCurrency = document.getElementById('input-currency');
    const outputCurrency = document.getElementById('output-currency');



    const dolarToday = 6.12;
    const euroToday = 6.51;
    const libraToday = 7.56;
    const bitcoinToday = 581212.48;

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

        case 'libra':
            outputCurrency.innerHTML = new Intl.NumberFormat('en-GB', {
                style: 'currency',
                currency: 'GBP',
            }).format(inputCurrencyValue / libraToday);
            break;

        case 'bitcoin':
            outputCurrency.innerHTML = new Intl.NumberFormat('en-US', {
                style: 'currency',
                currency: 'BTC',
                minimumFractionDigits: 8, // Mostra até 8 casas decimais, padrão para Bitcoin
            }).format(inputCurrencyValue / bitcoinToday);

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
        case 'libra':
            outputCurrencyFlag.src = "./assets/libra.jpg";
            outputCurrencyTitle.innerHTML = "Libra";
            break;
        case 'bitcoin':
            outputCurrencyFlag.src = "./assets/bitcoin.png";
            outputCurrencyTitle.innerHTML = "BitCoin";
            break;
        default:
            // Adicione o código para o caso padrão
            break;
    }
    convertValues();
}


currencySelect.addEventListener("change", changeCurrency);
convertButton.addEventListener('click', convertValues);