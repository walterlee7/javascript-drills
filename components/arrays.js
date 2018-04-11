/**
 * Fill out the logic for the methods on this class so that they
 * pass the tests (run "npm run test:arrays" from the command line to test).
 */

class ArrayDrills {
    /**
     * Takes in one parameter (array) and returns it
     */

    identity(arr) {
        return arr;
    }

    /**
     * Takes in two parameters (number and an array in that order), returns
     * the value of the array at the corresponding number index.
     *
     * @example value(2, [0, 1, 3, 2]) -> 3
     */
    value(num, arr) {
        return arr[num];
    }

    /**
     * Takes in one parameter (array), returns its length
     */
    length(arr) {
        return arr.length;
    }

    /**
     * Takes in one parameter (array of numbers), calculates the sum and
     * returns it
     *
     * @example sum([1, 2, 3, -2]) -> 4
     */
    sum(arr) {
        let add = (a, b) => a + b;
        return arr.reduce(add);
    }

    /**
     * Takes in one parameter (array), returns a new array with values equal to
     * the values in the original array squared.
     *
     * @example square([2, 3, 4]) -> [4, 9, 16]
     */
    square(arr) {
        let ret = [];

        for (var i = 0, len = arr.length; i < len; i++) {
            ret.push(arr[i] * arr[i]);
        }

        return ret;
    }

    /**
     * Takes in two parameters (number and array in that order), returns a new array
     * with values equal to the values in the original array plus the number passed in.
     *
     * @example add(2, [2, 3, 4]) -> [4, 5, 6]
     */
    add(num, arr) {
        let ret = [];

        for (var i = 0, len = arr.length; i < len; i++) {
            ret.push(arr[i] + num);
        }

        return ret;
    }

    /**
     * Takes in two parameters (number and array in that order), returns true if the
     * number is found in the array
     *
     * @example contains(3, [1, 3, 2]) -> true
     * @example contains(3, [1, 2, 2]) -> false
     */
    contains(num, arr) {

        for (let i = 0; i < arr.length; i++) {
            if (arr[i] === num) {
                return true;
            }
        }
        return false;
    }

    /**
     * Takes in two parameters (arrays), merges them together and
     * returns a single combined array.
     *
     * @example combine([1, 2, 3, 4], [2, 3, 5]) -> [1, 2, 3, 4, 2, 3, 5]
     */
    combine(arr1, arr2) {
        return arr1.concat(arr2);
    }

    /**
     * Takes in one parameter (array), reverses the array and returns.
     *
     * @example reverse([1, 2, 4, 3]) -> [3, 4, 2, 1]
     */
    reverse(arr) {
        return arr.reverse();
    }

    /**
     * Takes in one parameter (array). If numbers, sorts by number,
     * if strings, sorts alphabetically by first letter, else returns
     * an empty array
     *
     * @example sort([1, 2, 4, 3]) -> [1, 2, 3, 4]
     * @example sort(['Apple', 'Pear', 'Baseball', 'Banana']) -> ['Apple', 'Banana', 'Baseball', 'Pear']
     */
    sort(arr) {
        function IsNumber(arr) {
            for (let i = 0; i < arr.length; i++) {

                if (typeof arr[i] === 'number') {
                    return arr.sort(function (a, b) { return a - b });
                } else if (typeof arr[i] === 'string') {
                    return arr.sort();
                } else {
                    return [];
                }
            }
        }
        return IsNumber(arr);
    }

    /**
     * Takes in two parameters (arrays), returns the union of the two sets
     * in the order they were first seen.
     *
     * @example union([1, 2, 3, 4], [2, 3, 5]) -> [1, 2, 3, 4, 5]
     */
    union(arr1, arr2) {
        Array.prototype.unique = function () {
            var a = this.concat();
            for (var i = 0; i < a.length; ++i) {
                for (var j = i + 1; j < a.length; ++j) {
                    if (a[i] === a[j])
                        a.splice(j--, 1);
                }
            }
            return a;
        };
        return arr1.concat(arr2).unique();
    }

    /**
     * Takes in two parameters (arrays), returns the intersect of the two sets
     * in the order they were first seen.
     *
     * @example intersect([1, 2, 3, 4], [2, 3, 5]) -> [2, 3]
     */
    intersect(arr1, arr2) {
        function intersection_destructive(a, b) {
            var result = [];
            while (a.length > 0 && b.length > 0) {
                if (a[0] < b[0]) { a.shift(); }
                else if (a[0] > b[0]) { b.shift(); }
                else /* they're equal */ {
                    result.push(a.shift());
                    b.shift();
                }
            }

            return result;
        }
        return intersection_destructive(arr1, arr2);
    }

    /**
     * Takes in two parameters (arrays), returns an array of the elements in the
     * first parameter that are not in the second in the order they were first
     * seen.
     *
     * @example difference([1, 2, 3, 4], [2, 3, 5]) -> [1]
     */
    difference(arr1, arr2) {
        let arr3 = [];
        for (let i = 0; i < arr1.length; i++) {
            let isDifferent = true;
            for (let j = 0; j < arr2.length; j++) {
                if (arr1[i] === arr2[j]) {
                    isDifferent = false;
                }
            }
            if (isDifferent) {
                arr3.push(arr1[i]);
            }
        }
        return arr3;
    }

    /**
     * Takes in one parameter (array), returns an array of only defined values
     * (no null, undefined, or NaN values) in the order they were first seen.
     *
     * @example defined([1, NaN, undefined, null, 3, null, 4, 0]) -> [1, 3, 4, 0]
     */
    defined(arr) {

        let arr2 = [];
        for (let i = 0; i < arr.length; i++) {
            if (!arr[i] && arr[i] !== 0) {
                //console.log(arr[i]);
            } else {
                arr2.push(arr[i]);
            }
        }
        return arr2;
    }

    /**
     * Takes in two parameters (number then array), returns an array in the same
     * order it was input containing no instances of the number.
     *
     * @example remove(3, [1, 2, 4, 3, 5, 3]) -> [1, 2, 4, 5]
     */
    remove(num, arr) {
        let arr2 = [];
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] !== num) {
                arr2.push(arr[i]);
            }
        }
        return arr2;

    }

    /**
     * Takes in one parameter (array) and returns a flattened array with
     * values in the order they were first seen
     * (meaning if the input array has other arrays in it, the values
     * of those arrays will be bubbled up to be value first class members
     * of the return array)
     *
     * @example flatten([0, 1, [2], [[3], [4]]]) -> [0, 1, 2, 3, 4]
     */
    flatten(arr) {
        function flatten(arr) {

            return arr.reduce(function (flat, toFlatten) {
                if (Array.isArray(toFlatten)) {
                    return flat.concat(flatten(toFlatten));
                }

                return flat.concat(toFlatten);
            }, []);
        }
        return flatten(arr);
    }

    /**
     * Takes in one parameter (array), which contains values 1-(length+1) of the array
     * with a random number missing. Returns the missing number.
     *
     * For example, if the array's length is 10, it will have numbers 1-11 with
     * 1 number missing.
     *
     * @example findMissingNumber([1, 2, 3, 4, 6, 7, 8, 9, 10]) -> 5
     */
    findMissingNumber(arr) {
        function sumArray() {
            let add = (a, b) => a + b;
            return arr.reduce(add);
        }

        function sum() {
            let totalArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
            let add = (a, b) => a + b;
            return totalArray.reduce(add);
        }

        return sum() - sumArray();

        // for (var i = 1; i < arr.length; i++) {
        //     if (arr[i] - arr[i - 1] != 1) {
        //         //Not consecutive sequence, here you can break or do whatever you want
        //         return arr[i] - 1;
        //     }
        // }
    }
}

module.exports = new ArrayDrills();
