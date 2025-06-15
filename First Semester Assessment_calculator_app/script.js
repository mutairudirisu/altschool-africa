const display = document.getElementById('display');
const buttons = document.querySelectorAll('.btn');
let expression = '';

buttons.forEach(button => {
  button.addEventListener('click', () => {
    const value = button.dataset.value;

    if (button.id === 'equals') {
      try {
        // Handle ^ as exponentiation
        expression = expression.replace(/\^/g, '**');
        const result = eval(expression);
        display.textContent = result;
        expression = result.toString();
      } catch {
        display.textContent = 'Error';
        expression = '';
      }
    } else if (button.id === 'clear') {
      expression = expression.slice(0, -1);
      display.textContent = expression;
    } else {
      expression += value;
      display.textContent = expression;
    }
  });
});
