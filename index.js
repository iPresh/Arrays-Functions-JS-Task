//Question One: differences between mutating array methods and non-mutation array methods in JavaScript, with examples each



// Question Two:
let languages = [ 'C#', 'JavaScript', 'Ruby', 'PHP', 'Python'];

// Add ‘Kotlin’ to the end of the array
languages.push ('Kotlin');
console.log(languages)

// Add Java after Ruby
languages.splice(3, 0, 'Java');
console.log(languages)

// Remove the first item in the array
languages.shift();
console.log(languages)

// Add ’Scala’ and ‘Swift’ to the beginning of the array
languages.unshift('Scala', 'Swift')
console.log(languages)


// Replace ‘PHP’ with ‘Go’ and ‘Rust’
console.log(languages)

languages.splice( 5, 1, 'Go', 'Rust' )
console.log(languages)


//Question three: The value of fruit will be apple, mango, and oranges.
let fruit = ['apple', 'mango', 'banana'];
		function changeFruit( fruit ) {
    			fruit[2] = "orange";
    			return fruit;
		}

let newFruit = changeFruit(fruit)
console.log(newFruit)



//Question Four:
function findLargestNum(arr) {
    let largestNum = 0
    for ( i = 0; i < arr.length; i++) {
    if ( arr[i] > largestNum )
    {largestNum = arr[i]
    }
    }
    return largestNum
    }

let maxNumbers = [4, 27, 9]
 console.log(findLargestNum(maxNumbers))


console.log(findLargestNum([7, 4, 3]))


//Question Five:


function valTimesIndex(my_arr){
    return my_arr.map(function(arr, index){
        let result = arr * index;
        return result;
    });
}
console.log(valTimesIndex([3, 4, 2]))



const numbers = [65, 44, 12, 4];
const valTimesIndex2 = numbers.map(myFunction)

function myFunction(num, index) {
  return num * index;
}

console.log(valTimesIndex2)