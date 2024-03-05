import {API_KEY, API_HOST} from './config.js';

let clearBtn = document.getElementById('clearButton');
let inputTextBox = document.getElementById('inputText')

clearBtn.addEventListener('click',()=>{
    // .value for form elements
    inputTextBox.value="";
});
 
const url = 'https://nlp-translation.p.rapidapi.com/v1/translate?text=Hello%2C%20world!!&to=es&from=en';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': API_KEY,
		'X-RapidAPI-Host': API_HOST
	}
};

try {
	const response = await fetch(url, options);
	const result = await response.text();
	console.log(result);
} catch (error) {
	console.error(error);
}