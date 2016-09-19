/**
 * Solving Experience E26.
 * Created by Kyle on 9/18/16.
 */

const numList = [1, 2, 3, 4];

function sumForLoop(list) {
  let sum = 0;
  for (const num of list) {
      sum += num;
  }
  return sum;
}

console.log(sumForLoop(numList));

function sumWhileLoop(list) {
  let sum = 0;
  let i = 0;
  while (i < list.length) {
    sum += list[i];
    i++;
  }
  return sum;
}

console.log(sumWhileLoop(numList));

function sumRecursion(list) {
  if(list.length === 0) {
    return 0;
  } else {
    return list[0] + sumRecursion(list.slice(1, list.length));
  }
}

console.log(sumRecursion(numList));

function sumUnderscore(list) {
  return _.reduce(list, function(memo, num){ return memo + num; }, 0);
}

console.log(sumUnderscore(numList));