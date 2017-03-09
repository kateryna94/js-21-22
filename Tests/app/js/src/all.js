
function pow(a, b) {
    var result = 1;
    for (i = 0; i < Math.abs(power); i++) {
        result = result * integer;
    }
    if (power > 0) {
        return (result);
    } else {
        return (1.0 / result);
    }

}



try {
    module.exports = pow;
} catch (e) {}

var integer = prompt('Введите число');
var power = prompt('Введите степень');


alert(pow(integer, power));
