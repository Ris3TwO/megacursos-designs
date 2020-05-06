document.addEventListener("DOMContentLoaded", () => {
    const cleave = new Cleave(".card-number", {
        creditCard: true,
        onCreditCardTypeChanged: function(type) {
            // update UI ...
        },
    });

    const code = new Cleave(".card-my", {
        date: true,
        datePattern: ["m", "y"],
    });
});

function isNumber(evt) {
    evt = evt ? evt : window.event;
    var charCode = evt.which ? evt.which : evt.keyCode;
    if (charCode > 31 && (charCode < 48 || charCode > 57)) {
        return false;
    }
    return true;
}