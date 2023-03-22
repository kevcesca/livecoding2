// API
const API_ENDPOINT = 'https://yesno.wtf/api';

// capturar el id

let answer =  document.getElementById('answer');
let boton = document.getElementById('button');

boton.onclick = (e) => {
    presionarBoton();
}


/**
 * STEPS:
 *
 * 1. Create a fetchAnswer function and call the API
 * 2. Output the API's response
 * 3. Attach fetchAnswer to an event listener
 * 4. Clear output after 3 seconds
 * 5. Optional: add loading/error states
 *
 */


const presionarBoton = () => {
    fetch(API_ENDPOINT)

    .then(response => response.json)
    .then(data => {

        console.log(data)
        answer.innerHTML = `
            <p>${data}</p>
        `
        
    })
}




