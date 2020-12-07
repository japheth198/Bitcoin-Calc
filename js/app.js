const button = document.querySelector('#add-btn');
const selected = document.querySelector('.selected');
const bitcoins = document.querySelector('#value-number');
const list = document.querySelector('.results');

let total = 0;
button.addEventListener('click', (event) => {
    
    const value = selected.options[selected.selectIndex].value;
    console.log(value);

    let BitcoinsValue = bitcoins.value;

    let url = `https://api.coindesk.com/v1/bpi/currentprice/${value}.json`;
    console.log(url);

    fetch(url)
    .then(response => {
        return response.json();
    })

    .then(data => {
        console.log(data.bpi.EUR.description);
        list.innerHTML = equation + `${data.bpi.EUR.description}`;
        let equation = parseFloat(data.bpi.EUR.rate_float) * BitcoinsValue;
        document.querySelector('.selected').innerHTML = `bitcoins: ${BitcoinsValue} <br> Currency: ${value} <br> Description ${data.bpi.description} <br> ${value} Rate: ${data.bpi.rate_float} <br> Total in ${value}: ${equation}`;
        
        


        
    })

    .catch(error => {
        console.log(error);
    })

    event.preventDefault();

});