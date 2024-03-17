console.log('***** Cart Functions *****');
// Make sure to test all functions here in the JS file!
// We want to see how you are testing your code!!!
//Create a global variable named `basket` and set it to an empty array.
let basket = []; // empty array
console.log('basket without items added', basket);//expect []


// - Create a function called `addItem`. It should:
//   - take an input parameter for a string `item`
//   - add the new item to the global array `basket`. 
//   - return `true` indicating the item was added

function addItem(item){ //create frunction named addItem. 
    basket.push(item); // adds the item parameter to the end of basket array. 
    return true; // returns `true` indicating the item was added
}
console.log(addItem('case')); // adds case to basket, returns true in console
console.log(addItem('basketCase')); // adds another item, returns true in console
console.log(addItem('bananas')); // adds another item, returns true in console
console.log(basket); // expect a case, basketcase, bananas from basket array.
// - Create a function called `listItems`. It should:
//   - loop over the items in the `basket` array
//   - console.log each individual item on a new line

function listItems (){ //create a function called list Items
    for (let i = 0; i < basket.length; i++) //loops through each item, incrementing by one. starting at the first available item and continues throught the whole length
    console.log(basket[i]); // prints all items in basket. i is only defined in this code block.
}
    //console.log(basket[0]); //prints first item
    //console.log(basket[1]); // second item
    //console.log(basket[2]); // and third
    listItems() // lists each item on seperate line... and is calling the list item function
// - Create a function called `empty`. It should:
//   - reset the `basket` to an empty array
//   - do not use `basket = []` to reset the array
function empty () { //creates function to empty basket
    basket.length = 0; ; // all items in basket is 0 value
}
empty(); // function actually being called
 console.log('empty basket', basket); // console to show empty basket

// DO NOT MODIFY
// Used for automated testing
try {
    module.exports = {
        basket: typeof basket !== 'undefined' ? basket : undefined,
        addItem: typeof addItem !== 'undefined' ? addItem : undefined,
        listItems: typeof listItems !== 'undefined' ? listItems : undefined,
        maxItems: typeof maxItems !== 'undefined' ? maxItems : undefined,
        empty: typeof empty !== 'undefined' ? empty : undefined,
        isFull: typeof isFull !== 'undefined' ? isFull : undefined,
        removeItem: typeof removeItem !== 'undefined' ? removeItem : undefined,
    };
} catch(e) {
    // Do nothing
}
