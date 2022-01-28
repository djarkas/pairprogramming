// Create a car object with the items: Make, Model, Year, Milage, and Color. Then create 3 methods in the object; A driveToWork method, driveAroundTheWorld method, and runErrands method. Each of these methods should affect the car’s mileage adding to it each time and console logging the old mileage and the new mileage.
 // driveToWork = 33 miles
// driveAroundTheWorld = 24,000 miles
// runErrands = 30 miles 


class car {
    constructor (make, model, year, milage, color){
        this.make = make;
        this.model = model;
        this.year = year;
        this.milage = milage;
        this.color =color;
    }
    driveToWork () {
        console.log(`your old milage is ${this.milage}`)
        this.milage = this.milage + 30;
        console.log(`after drive to work: ${this.milage} miles`)
        ;

    }
    driveAroundTheWorld (){
        console.log(`before driving around the world: ${this.milage} miles`)
        this.milage = this.milage + 24000;
        console.log(`after driving around the world: ${this.milage} miles`)
} 
runErrands (){
    console.log(`before running errands: ${this.milage} miles`)
    this.milage = this.milage + 30;
    console.log(`after running errands: ${this.milage} miles`)
}
}


carlos = new car('toyota','corolla',"2016",3, "red")

carlos.driveToWork();
carlos.driveAroundTheWorld ();
carlos.runErrands();