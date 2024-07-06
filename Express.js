const express = require('express');
const app = express();

app.get('/listings', (req, res) => {
  // Your handler logic here
  res.send('Listings page');
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
app.use(express.static('public'));
