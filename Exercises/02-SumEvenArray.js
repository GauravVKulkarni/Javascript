const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let sum = 0;

const Sum = (numbers, sum) => {
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] % 2 === 0) {
            sum += numbers[i];
        }
    }
    return sum;
}

console.log(Sum(numbers,sum));