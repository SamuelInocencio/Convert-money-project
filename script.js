"use strict";

const convertButton = document.getElementById('convert-button');
const currencySelect = document.getElementById('currency-select');
const outputCurrencyFlag = document.getElementById('output-currency-flag');
const outputCurrencyTitle = document.getElementById('output-currency-title');

/**
 * Busca as cotações da AwesomeAPI para Dólar, Euro, Libra e Bitcoin.
 */
async function fetchRates() {
    try {
        const response = await fetch(
            'https://economia.awesomeapi.com.br/json/last/USD-BRL,EUR-BRL,GBP-BRL,BTC-BRL'
        );
        if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
        
        const data = await response.json();
        return {
            dolar: parseFloat(data.USDBRL.bid),
            euro: parseFloat(data.EURBRL.bid),
            libra: parseFloat(data.GBPBRL.bid),
            bitcoin: parseFloat(data.BTCBRL.bid)
        };
    } catch (error) {
        console.error('Erro ao obter cotações:', error);
        alert('Não foi possível obter as cotações. Tente novamente mais tarde.');
        return null;
    }
}

/**
 * Converte o valor em Real para a moeda selecionada.
 */
async function convertValues() {
    const rawValue = document.getElementById('input-value').value;
    const inputCurrencyValue = parseFloat(rawValue.replace(',', '.'));
    if (isNaN(inputCurrencyValue)) {
        alert('Por favor, insira um valor numérico válido.');
        return;
    }

    const rates = await fetchRates();
    if (!rates) return;

    const inputCurrency = document.getElementById('input-currency');
    const outputCurrency = document.getElementById('output-currency');

    const selected = currencySelect.value;
    const rate = rates[selected];

    // Formatação do valor convertido
    outputCurrency.innerHTML = new Intl.NumberFormat(
        selected === 'euro' ? 'de-DE' : selected === 'libra' ? 'en-GB' : 'en-US', {
        style: 'currency',
        currency: selected === 'dolar'  ? 'USD'
                  : selected === 'euro'   ? 'EUR'
                  : selected === 'libra'  ? 'GBP'
                  :                         'BTC',
        minimumFractionDigits: selected === 'bitcoin' ? 8 : undefined
    }).format(inputCurrencyValue / rate);

    // Atualiza valor em Real na primeira caixa
    inputCurrency.innerHTML = new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL'
    }).format(inputCurrencyValue);
}

/**
 * Atualiza bandeira e título da moeda de saída e dispara a conversão.
 */
async function changeCurrency() {
    switch (currencySelect.value) {
        case 'dolar':
            outputCurrencyFlag.src = "./assets/dolar.png";
            outputCurrencyTitle.innerHTML = "Dólar Americano";
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
            outputCurrencyTitle.innerHTML = "Bitcoin";
            break;
        default:
            break;
    }
    await convertValues();
}

currencySelect.addEventListener('change', changeCurrency);
convertButton.addEventListener('click', convertValues);

// Exibe conversão inicial ao carregar a página
window.addEventListener('load', () => {
    changeCurrency();
});
