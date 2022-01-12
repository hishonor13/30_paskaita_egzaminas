/* ------------------------------ TASK 8 --------------------------------------------
Sukurkite konstruktoriaus funkciją "Calculator" (naudokite ES5), kuri sukuria objektus su 3 metodais:
sum() - priima du skaičius ir grąžina jų sumą.
subtraction() - priima du skaičius ir grąžina jų skirtumą.
multiplication() - priima du skaičius ir grąžina jų daugybos rezultatą;
division() - priima du skaičius ir grąžina jų dalybos rezultatą;
------------------------------------------------------------------------------------ */

function Calculator (num1, num2) {
    this.num1 = num1;
    this.num2 = num2;
    this.sum = function (){
        return num1 + num2;
    }
    this.subtraction = function (){
        return num1 - num2;
    }
    this.multiplication = function (){
        return num1 * num2;
    }
    this.division = function (){
        return num1 / num2;
    }
}

let myCalculator = new Calculator(16, 8)
console.log(myCalculator.sum());
console.log(myCalculator.subtraction());
console.log(myCalculator.multiplication());
console.log(myCalculator.division());