/* ------------------------------ TASK 4 -----------------------------------
Parašykite JS kodą, vartotjui atėjus į tinkapį kreipsis į cars.json failą
ir iš atvaizduos visus automobilių gamintojus ir pagamintus modelius. 
Kiekvienas gamintojas turės savo atvaizdavimo "kortelę", kurioje bus 
nurodomas gamintojas ir jo pagaminti modeliai.


Pastaba: Informacija apie automobilį (brand) (jo kortelė) bei turi turėti 
bent minimalų stilių;
-------------------------------------------------------------------------- */

const ENDPOINT = 'cars.json';

fetch(ENDPOINT)
    .then((resp) => resp.json())
    .then((data) => {
        data.forEach((item, index) => {
            let div = document.createElement("div");
            div.setAttribute("class", "kortele");
            let myH = document.createElement("h4");
            let br = document.createElement("br");
            let myData = `<span>Markė: </span> ${item.brand}`;
            myH.innerHTML += myData;
            div.append(myH);
            myH.append(br);
            myData = `<span>Modeliai</span>: ${item.models}`;      
            myH.innerHTML += myData;
            div.append(myH);
            document.querySelector("#output").append(div);
    })
})
