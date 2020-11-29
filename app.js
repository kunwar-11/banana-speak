var btnTranslate = document.querySelector('#btn-translate');
var inputText = document.querySelector('textarea');
var output = document.querySelector('#output');

url = "https://lessonfourapi.tanaypratap.repl.co/translate/yoda.json";

function urlBuilder(input) {
    return url + "?" + "text=" + input;
}

function afterClick() {
    
    fetch(urlBuilder(inputText.value))
    .then(result => result.json())
    .then(json => 
        {console.log(json)
        output.innerText = json.contents.translated;
        })
     


}

btnTranslate.addEventListener('click' , afterClick);