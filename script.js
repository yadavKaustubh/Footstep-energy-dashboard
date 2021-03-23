$(function () {


    // VARIABLES
    // ----------------------------------------------------------

    var amount, percent, result;
    var calculator = $('.calculator');
    var calculatorBill = calculator.find('.calculator__bill');
    var calculatorTip = calculator.find('.calculator__tip');
    var calculatorResult = calculator.find('.calculator__result');
    var tipAmount = calculator.find('.tip-amount');

    console.log(calculatorTip);


    // INIT BILL
    // ----------------------------------------------------------

    $(window).on('DOMContentLoaded', function () {
        tipAmount.text(calculatorTip.val() + 'N');
        amount = calculatorBill.val() * 1;
        percent = calculatorTip.val() * 1.25;
        result = amount + amount * (percent / 100);
        calculatorResult.text(result.toFixed(2) + '$');
    });


    // RANGE FUNCTION
    // ----------------------------------------------------------

    calculatorTip.on('change', function () {

        if (calculatorBill.val() === '' || isNaN(calculatorBill.val())) {
            alert('Enter correct value please!')
        } else {
            amount = calculatorBill.val() * 1;
        }

        tipAmount.text(calculatorTip.val() + ' N');
        percent = calculatorTip.val() * 1.25;
        result = amount * 9.8 * 0.001 * percent;
        calculatorResult.text(result.toFixed(2) + ' J/step');

    });

});