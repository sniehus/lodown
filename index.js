'use strict';

// YOU KNOW WHAT TO DO //

/**
 * each: Designed to loop over a collection, Array or Object, and applies the 
 * action Function to each value in the collection.
 * 
 * @param {Array or Object} collection: The collection over which to iterate.
 * @param {Function} action: The Function to be applied to each value in the 
 * collection
 */
function each(collection, action) {
    if(Array.isArray(collection)) {
        for(var i = 0; i < collection.length; i++) {
            action(collection[i], i, collection);
        }
    } else {
        for (var key in collection) {
            action(collection[key], key, collection);
        }
    }
}
module.exports.each = each;

/**
 * indexOf: Function designed to loop over an array return the index of the input value.
 * @param {array} array: The collection over which to iterate.
 * @param {value} value:  The value (element) to search  for in the input array.
 * @returns {number} index: The index of the input element. 
 */

 function indexOf(array, value){
    //iterate through the input array using a for loop
    for (var i = 0; i < array.length; i++) {
        //determine if current array value is equal to the input value
        if (array[i] === value) {
            return i; 
        }
    }
}
module.exports.indexOf = indexOf;

/**
 * identity: Function takes in any value as an argument and returns the value unchanged.
 * @param {any value} value: Takes in any value as an input.
 * @returns {any value} Function returns the input value unchanged.
 */

function identity(value) {
    return value;
};
module.exports.identity = identity;


/**
 * typeOf: Function takes in any value as an argument and returns the type of data of the input value;
 * @param {any value} value:  Takes in a value as an input.  
 * @returns {data type} Function returns a string indicating the type of data of the input value. 
 */




function typeOf(value){
    if (typeof value === "boolean") {
        return "boolean";
    }
    //else  determine if the value is an string
    else if (typeof value === "string") {
        return "string"; 
    }
   //else determine if value is a number
    else if (typeof value === "number") {
        return "number"; 
    }
    //else determine if value is NAN
    else if (typeof value === "NaN") {
        return "number"; 
    }

    //else determine if value is a function
    else if (typeof value === "function") {
        return "function"; 
    }
    //else determine if value is a array
    else if (Array.isArray(value) === true) {
        return "array"; 
    }
    else if (typeof value === "object" && value !== null  && value instanceof Date === false) {
        return "object";
    }
    //else determine if it is a date
    else if (typeof value === "object" && value instanceof Date === true) {
        return "date";
    }
    //else determine if it is undefined
    else if (typeof value === "undefined")
        return "undefined";
     //else it must be null
    else {
        return "null"; 
        }

} 
    module.exports.typeOf = typeOf;

/**
 * first: Function takes in an array and a number and returns the first <number> of elements in the input array.
 * @param {array} array:  Takes in a array as an input.
 * @param {number} number:  Takes in number an another input.
 * @returns {array or string} Function returns an empty array if an array is not given, the first element (string) of input array if 
 * a number is not given or an copy of the input array with only the first <number> of elements.
 */

 
function first(array, number){
    let result = [];
    //determine if input array is an array
    if (Array.isArray(array) === false || number < 0){
        //return []
        return [];
    }
        //determine if input number is a number
        else if (typeof number !== "number" || number === "undefined") {
        //return first element of array
        return array[0];
     }
        //determine if number is greater than array length
        else if (number > array.length){
         return array;
     }
        //else 
        else {
                //iterate through array and the first <number> of elements
                for (var i = 0; i < number; i ++){
                    //push each element into new array
                    result.push(array[i]);
                }
            }
return result;
}
module.exports.first = first;

/**
 * last: Function takes in an array and a number and returns the last <number> of elements in the input array.
 * @param {array} array: Takes in a array as an input.
 * @param {number} number:  Takes in number an input.
 * @returns {array or string} Function returns an empty array if an array is not given, the last element (string) of input array if 
 * a number is not given or an copy of the input array with only the last <number> of elements.
 */

function last(array, number){
    let result = [];
    //determine if input array is an array
    if (Array.isArray(array) === false || number < 0){
        //return []
        return [];
    }
        //determine if input number is a number
        else if (typeof number !== "number" || number === "undefined") {
        //return last element of array
        return array[array.length - 1];
     }
        //determine if number is greater than array length
        else if (number > array.length){
         return array;
     }
        //else 
        else {
                //iterate through array and the first <number> of elements
                for (var i = array.length - number; i < array.length ; i ++){
                    //push each element into new array
                    result.push(array[i]);
                }
            }
return result;
}
module.exports.last = last;

/**
 * indexOf: Function designed to loop over an array return the index of the input value.
 * @param {array} array:  Takes in an array to iterate over.
 * @param {value} value:  Takes in a value (element) to search  for in the input array.
 * @returns {index} Funtion returns the index of the input element. 
 */

 function indexOf(array, value){
    //iterate through the input array using a for loop
    for (var i = 0; i < array.length; i++) {
        //determine if current array value is equal to the input value
        if (array[i] === value) {
            return i; 
        }
    }
}
module.exports.indexOf = indexOf;
 
/**
 * contains: Function returns true or false indicating whether or not the input value is an element in the input array.
 * @param {array} Function has an input array to iterate through.
 * @param {value}  Function has an input value of any data type.
 * @returns {boolean vaule} Function returns true or false.
 */

function contains(array, value){
  //iterate through array
  for (var i = 0; i < array.length; i++){
    //determine if value is an element in array
    if (array[i] === value){
        //return true
        return true
  } 
    
  } return false;
}
module.exports.contains = contains;

/**
 * each: Designed to loop over a collection, Array or Object, and applies the 
 * action Function to each value in the collection.
 * 
 * @param {Array or Object} collection: The collection over which to iterate.
 * @param {Function} action: The Function to be applied to each value in the 
 * collection
 */
 function each(collection, action) {
    if(Array.isArray(collection)) {
        for(var i = 0; i < collection.length; i++) {
            action(collection[i], i, collection);
        }
    } else {
        for (var key in collection) {
            action(collection[key], key, collection);
        }
    }
}
module.exports.each = each;

/**
 * unique: Function that takes in an array and returns a new array with all duplicates removed. 
 * @param {array} array: The array over which to iterate. 
 * @returns {array} Function returns a new array with no repeated elements. 
 */


function unique(array){
    //declare a variable to be the copy of array
    let arrayCopy = [];
        //iterate through array
        for (var i = 0; i < array.length; i++){
            //determine if element is already in new array
            if (arrayCopy.includes(array[i]) !== true){
                //if false push into array
                arrayCopy.push(array[i]);
            }
        }
        return arrayCopy;
}
module.exports.unique = unique;

/**
 * filter: Function that takes in an array function that returns a booleean, 
 * pushes each element from input array that returns true into a new array.
 * @param {array} array: The array over which to iterate.
 * @param {function} func: To which is invoked for each element of the array as it iterates.
 * @returns Function returns a new array with only the elements that returned true.
 */

function filter(array, func){
    //declare a variable to be the copy of array
    let arrayCopy = [];
        //iterate through array
        for (var i = 0; i < array.length; i++){
            //call function with each element of array
            if (func(array[i], i, array) === true){ 
            arrayCopy.push(array[i]);
            }
        }    
            return arrayCopy;
    }
       
    module.exports.filter = filter;

/**
 * reject: Function that takes in an array function that returns a booleean, 
 * pushes each element from input array that returns false into a new array.
 * @param {array} array: The array over which to iterate.
 * @param {function} func: To which is invoked for each element of the array as it iterates.
 * @returns Function returns a new array with only the elements that returned false.
 */

function reject(array, func){
    //declare a variable to be the copy of array
    let arrayCopy = [];
        //iterate through array
        for (var i = 0; i < array.length; i++){
            //call function with each element of array
            if (func(array[i], i, array) === false){ 
            arrayCopy.push(array[i]);
            }
        }    
            return arrayCopy;
    }
    module.exports.reject = reject;

 /**
  * partition: Function that takes in one array and sorts it into two sub arrays based on if element is truthy or falsy.
  * @param {array} array: The array over which to iteratate. 
  * @param {function} func: To which is invoked for each element of the array as it iterates. 
  * @returns Function returns a new of array with two sub arrays. 
  */   

function partition(array, func){
    //declare a variable to be the copy of array
    let arrayCopy1 = [];
    let arrayCopy2 = [];
    let arrayCopy3 = [];
        //iterate through array
        for (var i = 0; i < array.length; i++){
            //call function with each element of array
            if (func(array[i], i, array) == true){ 
            arrayCopy1.push(array[i]);
            }
             else if (func(array[i], i, array) == false){ 
            arrayCopy2.push(array[i]);
        }
        }
            //push each copy array into third array
            arrayCopy3.push(arrayCopy1);
            arrayCopy3.push(arrayCopy2); 
            return arrayCopy3;
    }
    module.exports.partition = partition;

/**
 * map: Function that iterates through a collection and creates a new array with the result of each element. 
 * being invoked in input function. 
 * @param {array or object} collection: The collection over which to iterate.
 * @param {function} func: To which is invoked for each value of the collection as it iterates.
 * @returns Function returns a new array with each value a return of the input function call. 
 */

function map(collection, func) {
    //declare an empty array to collect values
    let mapped =[]; 
    //determine if the input collection is an array
    if (Array.isArray(collection)) {
        //iterate throuth the array using a for loop
        for (var i = 0; i < collection.length; i++){
            //invoke the input function on the current element, current index and array and push function into array
            let result = func(collection[i], i, collection); 
            mapped.push(result);
        }
    }
    //else the input collection is an object
    else { 
        //iterate through the object using a for in loop
        for (var key in collection){
            //invoke the callback function passsing in the current value, 
            let result = func(collection[key], key, collection); 
            mapped.push(result); 
            }
        }
return mapped; 
    }
    module.exports.map = map;

/**
 * pluck: Function returns an array with all values of the input property for every element in input array.
 * @param {array of objects} array: The array over which to iterate. 
 * @param {property} prop: The property to which to return the values as the iteration occurs.
 * @returns Function returns an array containing the value each input property for every element in input array.
 */

function pluck(array, prop){
    let arrayCopy = [];
    //call map function
    let result = _.map(array, function(array){
        if (array.hasOwnProperty(prop)){
            arrayCopy.push(prop);
        }
        
    })
    return result;

    }
    module.exports.pluck = pluck;

/**
 * every: Function that iterates over an input collection and returns whether every iteration returns true or false if at least 
 * one element is false. 
 * @param {array or object} collection. The collection over which to iterate.
 * @param {function} func: A function that returns true or false.
 * @returns Function returns true or false. 
 */


function every(collection, func){
    //determine if func is undefined
    if (func === undefined){
        //determine if the input collection is an array
        if (Array.isArray(collection)){
            //iterate through collection
            for (var i = 0; i < collection.length; i++){
            if (!collection[i]) {//<--falsy
                return false; 
            
        }
        else {
            for (let key in collection){

            if(!collection[key]) {
                return false; 
            }
            }
        }
            }
        }
    }
    //else it is defined (been passed in as argument)
    else{
        //determine if collection is an array
        if (Array.isArray(collection)) {
            //if array, iterate through using for loop
            for (let i = 0; i < collection.length; i++){
                if (func(collection[i], i, collection) === false){
                    return false;
                }
            }
        
        }
        //else (not an array)
        //iterate through using a for in loop
        for (let key in collection) {
            if (func(collection[key], (key), collection) === false){
                return false;
            }
        }
    
       
}  return true;
} 
module.exports.every = every;

/**
 * some: Function that iterates through an input collection and returns true if at least one element passes an input test function.
 * @param {array or object} collection A collection over which to iterate.
 * @param {function} func A function that is invoked on all imput values and returns determines if value is truthy or falsy.
 * @returns Function returns true if at least one value in collection is truthy, else false.
 */
/*
function some(collection, func){
//determine if func is undefined
if (func === undefined){
    //determine if the input collection is an array
    if (Array.isArray(collection)){
        //iterate through collection
        for (var i = 0; i < collection.length; i++){
        if (collection[i]) {//<--falsy
            return true; 
        
    }
    else {
        for (let key in collection){

        if(collection[key]) {
            return true; 
        }
        }
    }
        }
    }
}
//else it is defined (been passed in as argument)
else{
    //determine if collection is an array
    if (Array.isArray(collection)) {
        //if array, iterate through using for loop
        for (let i = 0; i < collection.length; i++){
            if (func(collection[i], i, collection) === true){
                return true;
            }
        }
    
    }
    //else (not an array)
    //iterate through using a for in loop
    for (let key in collection) {
        if (func(collection[key], (key), collection) === true){
            return true;
        }
    }

   
}  return false;
} 
module.exports.some = some;

/**
 * reduce: A function that iterates through an array and returns a number by testing each element and increasing return by 1
 * with each true return. 
 * @param {array} array: To which to iterate over. 
 * @param {*} func To test each iteration and return true or false.
 * @param {*} seed To set the initial value of the return value.
 * @returns A number which reperesents the value of the seed after the changes dictated in input functions.
 */

function reduce(array, func, seed){
    //create an accumulator variable
    let accumulator;
    //determine if seed was not passed in
    if (seed === undefined) {
        accumulator = array[0]; 
        //continue to next element and iterate through the array
        for (let i = 1; i < array.length; i ++){
            accumulator = func(accumulator, array[i], i, array);
    }
    }
    //else seed was passed in 
    else {
    accumulator = seed;
    for (let i = 0; i < array.length; i++){
        accumulator = func(accumulator, array[i], i, array);
    }


    }
    return accumulator;
}

module.exports.reduce = reduce;

/**
 * extend: Function that takes in any amount of objects and returns the one object with all other input objects values combined.
 * @param {Object} object1 Target object that is returned with all values from all other input objects added. 
 * @param  {...Object2} object2 One more inputs that will be add to values in target objects.
 * @returns Function returns the first input object with all other input object values added to it. 
 */

function extend(object1, ...object2 ){
    var updateObject = Object.assign(object1, ...object2);
    return updateObject;
}   
module.exports.extend = extend; 
