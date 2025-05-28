function calculate() {
  const num1 = parseFloat(document.getElementById('input1').value);
  const num2 = parseFloat(document.getElementById('input2').value);
  const result = num1 + num2;
  document.getElementById('result').textContent = `Result: ${result}`;
}
