const billInput = document.getElementById('bill');
const peopleInput = document.getElementById('people');
const tipOutput = document.getElementById('tipamt');
const totalOutput = document.getElementById('total');
const percentage = document.getElementsByClassName('buttonss')
const resetbtn = document.getElementById('reset');

for(let i = 0; i < percentage.length; i++){
    percentage[i].addEventListener('click', computetip)
}

resetbtn.addEventListener('click', reset)

function computetip(e){
    let perc = parseInt(e.target.value);
    let totaltip = (perc / 100 ) * parseFloat(billInput.value);
    let tipperperson = totaltip / parseInt(peopleInput.value)
    let ttlAmount = (parseFloat(billInput.value)/parseFloat(peopleInput.value)) + tipperperson;
    tipOutput.innerText = tipperperson.toFixed(2);
    totalOutput.innerText = ttlAmount.toFixed(2)
}

function reset(){
    tipOutput.innerText = 0.00;
    totalOutput.innerText = 0.00;
    billInput.value = "";
    peopleInput.value = "";
}
