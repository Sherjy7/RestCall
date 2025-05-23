const express = require('express');
const router = express.Router();
const VoiceResponse = require('twilio').twiml.VoiceResponse;

router.post('/', (req, res) => {
  const twiml = new VoiceResponse();
  twiml.say('Hi there. Please speak after the beep.');
  // Normally you'd connect to a WebSocket stream here
  res.type('text/xml');
  res.send(twiml.toString());
});

module.exports = router;
