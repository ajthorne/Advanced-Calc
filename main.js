var operatorSign;
// var equalSign = document.querySelector('.evaluate');
var calculator = document.querySelector('section');
var numberValue;
// var number1 = document.querySelectorAll('.number').value;

//targets text that was clicked//
calculator.addEventListener('click', function(evt) {
    numberValue = evt.target.innerText;
    console.log(numberValue);

  if (evt.target.innerText === "+") {
    operatorSign = 'add';
  }

  if (evt.target.innerText === "-") {
    operatorSign = 'subtract';
  }

  if (evt.target.innerText === "/") {
    operatorSign = 'divide';
  }

  if (evt.target.innerText === "*") {
    operatorSign = 'multiply';
  }
});


// calculator.addEventListener('click', function(evt) {
//     console.log(evt);
// });
