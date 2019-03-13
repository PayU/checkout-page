$(document).ready(function () {
    $.ajax({ url: 'http://localhost:9000/supportedpaymentmethods' }).done(function (data) {
        var options = $(".selectpms");
        data[0].supported_payment_methods.sort(SortByName)
        $.each(data, function () {
            data[0].supported_payment_methods.forEach((paymentmethods) => {
                options.append(new Option(paymentmethods.display_name));
            });

        });
    });
});

function SortByName(a, b) {
    var aName = a.display_name.toLowerCase();
    var bName = b.display_name.toLowerCase();
    return ((aName < bName) ? -1 : ((aName > bName) ? 1 : 0));
}