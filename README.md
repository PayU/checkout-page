# Sample Checkout Page

This project shows sample code for a checkout page that allows customers to pay with credit card or with other payment methods (such as bank transfers). It uses the [Secure Fields Form](https://developers.paymentsos.com/docs/using-the-secure-fields-form.html) for collecting a customer's card information and invokes the [Get Supported Payment Methods](https://developers.paymentsos.com/docs/api/#operation/retrieve-supported-payment-methods) API from a node server to fetch all supported additional payment methods. 

**Important note**: The sample code is shown for illustrative purposes only. You will need to modify the code if you want to use it in a production environment. For more information, see the [Limitations](#limitations) section below. 

# Running the Project

To run the project, check it out with:

```
git clone https://github.com/Zooz/checkout-page.git
cd checkout-page
```

Install all dependencies:

```
npm install
```

Edit `server.js` and replace `app-id` and `private-key` with the id and private key of your Business Unit.

**Note**: The default provider configured in your Business Unit must support the [Get Supported Payment Methods](https://developers.paymentsos.com/docs/api/#operation/retrieve-supported-payment-methods) API. Refer to the features overview in the relevant [provider guide](https://developers.paymentsos.com/docs/providers.html) to determine whether this API is supported by the provider defined in your Business Unit. If the provider does not support the API, you will still to be able to run the project (the list of other payment methods will simply be empty).

Now run the node server:

```
node server.js
```

You can view the checkout page in http://127.0.0.1:9000/index.html

# Limitations

The sample code shown in `server.js` includes statements that are used for illustrative purposes only and should not be used in a production environment. This includes the following:

* `app.use(cors())`. CORS has only been enabled so that you can run the example in your localhost.

* `app-id` and `private-key` are not passed securely. Make sure to implement best practices for passing API keys in your server-side implementation.

