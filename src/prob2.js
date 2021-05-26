// findCommonCharacters()

// Example 1:

// Input: ["bella","label","roller"]
// Output: ["e","l","l"]
// Example 2:

// Input: ["cool","lock","cook"]
// Output: ["c","o"]

// make frequency tables for each
//

//'worrd' {w:1, o:1, r:2}

//'wor' {w:1, o: 1,r:1}

function findTriplicates(arrStr){
  const fr1 = {}
  for(let char of arrStr[0] ){
    fr1[char] = fr1[char]+1 || 1;
  }
  //loop through other words, and build a frequency table each time
  //reduce values in first freq table according towhether they're present
  for(let i = 1; i<arrStr.length; i++){
    const tempFreq = {}
    for(let char of arrStr[i] ){
      tempFreq[char] = tempFreq[char] + 1 || 1;
    }

    for(let k in fr1){
      if(tempFreq[k] === undefined){
        fr1[k] = undefined;
      } else if (tempFreq[k] < fr1[k]){
        fr1[k] = tempFreq[k]
      }
    }
    if(Object.keys(fr1).length === 0){
      return []
    }
  }

  const answer = []
  for(let k in fr1){
    for(let i = 0; i<fr1[k]; i++){
      answer.push(k)
    }
  }
  return answer;
}