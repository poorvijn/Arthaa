let clearBtn = document.getElementById('clearButton');
let inputTextBox = document.getElementById('inputText')

clearBtn.addEventListener('click',()=>{
    // .value for form elements
    inputTextBox.value="";
});