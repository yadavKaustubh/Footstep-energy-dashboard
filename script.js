$(function () {


    // VARIABLES
    // ----------------------------------------------------------

    var amount, percent, result, calStep;
    var calculator = $('.calculator');
    var calculatorBill = calculator.find('.calculator__bill');
    var stepCal = calculator.find('.step');
    var calculatorTip = calculator.find('.calculator__tip');
    var calculatorResult = calculator.find('.calculator__result');
    var stepResult = calculator.find('.step__result');
    var tipAmount = calculator.find('.tip-amount');



    // INIT BILL
    // ----------------------------------------------------------

    $(window).on('DOMContentLoaded', function () {
        tipAmount.text(calculatorTip.val() + 'N');
        amount = calculatorBill.val() * 1;
        calStep = stepCal.val();
        percent = calculatorTip.val() * 1.25;
        result = amount + amount * (percent / 100);
        stepResult.text(calStep * result);
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
        percent = calculatorTip.val();
        result = amount * 9.8 * 0.01 * percent;
        calStep = stepCal.val();
        stepResult.text((calStep * result).toFixed(2) + ' W');
        calculatorResult.text(result.toFixed(2) + ' V/step');

    });


});