//Part 1

for (let i = 1; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        console.log("Fizz Buzz");
    } else if (i % 3 === 0) {
        console.log("Fizz");
    } else if (i % 5 === 0) {
        console.log("Buzz");
    } else {
        console.log(i);
    }
}

//Part 2

let n = 1;
let isPrime = true;

while (isPrime) {
    n++;
    for (let i = 2; i < n; i++) {
        if (n % i === 0) {
            isPrime = false;
        }
    }
}

console.log(n);

//Part 3

let csv = "ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctors Assistant,26";

let currentCell = "";
let currentRow = [];

for (let i = 0; i < csv.length; i++) {
    if (csv[i] === ",") {
        currentRow.push(currentCell);
        currentCell = "";
    } else if (csv[i] === "\n") {
        currentRow.push(currentCell);
        console.log(currentRow);
        currentRow = [];
        currentCell = "";
    } else {
        currentCell += csv[i];
    }
}
