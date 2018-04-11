/**
 * Fill out the logic for the methods on this class so that they
 * pass the tests (run "npm run test:numbers" from the command line to test).
 */
class NumberDrills {
    /**
     * Takes in one parameter (number) and returns it
     */
    identity(num) {
        return num;
    }

    /**
     * Takes in two parameters, adds them, and returns the result
     */
    add(a, b) {
        return a + b;
    }

    /**
     * Takes in two parameters, subtracts them, and returns the result
     */
    subtract(a, b) {
        return a - b;
    }

    /**
     * Takes in two parameters, multiplies them, and returns the result
     */
    multiply(a, b) {
        return a * b;
    }

    /**
     * Takes in two parameters, divides them, and returns the result
     */
    divide(a, b) {
        return a / b;
    }

    /**
     * Takes in two parameters, returns the result of the modulus
     */
    mod(a, b) {
        return a % b;
    }

    /**
     * Takes in two parameters, returns true if the first parameter is
     * greater than the second, false otherwise.
     */
    isGreater(a, b) {
        return a > b;
    }

    /**
     * Takes in two parameters, returns true if the first parameter is
     * less than the second, false otherwise.
     */
    isLess(a, b) {
        return a < b;
    }

    /**
     * Takes in one parameter, returns true if it is even, false otherwise.
     */
    isEven(a) {
        return a % 2 === 0;
    }

    /**
     * Takes in one parameter, returns true if it is odd, false otherwise.
     */
    isOdd(a) {
        return a % 2 != 0;
    }

    /**
     * Takes in two parameters, returns true if the first parameter is
     * evenly divisible by the second.
     */
    isDivisibleBy(a, b) {
        return a % b === 0;
    }
}

module.exports = new NumberDrills();
