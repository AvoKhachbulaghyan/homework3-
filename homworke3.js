//  Given an array. Determine whether it consists only from uniques or not.
function hasUniqueElements(arr) {
    let elementsMap = {};

    for (let i = 0; i < arr.length; i++) {
        let element = arr[i];
        if (elementsMap[element]) {
            return false;
        }
        else {
            elementsMap[element] = true;
        }
    }
    return true;
}

//Given an array of numbers. Find the sum of prime numbers.
function isPrime(num) {
    if (num <= 1) {
        return false;
    }
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            return false;
        }
    }
    return true;
}

function sumOfPrimes(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        if (isPrime(arr[i])) {
            sum += arr[i];
        }
    }
    return sum;
}

//Given an array of integers, find the pair of adjacent elements that has the largest product and return that product.
function adjacentElementsProduct(arr) {
    if (arr.length < 2) {
        return null; // Not enough elements to form a pair
    }

    // Initialize maxProduct with the product of the first two elements
    var maxProduct = arr[0] * arr[1];

    // Iterate through the array starting from the second element
    for (var i = 1; i < arr.length - 1; i++) {
        // Calculate the product of the current adjacent elements
        var currentProduct = arr[i] * arr[i + 1];

        // Update maxProduct if the current product is greater
        if (currentProduct > maxProduct) {
            maxProduct = currentProduct;
        }
    }

    return maxProduct;
}

