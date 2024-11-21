import "./style.css";



async function getData() {
    try {
        //returns a promise
        const response = await fetch('https://gsi.fly.dev/characters?limit=51');
        //guard clause
        if (response.status != 200) {
            // throw new Error(response);
        } else {
            //convert promise to json
            const data = await response.json();
            console.log(data.results)
            //this is unique to api
            data.results.forEach((result) => document.querySelector("div.container").insertAdjacentHTML("beforeend", `
        <div class="card h-1/5 w-1/6 border-4 rounded-3xl flex flex-col mx-4 items-center justify-around bg-cover bg-white p-7">
            <h1>${result.name}</h1>
            <h2>${result.rarity}</h2>
            <h2>${result.vision}</h2>
            <h2>${result.weapon}</h2>
        </div>`));
        }
    } catch (error) {
        alert("hey i couldnt find that agent");
    }
};
getData();