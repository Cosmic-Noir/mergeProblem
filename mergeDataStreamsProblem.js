// In this drill, you'll write a function called mergeDataStreams that merges together data from two sources. The first data set is an array of objects which looks like this:

let arrayOne = [{
  id: 'aBcDeFgH',
  firstName: 'Juan',
  lastName: 'Doe',
  age: 32
},
{
  id: 'zYxWvUt',
  firstName: 'Alex',
  lastName: 'Smith',
  age: 24
}];

// The second data set is an array of objects which looks like this

let arrayTwo = [{
  id: 'aBcDeFgH',
  occupation: 'architect',
  address: {
    street: '123 Main St',
    city: 'CityTown',
    Country: 'USA'
  }
},
{
  id: 'zYxWvUt',
  occupation: 'receptionist',
  address: {
    street: '555 Ocean Ave',
    city: 'Beach City',
    Country: 'USA'
  }
}];


function mergeDataStreams(arr1, arr2) {
    //first need to compare and match the id of each object, so we must compare each item in each array
    for (let i = 0; i < arr1.length; i++) {
        for (let j = 0; j < arr2.length; j++) {
            if (arr1[i].id === arr2[j].id) {
              console.log("Should log if ids match"); // Saying only happening once
                for (let key in arr2[j]) { // for each key on the object at index j of array2,
                  console.log(key); // Logs id, occupation, address! 
                    let exists = arr1[i][key]; // Prints value of 
                    console.log(exists);
                    if (exists === undefined) { // know console is pringing undefined
                    arr1[i][key] = arr2[j][key];
                        
                    }
                }
            
            }
        }
    }
    return arr1; // Should return the array with new key/value pairs. 
}

let resultedArray = mergeDataStreams(arrayOne, arrayTwo);
console.log(resultedArray);