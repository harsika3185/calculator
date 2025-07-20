const express = require('express');
const path = require('path');
const app = express();
const PORT = 3000;

app.use(express.static('public'));
app.use(express.json());

app.post('/calculate', (req, res) => {
  const { num1, num2, operation } = req.body;
  let result;

  switch (operation) {
    case 'add':
      result = num1 + num2;
      break;
    case 'sub':
      result = num1 - num2;
      break;cd 
    case 'mul':
      result = num1 * num2;
      break;
    case 'div':
      result = num2 !== 0 ? num1 / num2 : 'Error: Divide by zero';
      break;
    default:
      result = 'Invalid operation';
  }

  res.json({ result });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
