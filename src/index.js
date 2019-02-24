module.exports = function makeExchange(currency) {

    var obj = {};
    var H, Q, D, N, P;
    var currencyWithoutH = 0;
    var currencyWithoutQ = 0;
    var currencyWithoutD = 0;
    var currencyWithoutN = 0;

    if (currency / 50 >= 1) {
        H = Math.trunc(currency / 50);
        currencyWithoutH = currency - H * 50;
        obj["H"] = H;
    } else {
        currencyWithoutH = currency;
    }

    if (currencyWithoutH / 25 >= 1) {
        Q = Math.trunc(currencyWithoutH / 25);
        currencyWithoutQ = currencyWithoutH - Q * 25;
        obj["Q"] = Q;
    } else {

        currencyWithoutQ = currencyWithoutH;
    }

    if (currencyWithoutQ / 10 >= 1) {
        D = Math.trunc(currencyWithoutQ / 10);
        currencyWithoutD = currencyWithoutQ - D * 10;
        obj["D"] = D;
    } else {
        currencyWithoutD = currencyWithoutQ;
    }

    if (currencyWithoutD / 5 >= 1) {
        N = Math.trunc(currencyWithoutD / 5);
        currencyWithoutN = currencyWithoutD - N * 5;
        obj["N"] = N;
    } else {
        currencyWithoutN = currencyWithoutD;
    }

    if (currencyWithoutN >= 1) {
        P = currencyWithoutN;
        obj["P"] = P;
    }

    if (currency > 10000) {
        obj = {error: "You are rich, my friend! We don't have so much coins for exchange"};
    }
    if (currency < 1) {
        obj = {};
    }

    return obj;

};
