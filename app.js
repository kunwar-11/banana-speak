var btnTranslate = document.querySelector('#btn-translate');
var inputText = document.querySelector('textarea');
var output = document.querySelector('#output');

url = "https://api.funtranslations.com/translate/minion.json";

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
    .catch(error => alert(error + "sorry for inconvinience"))    
     


}

btnTranslate.addEventListener('click' , afterClick);