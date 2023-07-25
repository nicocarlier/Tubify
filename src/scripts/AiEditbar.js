
function AiEditBar(){

    let JSContainer = documentt.querySelector('.jsContainer')

    let chatLog = document.createElement('div');
    chatLog.id = "chat-log";

    JSContainer.append(chatLog);

    let header = document.createElement('h2');
    header.innerHTML = "Enter a custom prompt"

    let formDiv = document.createElement('div');

    let form = document.createElement('form');
    form.classLisst.add('prompt-bar');

    formDiv.append(form);

    let input = document.createElement('input');
    input.type = "text";
    input.name = "message";
    input.id = "message";
    input.placeholder = "enter your custom prompt!";

    form.append(input);

    let button = document.createElement('button');

    form.append(button);

    let img = document.createElement('img');
    img.src = "./assets/search.png";

    button.append(img)
    

}