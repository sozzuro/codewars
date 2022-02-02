/*

Shortest Word

Simple, given a string of words, return the length of the shortest word(s).

String will never be empty and you do not need to account for different data types.
*/

function findShort(s){
    const arr = s.split(' ');
     const sortArray = arr.sort((a, b) => {
       return a.length - b.length
     })
     return sortArray[0].length;
   }