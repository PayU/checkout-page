const express = require('express');
const axios = require('axios');
const cors = require('cors');
const path = require('path');

const app = express();

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'src', 'js')));
app.use(express.static(path.join(__dirname, 'src', 'css')));
app.use(cors());


app.get('/supportedpaymentmethods', (req, res) => {
  const headers = {
    // Replace app-id and private-key with the id and private key of your Business Unit.
    // The default provider configured in this Business Unit must support the Get Supported Payment Methods API.
    'app-id': 'com.xxx.xxx',
    'private-key': 'xxxxxxxxxxxxx',
    'x-payments-os-env': 'test',
    'api-version': '1.2.0',
  };

  axios.get('https://api.paymentsos.com/supported-payment-methods', { headers })
    .then((response) => {
      res.send(response.data);
    })
    .catch((e) => {
      console.log(e.response.data);
      res.send(e.response.data);
    });
});


app.listen('9000', () => {
  console.log('server is up on port 9000');
});
