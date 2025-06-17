
const express = require('express');
const app = express();
const PORT = 3000;

app.get('/api/:date?', (req, res) => {
  const { date } = req.params;
  let parsedDate;

  // No date → use current date
  if (!date) {
    parsedDate = new Date();
  }
  // If numeric UNIX timestamp
  else if (!isNaN(date)) {
    parsedDate = new Date(parseInt(date));
  }
  // If ISO date string
  else {
    parsedDate = new Date(date);
  }

  // Check for invalid date
  if (parsedDate.toString() === 'Invalid Date') {
    return res.json({ error: 'Invalid Date' });
  }

  res.json({
    unix: parsedDate.getTime(),
    utc: parsedDate.toUTCString()
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

module.exports = app;
