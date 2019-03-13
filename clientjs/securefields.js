POS.setPublicKey('1fcb2ad0-536a-4882-8f5d-1293b4eae480');
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