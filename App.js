
const express = require('express');
const app = express();
const cors = require('cors');
const PORT = 3000;
app.use(cors());
app.get('/api', (req, res) => {
  const now = new Date();
  res.json({
    unix: now.getTime(),
    utc:  now.toUTCString()
  });
});

app.get('/',(req,res)=>{
  res.send("Timestamp Microservice is working);
});
app.get('/api/:date?', (req, res) => {
  const  dateParam = req.params.date;
  let date;

  // No date → use current date
  if (!dateParam) {
    date = new Date();
  }
  // If numeric UNIX timestamp
  else if (/^\d+$/.test(dateParam) {
    date = new Date(parseInt(dateParam));
  }
  // If ISO date string
  else {
    date = new Date(dateParam);
  }

  // Check for invalid date
  if (date.toString() === 'Invalid Date') {
    return res.json({ error: 'Invalid Date' });
  }

  res.json({
    unix: date.getTime(),
    utc: date.toUTCString()
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

module.exports = app;
