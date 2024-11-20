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
            data.results.forEach((result) => document.querySelector("div").insertAdjacentHTML("beforeend", `
                <h1 class ="text-lg">${result.name}</h1>`));
        }
    } catch (error) {
        alert("hey i couldnt find that agent");
    }
};
getData();