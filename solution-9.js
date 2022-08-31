`use strict`;

const data1 = [17, 21, 23];

const printForecast = function (arr) {
  let str = "";
  for (let i = 0; i < arr.length; i++) {
    str = str + `${arr[i]}'C in ${i + 1} Days ...`;
  }
  console.log(`...` + str);
};
printForecast(data1);
