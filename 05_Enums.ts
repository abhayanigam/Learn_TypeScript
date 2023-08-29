/**
 * An enum is a special "class" that represents a group of constants (unchangeable variables).
    Enums come in two flavors string and numeric.
 */

// Numeric Enums - Default
// By default, enums will initialize the first value to 0 and add 1 to each additional value
enum cardinalDirections{
    North,//0
    East, //1
    South,//2
    West  //3
};

let currentDirection = cardinalDirections.North;
console.log(currentDirection); // --> 0

// throws error when commented in as 'North' is not a valid enum
// currentDirection = 'North'; 
// Error: "North" is not assignable to type 'CardinalDirections'.

// Numeric Enums - Initialized
// You can set the value of the first numeric enum and have it auto increment from that
enum Directions {
    North = 1,
    East,
    South,
    West
  }
  // logs 1
console.log(Directions.North);
  // logs 4
console.log(Directions.West);

// Numeric Enums - Fully Initialized
// You can assign unique number values for each enum value. 
// Then the values will not incremented automatically.

enum StatusCodes {
    NotFound = 404,
    Success = 200,
    Accepted = 202,
    BadRequest = 400
}
// logs 404
console.log(StatusCodes.NotFound);
// logs 200
console.log(StatusCodes.Success);

// String Enums
// Enums can also contain strings. This is more common than numeric enums, because of their readability and intent.

enum cardinalDirectionsString{
    NORTH = "North",
    EAST = "East",
    SOUTH = "South",
    WEST = "West"
};

console.log(cardinalDirectionsString.NORTH);
console.log(cardinalDirectionsString.SOUTH);

