/* ------------------------------ TASK 2 ----------------------------
Parašykite JS kodą, kuris skaičiuos kiek kartų buvo paspaustas mygtukas
su tekstu "CLICK ME". Paspaudimų rezultatas turi būti matomas dešinėje
pusėje esančiame "state" skaičiavimo bloke (<div id="btn__state">0</div>)
------------------------------------------------------------------- */

let count = 0;
document.querySelector(".btn").addEventListener("click", () => {
    count += 1;
    console.log(count);
    document.querySelector("#btn__state").innerHTML = count;
})