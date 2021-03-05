const express = require('express');
const morgan = require('morgan');
const path = require('path');
require('dotenv').config()
const app = express();
const port = process.env.PORT || 3000;
const axios = require('axios')

app.use(morgan('dev'));
app.use(express.static(path.join(__dirname, '../public')));

app.listen(port, () => {
  console.log(`server running at: http://localhost:${port}`);
});
