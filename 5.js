/*
Removing Elements
Take an array and remove every second element from the array. Always keep the first element and start removing with the next element.
*/

function removeEveryOther(arr){
    let newArr = [];
    
    newArr = arr.filter((el, index) => {
      if (index == 0) return true;
      if (index % 2 !== 0) return false; 
      return true;
    })
    
    return newArr;
  }