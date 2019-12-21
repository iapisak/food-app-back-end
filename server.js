const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const session = require('express-session');
const cors = require('cors');

const PORT = process.env.PORT || 4000;
require('dotenv').config();

const routes = require('./Routes/api');

// MiddleWare //
app.use(bodyParser.json())
app.use(cors());
app.use(session());

// Routes //
app.use('/api/v1', routes);

app.listen(PORT, () => { console.log(`We are on port ${PORT}`) });