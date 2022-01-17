var buttons = document.getElementsByClassName("button");
var display = document.getElementById("output");
var operand1 = 0;
var operand2 = null;
var operand = null;

for (var i = 0; i < buttons.length; i++){
    buttons[i].addEventListener('click', function(){
        var value = this.getAttribute('data-value');
        if (value == "+"){
            operand = '+'
            operand1 = parseFloat(display.textContent);
            display.innerText = null;

        }else if (value == "-"){
            operand = '-'
            operand1 = parseFloat(display.textContent);
            display.innerText = null;

        }else if (value == "*"){
            operand = '*'
            operand1 = parseFloat(display.textContent);
            display.innerText = null;

        }else if (value == "/"){
            operand = '/'
            operand1 = parseFloat(display.textContent);
            display.innerText = null;

        }else if (value == '='){
            operand2 = parseFloat(display.textContent);
            var result = eval(operand1 + operand + operand2)
            display.innerText = result;

        }else if (value == 'AC'){
            display.innerText = null;

        }else{
            display.innerText += value;
        }
    });
}