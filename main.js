var operatorSign = '';
var calculator = document.querySelector('section');
// var numberValue;
// var numberString = '';
var buttonClick;
var number1 = '';
var number2 = '';
// var equalSign = document.querySelector('.evaluate');
// var number1 = document.querySelectorAll('.number').value;


//targets text that was clicked//
calculator.addEventListener('click', function(evt) {
    buttonClick = evt.target.innerText;
    if (operatorSign === '' && number1 === '') {
        number1 = buttonClick;
        //number1 is defined because operatorSign is empty so it recognizes that it is the first number clicked.
        // console.log(number1);
    }

    //define each operator to call the variable later
    if (buttonClick === "+") {
        operatorSign = 'add';
        // console.log(operatorSign);
    }

    if (buttonClick === "-") {
        operatorSign = 'subtract';
        // console.log(operatorSign);
    }

    if (buttonClick === "/") {
        operatorSign = 'divide';
        // console.log(operatorSign);
    }

    if (buttonClick === "*") {
        operatorSign = 'multiply';
        // console.log(operatorSign);
    }

    if (buttonClick === "=" && operatorSign === "add") {
        console.log(Number(number1) + Number(number2));
        var sum = document.querySelector('output');
        sum.innerText += Number(number1) + Number(number2);
        //performs operation if number1 and number2 are defined and pushes it to innerText of output element
    }
    if (buttonClick === "=" && operatorSign === "subtract") {
        console.log(Number(number1) - Number(number2));
        var difference = document.querySelector('output');
        difference.innerText += Number(number1) - Number(number2);
    }
    if (buttonClick === "=" && operatorSign === "multiply") {
        console.log(Number(number1) * Number(number2));
        var product = document.querySelector('output');
        product.innerText += Number(number1) * Number(number2);
    }
    if (buttonClick === "=" && operatorSign === "divide") {
        console.log(Number(number1) / Number(number2));
        var quotient = document.querySelector('output');
        quotient.innerText += Number(number1) / Number(number2);
    } else {
        number2 = buttonClick;
        console.log(number2);
        //defines "number2" because if it doesn't meet "number1" criteria then it will fall to "number2" (else)
    }

});

// calculator.addEventListener('click', function(evt) {
//     console.log(evt);
// });

// numberValue code that I was testing but later scrapped
// numberValue = numberString += buttonClick;
// console.log(numberString);
//numberString stores items as they are clicked
// if (numberValue.length === 3) {
//   console.log('hi');
// }

// numberValue = numberString += buttonClick;
// console.log(numberString);
//numberString stores items as they are clicked
