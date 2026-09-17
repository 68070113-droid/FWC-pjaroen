$(document).ready(function() {

    function calculate() {
        const leftOperand = parseInt($('#leftOperand').val());
        const operator = $('#operator').val();
        const rightOperand = parseInt($('#rightOperand').val());

        if (isNaN(leftOperand) || isNaN(rightOperand) || leftOperand < 0 || rightOperand < 0) {
            alert('Error :(');
            console.error('Error :(');
            return;
        }

        let result;

        switch (operator) {
            case '+':
                result = leftOperand + rightOperand;
                break;
            case '-':
                result = leftOperand - rightOperand;
                break;
            case '*':
                result = leftOperand * rightOperand;
                break;
            case '/':
                if (rightOperand === 0) {
                    alert("It's over 9000!");
                    console.error("It's over 9000!");
                    return;
                }
                result = leftOperand / rightOperand;
                break;
            case '%':
                if (rightOperand === 0) {
                    alert("It's over 9000!");
                    console.error("It's over 9000!");
                    return;
                }
                result = leftOperand % rightOperand;
                break;
            default:
                alert('Error :(');
                console.error('Error :(');
                return;
        }

        alert(`Result: ${result}`);
        console.log(`Result: ${result}`);
    }

    $('#calculateBtn').on('click', calculate);

    setInterval(() => {
        alert('Please, use me...');
    }, 30000);

});