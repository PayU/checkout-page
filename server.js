const express = require('express')
const hbs = require('hbs')
const axios = require('axios')
const cors = require('cors')
const port = process.env.PORT || 9000;
var app = express();

app.use(express.static(__dirname + '/public'));
app.use(cors())
app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + '/views/partials')

app.get('/', (req, res) => {
    res.render('home.hbs')
});

app.get('/supportedpaymentmethods', function (req, res) {

    var headers = {
            'app_id': 'com.zooz.payu-sp',
            'private_key': 'F7D576DE-ED0A-44C1-BE38-9298F13D94FC',
            'x-payments-os-env': 'test',
            'api-version': '1.2.0'
    };
    
    axios.get("https://api.paymentsos.com/supported-payment-methods", {
        'headers': headers}).then((response)=>{

         res.send(response.data)

    
    }).catch((e)=>{
            console.log(e.response.data)
       
    })

  });


app.listen(port, ()=>{
    console.log(`server is up on port ${port}`)
}); 