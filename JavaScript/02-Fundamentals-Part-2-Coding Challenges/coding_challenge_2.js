// Test Data 1
const bills = [125, 555, 44];

const calcTip = bill => bill >= 50 && bill <= 300 ? bill * 15 / 100 : bill * 20 / 100;

const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
const total = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];

console.log(`Case Data #1: The bill was ${bills[0]}, the tip was ${tips[0]}, and the total value ${total[0]}`);
console.log(`Case Data #1: The bill was ${bills[1]}, the tip was ${tips[1]}, and the total value ${total[1]}`);
console.log(`Case Data #1: The bill was ${bills[2]}, the tip was ${tips[2]}, and the total value ${total[2]}`);
