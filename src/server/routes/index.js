const router = require('express').Router();
const User = require('../models/data');

router.post('/register', (req, res) => {
  const { first_name, last_name, email, phone, exist, password } = req.body;
  const name = `${first_name} ${last_name}`;
  console.log(email);
  const createUser = new User({ ...req.body, name });
  createUser
    .save()
    .then(data => res.status(200).json(data))
    .catch(err => console.log(err));
});

router.get('/profile', (req, res) => {
  User.find({}, (err, data) => {
    if (err) throw err;
    res.send(data);
  });
});

router.post('/sms', (req, res) => {
  const { phone, message } = req.body;
  console.log(req.body);
  const credentials = {
    apiKey: '86609e3f37e9fb6eef77461cc22e4b1366e7b71ef44b706313aaa25804cb59e1',
    username: 'nyatindopatrick'
  };

  // Initialize the SDK
  const AfricasTalking = require('africastalking')(credentials);

  // Get the SMS service
  const sms = AfricasTalking.SMS;

  function sendMessage() {
    const options = {
      // Set the numbers you want to send to in international format
      to: `+254${phone}`,
      // Set your message
      message: message
      // Set your shortCode or senderId
      // from: 'XXYYZZ'
    };

    // That’s it, hit send and we’ll take care of the rest
    sms
      .send(options)
      .then(console.log)
      .catch(console.log);
  }

  sendMessage();
});
module.exports = router;
