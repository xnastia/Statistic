﻿function countMatches(data) {
    counter = {}
            key = "0";
            updateCounter(counter, key);
        }
            key = data[i] + "" + data[i - 1];
            key = data[i] + "" + data[i - 1] + "" + data[i - 2];

    counter["1"] = length - counter["0"];
    return counter;
}

function updateCounter(counter, key) {

    if (typeof (counter[key]) === 'undefined') {
        counter[key] = 0;
    }
}

function getMatchesStatistic(counter, number) {
    statistic = {}
    var keys = Object.keys(counter);
    var length = keys.length;

    for (var i = 0; i < length; i++) {
        var key = keys[i];
        var symbolsNumber = keys[i].length;
        statistic[key] = (counter[key] * 100 / (number - (symbolsNumber - 1))).toFixed(2) + " %"
    }

    return statistic;
}
