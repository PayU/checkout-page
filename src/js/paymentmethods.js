$(document).ready(function () {
    $.ajax({ url: 'http://localhost:9000/supportedpaymentmethods' }).done(function (data) {
        if (data.category == "api_authentication_error") {
            alert ("Could not authenticate the request to the Get Payment Methods API! The Other Payment Methods list will be empty.")
        }
        else if (data[0].result.status == "Failed") {
            alert ("Could not fetch the payment method list. " + data[0].result.description)
        }
        else {
            var options = $(".selectpms");
            data[0].supported_payment_methods.sort(SortByName)
            $.each(data, function () {
                data[0].supported_payment_methods.forEach((paymentmethods) => {
                    options.append(new Option(paymentmethods.display_name));
                });
    
            });
        }
    }).fail(function(xhr, status, error) {
        //Ajax request failed.
        var errorMessage = xhr.status + ': ' + xhr.statusText
        alert('Error - ' + errorMessage);
  });
});

$("#paybtnapms").click(function(){

    if ($(".selectpms").val() != null) {
        alert("The customer selected to pay with " + $(".selectpms").val() + ". Now handle the remainder of the payment flow!");
      }  
      
    else {
        alert("There are no payment methods available.");
      }
     
    });

function SortByName(a, b) {
    var aName = a.display_name.toLowerCase();
    var bName = b.display_name.toLowerCase();
    return ((aName < bName) ? -1 : ((aName > bName) ? 1 : 0));
}
