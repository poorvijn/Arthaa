import {API_KEY, API_HOST} from './config.js';

// LIST OF SUPPORTED LANGAUGES
let supportedLanguages = {
	'Afrikaans': 'af',
	'Albanian': 'sq',
	'Amharic': 'am',
	'Arabic':'ar'  ,
	'Armenian':'hy' ,
	'Azeerbaijani': 'az',
	'Bashkir': 'ba',
	'Basque': 'eu' ,
	'Belarusian':'be'  ,
	'Bengali':'bn'  ,
	'Bosnian':'bs' ,
	'Bulgarian':'bg'  ,
	'Burmese': 'my' ,
	'Catalan':'ca' ,
	'Cebuano': 'ceb',
	'Chichewa':'ny' ,
	'Chinese': 'zh-CN',
	'Corsican':'co', 
	'Croatian': 'hr',
	'Czech': 'cs',
	'Danish':'da' ,
	'Dutch': 'nl',
	'English': 'en',
	'Esperanto': 'eo',
	'Estonian':'et' ,
	'Finnish':'fi' ,
	'French': 'fr',
	'Frisian': 'fy',
	'Galician': 'gl',
	'Georgian': 'ka',
	'German':'de' ,
	'Greek':'el' ,
	'Gujarati': 'gu',
	'Haitian Creole': 'ht',
	'Hausa': 'ha',
	'Hawaiian':'haw' ,
	'Hebrew': 'iw',
	'Hill Mari': 'mrj',
	'Hindi':'hi',
	'Hmong':'hmn' ,
	'Hungarian': 'hu',
	'Icelandic': 'is',
	'Igbo': 'ig',
	'Indonesian': 'id',
	'Irish': 'ga',
	'Italian': 'it',
	'Japanese':'ja' ,
	'Javanese':'jw' ,
	'Kannada':'kn' ,
	'Kazakh': 'kk',
	'Khmer': 'km',
	'Korean': 'ko',
	'Kurdish':'ku' ,
	'Kyrgyz': 'ky',
	'Lao': 'lo',
	'Latin': 'la',
	'Latvian': 'lv',
	'Lithuanian': 'lt',
	'Luxembourgish': 'lb',
	'Macedonian': 'mk',
	'Malagasy':'mg' ,
	'Malay':'ms' ,
	'Malayalam': 'ml',
	'Maltese': 'mt',
	'Maori': 'mi',
	'Marathi':'mr' ,
	'Mari': 'mhr',
	'Mongolian': 'mn',
	'Nepali': 'ne',
	'Norwegian':'no' ,
	'Pashto':'ps' ,
	'Papiamento':'pap' ,
	'Persian': 'fa',
	'Polish':'pl' ,
	'Portuguese': 'pt',
	'Punjabi':'pa' ,
	'Romanian': 'ro',
	'Russian': 'ru',
	'Samoan': 'sm',
	'Scots Gaelic':'gd' ,
	'Serbian':'sr' ,
	'Sesotho': 'st',
	'Shona':'sn' ,
	'Sindhi': 'sd',
	'Sinhala':'si' ,
	'Slovak': 'sk',
	'Slovenian': 'sl',
	'Somali':'so' ,
	'Spanish': 'es',
	'Sundanese':'su' ,
	'Swahili': 'sw',
	'Swedish': 'sv',
	'Tagalog Filipino': 'tl',
	'Tajik':'tg' ,
	'Tamil': 'ta',
	'Tatar': 'tt',
	'Telugu':'te' ,
	'Thai': 'th',
	'Turkish': 'tr',
	'Udmurt': 'udm',
	'Ukrainian': 'uk',
	'Urdu':'ur' ,
	'Uzbek': 'uz',
	'Vietnamese':'vi' ,
	'Welsh':'cy' ,
	'Xhosa': 'xh',
	'Yiddish': 'yi',
	'Yoruba': 'yo',
	'Zulu': 'zu'
};

// VARIABLES
let clearBtn = document.getElementById('clearButton');
let translateBtn = document.getElementById('translateButton');
let inputLangBox = document.getElementById('inputLanguage');
let targetLangBox = document.getElementById('outputLanguage');
let inputTextBox = document.getElementById('inputText');
let outputTextBox = document.getElementById('outputText');

// EVENTS
clearBtn.addEventListener('click',()=>{
    // .value for form elements
    inputTextBox.value="";
	outputTextBox.value="";
	inputLangBox.value="";
	targetLangBox.value="";
	inputLangBox.style.color="black";
	targetLangBox.style.color="black";
});
 
translateBtn.addEventListener('click',()=>{
	outputTextBox.value="";
	let inputLanguage = inputLangBox.value;
	let targetLanguage = targetLangBox.value;
	// Capitalize first letter of both language inputs, to match with property of supportedLanguages
	// object
	inputLanguage=inputLanguage.charAt(0).toUpperCase()+inputLanguage.slice(1,inputLanguage.length);
	targetLanguage=targetLanguage.charAt(0).toUpperCase()+targetLanguage.slice(1,targetLanguage.length);

	// if both languages are supported
	if(supportedLanguages[inputLanguage] && supportedLanguages[targetLanguage])
	{
		inputLangBox.style.color="green";
		targetLangBox.style.color="green";
		// get their short forms from the object supportedLanguages
		let inputLangShort = supportedLanguages[inputLanguage];
		let targetLangShort = supportedLanguages[targetLanguage];
		let text = inputTextBox.value;
		// API Parameters
		const url = 'https://nlp-translation.p.rapidapi.com/v1/translate';
		const options = {
			method: 'POST',
			headers: {
				'content-type': 'application/x-www-form-urlencoded',
				'X-RapidAPI-Key': API_KEY,
				'X-RapidAPI-Host': API_HOST
			},
			body: new URLSearchParams({
				text: text,
				to: targetLangShort,
				from: inputLangShort
			})
		};
		// API CALL
		try {
			const response = fetch(url, options);
			response.then((response)=>{
				// converts the received response stream to a text/string object
				let result = response.text();
				return result;
			}).then((result)=>{
				// converting result object to a string format for easier access to translated text
				let stringifiedResult = result.toString();
				// splitting components of the string with delimiter :
				let wordSplit = result.split(":");
				// accessing index 6 of the components stored in the array wordSplit, which includes the translated portion of the response, and splitting it to separate the translated words from the rest of the string component
				let translatedWords = wordSplit[6].split("}");
				// Accessing the translated string which is at the 0th index
				let exactTranslation = translatedWords[0];
				// Splitting using delimiter " to remove the extra quotes due to conversion of result object to string
				let destringified = exactTranslation.split("\"");
				// Setting output to the second element, which is the translated text
				outputTextBox.value=destringified[1];
			});
		} catch (error) {
			console.error(error);
		}
	}
	else
	{
		// Determine which language is not supported, and change text to red
		if(!supportedLanguages[inputLanguage])
			inputLangBox.style.color = "red";
		else
			targetLangBox.style.color = "red";
	}
});

