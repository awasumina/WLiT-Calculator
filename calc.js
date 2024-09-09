let input = document.getElementById("inputbox");
let historyDisplay = document.getElementById("historyDisplay");
let buttons = document.querySelectorAll("button");

let string = "";
let memory = 0;
let recentHistory = "";

Array.from(buttons).forEach(button => {
    button.addEventListener('click', (e) => {
        let buttonText = e.target.innerHTML;

        if (buttonText === '=') {
            try {
                let result = eval(string);
                recentHistory = string + ' = ' + result;
                historyDisplay.innerHTML = recentHistory;
                string = result.toString();
                input.value = string;
            } catch (err) {
                input.value = "Error";
                string = "";
            }
        } else if (buttonText === 'AC') {
            string = "";
            input.value = string;
            historyDisplay.innerHTML = "";
        } else if (buttonText === 'DEL') {
            string = string.slice(0, -1);
            input.value = string;
        } else if (buttonText === '√') {
            string = Math.sqrt(eval(string)).toString();
            input.value = string;
        } else if (buttonText === 'x²') {
            string = Math.pow(eval(string), 2).toString();
            input.value = string;
        } else if (buttonText === '±') {
            string = (-1 * eval(string)).toString();
            input.value = string;
        } else if (buttonText === 'exp') {
            string = Math.exp(eval(string)).toString();
            input.value = string;
        } else if (buttonText === 'M+') {
            memory += eval(string);
        } else if (buttonText === 'M-') {
            memory -= eval(string);
        } else if (buttonText === 'MC') {
            memory = 0;
        } else if (buttonText === 'MR') {
            string = memory.toString();
            input.value = string;
        } else {
            string += buttonText;
            input.value = string;
        }
    });
});
