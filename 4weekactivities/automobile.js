function Automobile( year, make, model, type ){
    this.year = year; //integer (ex. 2001, 1995)
    this.make = make; //string (ex. Honda, Ford)
    this.model = model; //string (ex. Accord, Focus)
    this.type = type; //string (ex. Pickup, SUV)
}

var automobiles = [ 
    new Automobile(1995, "Honda", "Accord", "Sedan"),
    new Automobile(1990, "Ford", "F-150", "Pickup"),
    new Automobile(2000, "GMC", "Tahoe", "SUV"),
    new Automobile(2010, "Toyota", "Tacoma", "Pickup"),
    new Automobile(2005, "Lotus", "Elise", "Roadster"),
    new Automobile(2008, "Subaru", "Outback", "Wagon")
    ];

//function for printing a car with type information optional
Automobile.prototype.logMe = function(type) {
    if(type) {
        console.log(this.year, this.make, this.model, this.type)
    } else {
        console.log(this.year, this.make, this.model)
    }
}

//calls logMe on each car in an array
printCars = function(cars, type) {
    for (var car in cars) {
        cars[car].logMe(type);
    }
}

/*This function sorts arrays using an arbitrary comparator. You pass it a comparator and an array of objects appropriate for that comparator and it will return a new array which is sorted with the largest object in index 0 and the smallest in the last index*/
function sortArr(comparator, array){
    return array.sort(comparator);
}

/*A comparator takes two arguments and uses some algorithm to compare them. If the first argument is larger or greater than the 2nd it returns true, otherwise it returns false. Here is an example that works on integers*/
function exComparator( int1, int2){
    if (int1 > int2){
        return true;
    } else {
        return false;
    }
}

/*For all comparators if cars are 'tied' according to the comparison rules then the order of those 'tied' cars is not specified and either can come first*/

/*This compares two automobiles based on their year. Newer cars are "greater" than older cars.*/
function yearComparator(auto1, auto2){
    return auto2.year - auto1.year;
}

/*This compares two automobiles based on their make. It should be case insensitive and makes which are alphabetically earlier in the alphabet are "greater" than ones that come later.*/
function makeComparator(auto1, auto2){
    auto1make = auto1.make.toLowerCase();
    auto2make = auto2.make.toLowerCase();

    if(auto1make < auto2make) return -1;
    if(auto1make > auto2make) return 1;
    return 0;
}

/*This compares two automobiles based on their type. The ordering from "greatest" to "least" is as follows: roadster, pickup, suv, wagon, (types not otherwise listed). It should be case insensitive. If two cars are of equal type then the newest one by model year should be considered "greater".*/
function typeComparator(auto1, auto2){
    autos = [auto1, auto2];
    vals = [0, 0];
    
    //this loop assigns numerical values to the auto types in a parallel array to the one the params are in
    //so that the types can be compared in fashion sutiable for array.sort(compareFunction)
    for (var car in autos) {
        if (autos[car].type == "Roadster"){
            vals[car] = 4;
        } else if (autos[car].type == "Pickup") {
            vals[car] = 3;
        } else if (autos[car].type == "SUV") {
            vals[car] = 2;
        } else if (autos[car].type == "Wagon") {
            vals[car] = 1;
        } else {
            vals[car] = 0;
        }
    }

    return vals[1] - vals[0];
}

/*Your program should output the following to the console.log, including the opening and closing 5 stars. All values in parenthesis should be replaced with appropriate values. Each line is a seperate call to console.log.

Each line representing a car should be produced via a logMe function. This function should be added to the Automobile class and accept a single boolean argument. If the argument is 'true' then it prints "year make model type" with the year, make, model and type being the values appropriate for the automobile. If the argument is 'false' then the type is ommited and just the "year make model" is logged.*/

console.log('*****');
console.log('The cars sorted by year are:');
printCars(sortArr(yearComparator, automobiles), true);

console.log('\nThe cars sorted by make are:');
printCars(sortArr(makeComparator, automobiles), true);

console.log('\nThe cars sorted by type are:');
printCars(sortArr(typeComparator, automobiles), true);
console.log('*****');

/*As an example of the content in the parenthesis:
1990 Ford F-150 */