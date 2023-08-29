/**
 * TypeScript has a powerful system to deal with null or undefined values.
 * By default null and undefined handling is disabled, and can be enabled by setting strictNullChecks to true.
 * The rest of this page applies for when strictNullChecks is enabled.
 */

// Types : null and undefined are primitive types and can be used like other types, such as string.
let value: string | undefined | null = null;
console.log(typeof value);

value = 'hello';
console.log(typeof value);

value = undefined;
console.log(typeof value);

value = null;
console.log(typeof value);

/*
    Nullish Coalescence
        Nullish Coalescence is another JavaScript feature that also works well with
        TypeScript's null handling. It allows writing expressions that have a fallback 
        specifically when dealing with null or undefined. This is useful when other falsy
        values can occur in the expression but are still valid. 
        It can be used with the ?? operator in an expression, similar to using the && operator.
*/

function printMileage(mileage: number | null | undefined) {
    console.log(`Mileage: ${mileage ?? 'Not Available'}`);
}
printMileage(null); // Prints 'Mileage: Not Available'
printMileage(0); // Prints 'Mileage: 0'

/*
    Null Assertion
        TypeScript's inference system isn't perfect, there are times when it makes 
        sense to ignore a value's possibility of being null or undefined. 
        An easy way to do this is to use casting, but TypeScript also
        provides the ! operator as a convenient shortcut.
    
    Note : Just like casting, this can be unsafe and should be used with care.
*/
function getValue(): string | undefined {
    return 'hello';
}
let values = getValue();
console.log('value length: ' + values!.length);  

