/* ------------------------------ TASK 1 ----------------------------
Parašykite JS kodą, kuris leis vartotojui įvesti svorį kilogramais ir
pamatyti jo pateikto svorio kovertavimą į:
1. Svarus (lb) | Formulė: lb = kg * 2.2046
2. Gramus (g) | Formulė: g = kg / 0.0010000
3. Uncijos (oz) | Formul4: oz = kg * 35.274

Pastaba: atvaizdavimas turi būti matomas pateikus formą ir pateikiamas
<div id="output"></div> viduje, bei turi turėti bent minimalų stilių;
------------------------------------------------------------------- */

document.querySelector("form").addEventListener("submit", (e) => {
    e.preventDefault();
    document.querySelector("#output").innerHTML = "";
    let kg = document.querySelector("input[name=svoris]").value;
    let lb = kg * 2.2046 + " lb";
    let g = kg / 0.001 + " g";
    let oz = kg * 35.274 + " oz";

    let myH2Lb = document.createElement("h2");
    myH2Lb.append(lb);
    document.querySelector("#output").append(myH2Lb);

    let myH2g = document.createElement("h2");
    myH2g.append(g);
    document.querySelector("#output").append(myH2g);

    let myH2Oz = document.createElement("h2");
    myH2Oz.append(oz);
    document.querySelector("#output").append(myH2Oz);

})