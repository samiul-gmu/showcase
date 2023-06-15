// Test Data 1
const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tips = []
const totals = []

const calcTip = bill => bill >= 50 && bill <= 300 ? bill * 15 / 100 : bill * 20 / 100;

for (let i = 0; i < bills.length; i++) {
    tips[i] = calcTip(bills[i]);
    totals.push(bills[i] + tips[i]);
}

for (let i = 0; i < totals.length; i++) {
    console.log(`Case Data #${i + 1}: The bill was ${bills[i]}, the tip was ${tips[i]}, and the total value ${totals[i]}`);
}

const calcAverage = (numbers) => {
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
        sum += numbers[i];
    }
    return sum / numbers.length;
}

console.log(`Average bill, tip and total are ${calcAverage(bills)}, ${calcAverage(tips)}, and ${calcAverage(totals)}, respectively.`);