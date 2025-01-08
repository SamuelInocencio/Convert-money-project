const convertButton = document.getElementById('convert-button');



function convertValues() {
    const inputCurrencyValue = document.getElementById('input-value').value;
    const inputCurrency = document.getElementById('input-currency');
    const outputCurrency = document.getElementById('output-currency');
    const currencySelect = document.getElementById('currency-select').value;


    const dolarToday = 6.2;
    const euroToday = 7;

    switch (currencySelect) {
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

convertButton.addEventListener('click', convertValues);