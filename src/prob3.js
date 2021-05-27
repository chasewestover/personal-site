
// batches(
//   { milk: 100, butter: 50, flour: 5 },
//   { milk: 132, butter: 48, flour: 51 }
// ) => 0

// batches(
//   { milk: 100, butter: 50, flour: 5 },
//   { milk: 132, butter: 70, flour: 51 }
// ) => 1

// batches({}, {milk: 12}) => null

// return how many of the recipes we can make with the ingredients
// set batches to 0

//


// loop through the recipe
//  increase batches if ingredients >= recipe for all keys, subtracting recipe from ingredients each time
//  if we don't have enough, exit loop

function bind(fn, obj, ...args){
  obj.function = fn(...args);

  return obj.function
}

const boundFn = cat.fn.bind(dog, )