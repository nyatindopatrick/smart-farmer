const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const User = require('./models/data');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
mongoose
  .connect(
    'mongodb://localhost:27017/smartfarm',
    { useCreateIndex: true, useNewUrlParser: true, useUnifiedTopology: true }
  )
  .then(() => console.log('DB connected sucessfully'))
  .catch(err => console.log(err));

app.use(express.static('dist'));

app.post('/login', (req, res) => {
  const { email, password } = req.body;
  User.findOne({ email: email }, (err, data) => {
    if (err) throw err;
    if (data.password === password) {
      res.send(data);
    } else {
      res.status(401);
    }
  });
});

app.get('/updates', (req, res) => {
  News.find({}, (err, result) => {
    if (err) throw err;
    res.send(result);
  });
});

app.use('/api', require('./routes'));

app.listen(process.env.PORT || 8080, () =>
  console.log(`Listening on port ${process.env.PORT || 8080}!`)
);
