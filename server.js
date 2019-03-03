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
            'app_id': 'com.zooz.docapp',
            'private_key': 'bede7ee5-eaad-4c8a-bc1f-617ba28257ae',
            'x-payments-os-env': 'test',
            'api-version': '1.2.0'
    };
    
    axios.get("https://api.paymentsos.com/customers/e723ee51-5457-4839-badf-ac23bb1b2bc1", {
        'headers': headers}).then((response)=>{

         res.send(response.data)

    
    }).catch((e)=>{
            console.log(e.message)        
       
    })

  });


app.listen(port, ()=>{
    console.log(`server is up on port ${port}`)
}); 