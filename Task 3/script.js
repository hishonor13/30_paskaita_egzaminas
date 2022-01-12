/* ------------------------------ TASK 3 -----------------------------------
Parašykite JS kodą, kuris leis vartotojui paspaudus ant mygtuko "Show users"
pamatyti vartotojus iš Github API (endpoint'as pateiktas žemiau).

Paspaudus mygtuką "Show users":
1. Pateikiamas informacijos atvaizdavimas <div id="output"></div> bloke
1.1. Infrmacija, kuri pateikiama: "login" ir "avatar_url" reikšmės (kortelėje)
2. Žinutė "Press "Show Users" button to see users" turi išnykti;
"
Pastaba: Informacija apie user'į (jo kortelė) bei turi turėti bent minimalų stilių;
-------------------------------------------------------------------------- */

document.querySelector("#btn").addEventListener("click", () => {
    const ENDPOINT = 'https://api.github.com/users';
    fetch(ENDPOINT)
        .then((resp) => resp.json())
        .then((data) => {
            document.querySelector("#message").innerHTML = "";

            data.forEach((item, index) => {
                let div = document.createElement("div");
                div.setAttribute("class", "kortele");
                let myH = document.createElement("h4");
                let myData = item.login;
                let imgUrl = item.avatar_url;
                let img = document.createElement("img");
                let br = document.createElement("br");
                img.setAttribute("src", imgUrl);
                myH.append(img);
                myH.append(br);
                myH.append(myData);
                div.append(myH);
                document.querySelector("#output").append(div);
            });
    })
})


