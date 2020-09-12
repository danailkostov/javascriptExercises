/*
Design a cash register drawer function checkCashRegister() that accepts purchase price
as the first argument (price), payment as the second argument (cash),
and cash-in-drawer (cid) as the third argument.

cid is a 2D array listing available currency.

The checkCashRegister() function should always return an object with a status key and a change key.

Return {status: "INSUFFICIENT_FUNDS", change: []} if cash-in-drawer is less than the change due,
 or if you cannot return the exact change.

Return {status: "CLOSED", change: [...]} with cash-in-drawer as the value for the key change
if it is equal to the change due.

Otherwise, return {status: "OPEN", change: [...]}, with the change due in coins and bills,
sorted in highest to lowest order, as the value of the change key.

Currency Unit Amount
Penny   $0.01 (PENNY)
Nickel  $0.05 (NICKEL)
Dime    $0.1 (DIME)
Quarter $0.25 (QUARTER)
Dollar  $1 (ONE)
Five Dollars    $5 (FIVE)
Ten Dollars $10 (TEN)
Twenty Dollars  $20 (TWENTY)
One-hundred Dollars $100 (ONE HUNDRED)
See below for an example of a cash-in-drawer array:

[
  ["PENNY", 1.01],
  ["NICKEL", 2.05],
  ["DIME", 3.1],
  ["QUARTER", 4.25],
  ["ONE", 90],
  ["FIVE", 55],
  ["TEN", 20],
  ["TWENTY", 60],
  ["ONE HUNDRED", 100]
]
 */

// Code:
function checkCashRegister(price, cash, cid) {
  let change = cash - price;
  const compare = cash - price;
  const cidValues = [];
  const result = { status: 'OPEN', change: [] };
  const currency = [];
  const currencyInit = [];
  const reducer = (accumulator, currentValue) => accumulator + currentValue;
  const newCid = [];
  const values = [];
  const initialValues = [
    { name: 'PENNY', value: 0.01 },
    { name: 'NICKEL', value: 0.05 },
    { name: 'DIME', value: 0.1 },
    { name: 'QUARTER', value: 0.25 },
    { name: 'ONE', value: 1.0 },
    { name: 'FIVE', value: 5.0 },
    { name: 'TEN', value: 10.0 },
    { name: 'TWENTY', value: 20.0 },
    { name: 'ONE HUNDRED', value: 100.0 },
  ];
  // transform cid to object
  for (let i = 0; i < cid.length; i += 1) {
    newCid[i] = { name: initialValues[i].name, value: cid[i][1] };
    cidValues.push(cid[i][1]);
  }
  // create two arrays - one with values from input, and one with initial values
  for (let i = 0; i < initialValues.length; i += 1) {
    if (change > initialValues[i].value) {
      currency.push(newCid[i]);
      currencyInit.push(initialValues[i]);
    }
  }
  // loop through input properties
  for (let i = currency.length - 1; i >= 0; i -= 1) {
    let currentValue = 0;
    // loop through the possible values
    if (
      change !== 0
      && currency[i].value !== 0
      && currencyInit[i].value < change
    ) {
      // make the checkout calculations
      for (let j = currency[i].value; j > 0; j -= currencyInit[i].value) {
        if (change >= currencyInit[i].value) {
          change -= currencyInit[i].value;
          currentValue += currencyInit[i].value;
          change = Number(change.toFixed(2));
        }
      }
      result.change.push([currency[i].name, Number(currentValue.toFixed(2))]);
      values.push(Number(currentValue.toFixed(2)));
    }
  }
  // check if they are no money in cash for change
  if (values.reduce(reducer) < compare) {
    result.status = 'INSUFFICIENT_FUNDS';
    result.change = [];
  }
  // check if cashRegister is empty
  if (cidValues.reduce(reducer) === compare) {
    result.status = 'CLOSED';
    result.change = cid;
  }
  return result;
}

console.log(
  checkCashRegister(3.26, 100, [
    ['PENNY', 1.01],
    ['NICKEL', 2.05],
    ['DIME', 3.1],
    ['QUARTER', 4.25],
    ['ONE', 90],
    ['FIVE', 55],
    ['TEN', 20],
    ['TWENTY', 60],
    ['ONE HUNDRED', 100],
  ]),
);

/*
checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1],
["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]])
should return an object.

checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1],
["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]])
should return {status: "OPEN", change: [["QUARTER", 0.5]]}.

checkCashRegister(3.26, 100, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1],
["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]])
should return {status: "OPEN", change: [["TWENTY", 60], ["TEN", 20], ["FIVE", 15], ["ONE", 1],
["QUARTER", 0.5], ["DIME", 0.2], ["PENNY", 0.04]]}.

checkCashRegister(19.5, 20, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0],
["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]])
 return {status: "INSUFFICIENT_FUNDS", change: []}.

checkCashRegister(19.5, 20, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0],
["ONE", 1], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]])
should return {status: "INSUFFICIENT_FUNDS", change: []}.

checkCashRegister(19.5, 20, [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0],
["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]])
should return {status: "CLOSED", change: [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0],
["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]}.
 */

/*
function checkCashRegister(price, cash, cid) {
  let change = cash - price;
  let compare = cash - price;
  let cidValues = [];
  let result = { status: "OPEN", change: [] };
  const currency = [];
  const currencyInit = [];
  const reducer = (accumulator, currentValue) => accumulator + currentValue;
  let values = [];
  // make variable to store init values
  const initialValues = [
    { name: "PENNY", value: 0.01 },
    { name: "NICKEL", value: 0.05 },
    { name: "DIME", value: 0.1 },
    { name: "QUARTER", value: 0.25 },
    { name: "ONE", value: 1.0 },
    { name: "FIVE", value: 5.0 },
    { name: "TEN", value: 10.0 },
    { name: "TWENTY", value: 20.0 },
    { name: "ONE HUNDRED", value: 100.0 },
  ];
  // transform cid to object
  const newCid = [];
  for (let i = 0; i < cid.length; i += 1) {
    newCid[i] = { name: initialValues[i].name, value: cid[i][1] };
    cidValues.push(cid[i][1]);
  }
  // add currency we can used based on change
  for (let i = 0; i < initialValues.length; i += 1) {
    if (change > initialValues[i].value) {
      currency.push(newCid[i]);
      currencyInit.push(initialValues[i]);
    }
  }
  // check which currency of the possible to use
  for (let i = currency.length - 1; i >= 0; i -= 1) {
    let currentValue = 0;
    if (
      change !== 0 &&
      currency[i].value !== 0 &&
      currencyInit[i].value < change
    ) {
      for (let j = currency[i].value; j > 0; j -= currencyInit[i].value) {
        if (change >= currencyInit[i].value) {
          change -= currencyInit[i].value;
          currentValue += currencyInit[i].value;
          change = Number(change.toFixed(2));
        }
      }
      result.change.push([currency[i].name, Number(currentValue.toFixed(2))]);
      values.push(Number(currentValue.toFixed(2)));
    }
  }
  // check if they are no money in cash for change
  if (values.reduce(reducer) < compare) {
    result.status = "INSUFFICIENT_FUNDS";
    result.change = [];
  }
  // check if cashRegister is empty
  if (cidValues.reduce(reducer) === compare) {
    result.status = "CLOSED";
    result.change = cid;
  }
  return result;
}
 */
