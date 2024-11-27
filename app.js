const inputelement = document.querySelector("#amount");
const firstoption = document.querySelector("#firstCurrencyOption");
const secondoption = document.querySelector("#secondCurrencyOption");
const resultelement = document.querySelector("#result");

const currency = new Currency();
runevent();



function runevent() {
    inputelement.addEventListener("input", exchange);
}

function exchange() {
    const firstvalue = Number(inputelement.value.trim());
    const secondvalue = Number(resultelement.value.trim());
    const firstOptionValue = firstoption.options[firstoption.selectedIndex]
        .textContent;
    const secondOptionValue = secondoption.options[secondoption.selectedIndex]
        .textContent;

    currency.exchange(firstvalue, firstOptionValue, secondOptionValue)
        .then((result) => {
            resultelement.value=result
        })
}
