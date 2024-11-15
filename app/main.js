import "./style.css";

async function getData() {
    try {
        //returns a promise
        const response = await fetch('');
        //guard clause
        if (response.status != 200) {
            // throw new Error(response);
        } else {
            //convert promise to json
            const data = await response.json();
            console.log(data.data)
            //this is unique to api
            data.data.forEach((agent) => document.querySelector("div").insertAdjacentHTML ("afterbegin", `<h1>${}</h1>`));
        }
    } catch (error) {
        alert("hey i couldnt find that agent");
    }
};
getData();