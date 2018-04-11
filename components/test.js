function findMissingNumber(arr) {
    let add = (a, b) => a + b;
    return arr.reduce(add);

    // for (var i = 1; i < arr.length; i++) {
    //     if (arr[i] - arr[i - 1] != 1) {
    //         //Not consecutive sequence, here you can break or do whatever you want
    //         return arr[i] - 1;
    //     }
    // }
}

console.log(findMissingNumber([1, 2, 3, 4, 6, 7, 8, 9, 10]));