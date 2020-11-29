var btnTranslate = document.querySelector('#btn-translate');
var inputText = document.querySelector('textarea');
var output = document.querySelector('#output');

console.log(output);

function afterClick() {
    console.log('clicked');
    console.log("input is:-" , inputText.value);
    output.innerText = 'bhak bsdk'

}

btnTranslate.addEventListener('click' , afterClick);