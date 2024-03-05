// let resp = {"status":200,"from":"en","to":"kn","original_json":"{\"inputText\" : \"Hello\"}","protected_keys":"","protected_words":"","translated_json":{"kn":"{\"inputText\":\"ನಮಸ್ಕಾರ\"}"},"translated_characters":23}
// let obj = resp.translated_json.kn;
// let words = obj.split(":");
// let oldWord = words[1].slice(0,words[1].length-1);
// console.log(oldWord);


// const url = 'https://nlp-translation.p.rapidapi.com/v1/translate';
// const options = {
// 	method: 'POST',
// 	headers: {
// 		'content-type': 'application/x-www-form-urlencoded',
// 		'X-RapidAPI-Key': 'e360d6d83cmshb89ad2fd9c53591p1a2634jsn292ca281e0c5',
// 		'X-RapidAPI-Host': 'nlp-translation.p.rapidapi.com'
// 	},
// 	body: new URLSearchParams({
// 		text: 'Hello World',
// 		to: 'es',
// 		from: 'en'
// 	})
// };

// try {
// 	const response = await fetch(url, options);
// 	const result = await response.text();
//     let words=result.split(":");
//     let wordsNew = words[6].split(",");
//     let finalString = wordsNew[0].slice(0,wordsNew[0].length-1);
//     console.log(finalString);
// } catch (error) {
// 	console.error(error);
// }