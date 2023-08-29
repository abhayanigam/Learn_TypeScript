/**
 * Typed Arrays
    A tuple is a typed array with a pre-defined length and types for each index.
    Tuples are great because they allow each element in the array to be a known type of value.

    Note:
        Even though we have a boolean, string, and number the order matters
        in our tuple and will throw an error.
 */

//To define a tuple, specify the type of each element in the array:
let yourTuple : [number,boolean,string];

// initialize correctly
yourTuple = [5, false, 'Coding God was here'];
console.log(yourTuple);

/**
 * Readonly Tuple
    A good practice is to make your tuple readonly.
 */
//Define our readonly tuple
const ourReadonlyTuple: readonly [number, boolean, string] = [5, true, 'The Real Coding God'];
// throws error as it is readonly.
// ourReadonlyTuple.push('Coding God took a day off');

// Named tuples allow us to provide context for our values at each index.
// Named tuples provide more context for what our index values represent.
const graph: [x: number, y: number] = [55.2, 41.3];
console.log(graph);

// Destructuring Tuples
// Since tuples are arrays we can also destructure them.

const graphs: [number, number] = [55.2, 41.3];
const [x, y] = graphs;

console.log(graphs);
