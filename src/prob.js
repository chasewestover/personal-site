// given three arrays of ints
// return all triplets, one number from each array, that sums to a given number x
// no arrays have repeats

// return an array of arrays

// [1,4] [2,7] [4,8] 10

// { 4:1, 8:1 }

//threesum, no way to do it in O(n)

function tripletsFromArrays(arr1, arr2, arr3, target){
  //make hash of third array
  let freq3 = {};
  for(let num of arr3){
    freq3[num] = 1;
  }
  // declare answer array
  let ans = [];

  //loop through first
  for(let val1 of arr1){
    for(let val2 of arr2){
      //check if difference from target exists in third array
      let targetVal3 = target - val1 - val2;
      //if exists, put in answer array
      if(freq3[targetVal3]){
        ans.push([val1, val2, targetVal3]);
      }
    }
  }

  // return answer array
  return ans;
}




function fromMag(note, mag){
  //freq table from magazine

  //go through the note and see if you can build the note from the magazine
}

function split(str, splitOn){
  //if splitOn === ""
    //run through and split every single one

  // else 
  // cur string
  // keep track of cur string, when you reach first char of splitOn, check if slice(curIdx, curIdx + lenSplitOn) === splitOn
  // put that string in array and move on to the next string, jumping the full split on


}

function findNPrime(n){
  let primes = [];
  let curNum = 1;
  while(primes.length < n ){
    if(isPrime(curNum)){
      primes.push(curNum)
    }
  }
  
  function isPrime(number){
    let divide = 2;
    while( divide < number/2){
      if(number % divide === 0) return false;
    }
    return true;
  }
}