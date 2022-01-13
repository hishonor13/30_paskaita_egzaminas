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

// let skaicius1 = 16;
// let skaicius2 = 8;
// let myCalculator = new Calculator(skaicius1, skaicius2)
// console.log(myCalculator.sum());
// console.log(myCalculator.subtraction());
// console.log(myCalculator.multiplication());
// console.log(myCalculator.division());


// Viskas kas apacioje atlikta papildomai neprasant uzduotyje.
// Padaryta, kad vartotojas per narsykle galetu pats pasirinkti norima veiksma ir ivesti skaicius.
// Stilius nepritaikytas
// Užduočiai atloikti pagal sakygla kas apacioje reikia uzkomentuoti, o virsuje 26-32 eilutes atkomentuoti.
document.querySelector("form").addEventListener("submit", (e) => {
    e.preventDefault();
    let num1 = parseInt(document.querySelector("input[name=number1]").value);
    let num2 = parseInt(document.querySelector("input[name=number2]").value);
    let selectas = document.getElementById("zzz");
    let procedura = selectas.options[selectas.selectedIndex].value;
    let myCalculator = new Calculator(num1, num2)
    let myH2 = document.createElement("h2");
    document.querySelector("#ats").innerHTML = "";
    let data = "";
    switch(procedura){
        case "sum":
            data = myCalculator.sum();
            myH2.append("Atsakymas: ", data);
            ats.append(myH2);
            break;
        case "subtraction":
            data = myCalculator.subtraction();
            myH2.append("Atsakymas: ", data);
            ats.append(myH2);
            break;
        case "multiplication":
            data = myCalculator.multiplication();
            myH2.append("Atsakymas: ", data);
            ats.append(myH2);
            break;
        case "division":
            data = myCalculator.division();
            myH2.append("Atsakymas: ", data);
            ats.append(myH2);
            break;
    }
})