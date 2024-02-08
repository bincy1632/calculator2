const display = document.getElementById("display");

function addtoDisplay(num) {
  display.value += num;
}
function clearDisplay() {
  display.value = "";
}
function operations(operator) {
  display.value += operator;
}

function checkResult() {
  
        const expression = display.value;
        const operators = ['+', '-', '*', '/'];
        
        // Find the operator in the expression
        let operatorIndex = -1;
        for (let i = 0; i < operators.length; i++) {
          operatorIndex = expression.lastIndexOf(operators[i]);
          if (operatorIndex !== -1) {
            break;
          }
        }
        
        // Split the expression into operands
        const operand1 = expression.slice(0, operatorIndex);
        const operand2 = expression.slice(operatorIndex + 1);
        
        // Perform the operation based on the operator
        let result;
        switch (expression[operatorIndex]) {
          case '+':
            result = parseFloat(operand1) + parseFloat(operand2);
            break;
          case '-':
            result = parseFloat(operand1) - parseFloat(operand2);
            break;
          case '*':
            result = parseFloat(operand1) * parseFloat(operand2);
            break;
          case '/':
            result = parseFloat(operand1) / parseFloat(operand2);
            break;
          default:
            // Invalid operator
            result = 'Error';
            break;
        }
        
        // Display the result
        display.value = result;
      }
      
   


    
       
    
   

