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
 * 
 * 
 * 
 * 
 */
 _.indexOf = function(array, value){
    //iterate through the input array using a for loop
    for (var i = 0; i < array.length; i++) {
        //determine if current array value is equal to the input value
        if (array[i] === value) {
            return i; 
        }
    }
}
module.exports.indexOf = indexOf;