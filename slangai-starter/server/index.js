require('dotenv').config();
const express = require('express');
const voiceRoute = require('./routes/voice');

const app = express();
app.use(express.json());

app.use('/voice', voiceRoute);

app.listen(3000, () => console.log('Server running on port 3000'));
