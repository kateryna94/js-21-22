
function pow(a, b) {
    var result = 1;
    for (i = 0; i < Math.abs(b); i++) {
        result = result * a;
    }
    if (b > 0) {
        return (result);
    } else {
        return (1.0 / result);
    }

}





try {
    module.exports = pow;
} catch (e) {}
