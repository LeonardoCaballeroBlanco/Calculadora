function printHistory(){
    let historyOperations = localStorage.getItem('history');
    if(historyOperations) {
        let historyArray = JSON.parse(historyOperations);
        historyArray.forEach(operation => {
            let history = document.querySelector('.historyOperations');
            let p = document.createElement('p');
            p.textContent = JSON.stringify(operation.operation);
            p.textContent = p.textContent.replace(/"/g, '');
            history.appendChild(p);
        });
    }
}

function addNumber(number){
    let resultado = document.getElementById('result');
    resultado.innerHTML += number;
}

function clean(){
    let resultado = document.getElementById('result');
    resultado.innerHTML = '';
}

function saveOperationInLocalStorage(operation){
    let historyOperations = localStorage.getItem('history');
    let tryObject = {operation: operation};
    if(historyOperations) {
        let historyArray = JSON.parse(historyOperations);
        historyArray.push(tryObject);
        localStorage.setItem('history', JSON.stringify(historyArray));
    }else{
        let historyArray = [tryObject];
        localStorage.setItem('history', JSON.stringify(historyArray));
    }
}

function getResult(){
    let result = document.getElementById('result');
    let lastOperation = document.querySelector('.lastOperation');
    lastOperation.innerHTML = result.innerHTML;
    let history = lastOperation.innerHTML;
    result.innerHTML = eval(result.innerHTML);
    let resultOperation = result.innerHTML;
    let operation = history + '=' + resultOperation;
    saveOperationInLocalStorage(operation);
    printHistory();
}

function deleteLastNumber(){
    let resultado = document.getElementById('result');
    resultado.innerHTML = resultado.innerHTML.substring(0, resultado.innerHTML.length - 1);
}

function cleanHistory(){
    localStorage.clear();
    let historyOperations = document.querySelector('.historyOperations');
    historyOperations.innerHTML = '';
}

window.addEventListener('load', printHistory);