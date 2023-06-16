const printForecast = function (arr) {
  let message = "...";
  for (let i = 0; i < arr.length; i++) {
    message += ` ${arr[i]}°C in ${i + 1} days ...`;
  }
  if (arr.length > 0) return message;
  return "Forecasting is unavailable!";
};

console.log(printForecast([17, 21, 23]));
console.log(printForecast([12, 5, -5, 0, 4]));
console.log(printForecast([]));
