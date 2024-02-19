// Problem 1:-currying

function evaluate(operation) {
   if(operation ==="mul"){
    return function(a){
        return function(b){
            return a*b
        }
    }
   }
  }
  
  let mul = evaluate("mul");
  console.log(mul(3)(4)); // Output: 12

// Problem 2: Infinite Currying

function multiply(a) {
   return function(b){
    if(b === undefined){
        return a
    }
    else{
        return multiply(a*b)
    }
   }
  }
  
  const result1 = multiply(2)(3)(4)(5)();
  console.log(result1); // Output: 120

//Problem 3: Currying

function sumOfTwoNumbers(a) {
        return function(b){
            return (a+b)
        }
  }
  
  const result3 = sumOfTwoNumbers(2)(3);
  console.log(result3); // Output: 5
  

//Problem 4: Flattening an Array

function flattenArray(arr) {
    // return arr.reduce(function (flat, toFlatten) {
    //   return flat.concat(Array.isArray(toFlatten) ? flattenArray(toFlatten) : toFlatten);
    // }, []);

    return arr.reduce(function(flat,toFlatten){
        return flat.concat(Array.isArray(toFlatten)? flattenArray(toFlatten):toFlatten)
    },[])
  }
  
  const input = [1, [2, [3, 4], [5, 11, 13, 500]], 6];
  const result4 = flattenArray(input);
  console.log(result4); // Output: [1, 2, 3, 4, 5, 11, 13, 500, 6]
  
// Don't remove the below export and also don't re-name any functons.

export { evaluate, multiply, sumOfTwoNumbers, flattenArray };
