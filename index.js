'use strict';

/*global module:true*/

let mean = numbers => {
    if (!Array.isArray(numbers)) {
        return null;
    }
    return numbers.reduce((pv, cv) => pv + cv, 0) / numbers.length;
};

let median = numbers => {
    if (!Array.isArray(numbers)) {
        return null;
    }
    let median = 0, numsLen = numbers.length;
    numbers.sort();

    if (numbers.length % 2 == 0) {
        median = (numbers[numsLen / 2 - 1] + numbers[numsLen / 2]) / 2;
    } else {
        median = numbers[(numsLen - 1) / 2];
    }
    return median;
};

let mode = numbers => {
    if (!Array.isArray(numbers)) {
        return null;
    }
    let modes = [], count = [], maxIndex = 0;

    for (let value of numbers) {
        count[value] = (count[value] || 0) + 1;
        if (count[value] > maxIndex)
            maxIndex = count[value];
    }

    for (let i of numbers) {
        if (count.hasOwnProperty(i)) {
            if (count[i] === maxIndex) {
                modes.push(Number(i));
            }
        }
    }

    return modes;
};

let standardDeviation = numbers => {
    if (!Array.isArray(numbers)) {
        return null;
    }

    return Math.sqrt(variance(numbers));
};

let variance = numbers => {
    if (!Array.isArray(numbers)) {
        return null;
    }
    let initialMean = mean(numbers);
    let varianceNumbersArray = [], i;
    for(i = 0; i < numbers.length; i += 1) {
        let varianceNumber = numbers[i] - initialMean;
        varianceNumbersArray.push(varianceNumber * varianceNumber);
    }
    let variance = mean(varianceNumbersArray);

    return variance;
};

module.exports = {
    mean: mean,
    median: median,
    mode: mode,
    standardDeviation: standardDeviation,
    variance: variance
};
