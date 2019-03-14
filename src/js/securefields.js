POS.setPublicKey('xxxxxxxxxxxxxxx');
const style = {
  base:{
    color: 'blue',
    lineHeight: '40px',
    height: 45,
    fontWeight: 400,
    fontSize: '13px'
  }
};
// POS.disableSecurityNumber();
POS.setStyle(style);
// POS.disableCardFormatter();
POS.initSecureFields('card-secure-fields');
document.getElementById('payment-form').addEventListener('submit', function (event) {
  event.preventDefault();
  const additionalData = {
    holder_name: document.getElementById('cardholder-name').value,
    billing_address: {phone: document.getElementById('phone').value}
  }
  POS.createToken(additionalData, result => {
    alert('received: ' + result);
  });
});