const express = require('express');
const cors = require('cors');
require('dotenv').config();

const weatherRoute = require('./routes/weather');

const app = express();
app.use(cors());

// Mount the /weather route
app.use('/weather', weatherRoute);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${5000}`);
});
