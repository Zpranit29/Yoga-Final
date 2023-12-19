// server.js
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const port = 5000;

app.use(cors());
app.use(bodyParser.json());

app.get('/api/enroll', (req, res) => {
  res.status(405).json({ error: 'Method Not Allowed', message: 'This endpoint only accepts POST requests.' });
});


app.post('/api/enroll', (req, res) => {
  const { name, age, batch } = req.body;

 
  const ageNumber = parseInt(age, 10);
  if (isNaN(ageNumber) || ageNumber < 18 || ageNumber > 65) {
    return res.status(400).json({ error: 'Invalid age. Please enter a valid age between 18 and 65.' });
  }

  const paymentStatus = completePayment();

  const enrollmentData = { name, age, batch, paymentStatus };

  res.json({ message: 'Enrollment successful', data: enrollmentData });
});

function completePayment() {
  
  return 'Payment Successful';
}

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
