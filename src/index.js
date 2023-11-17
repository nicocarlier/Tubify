import textBox from './scripts/textBox.js';
import makePrompt from './scripts/makePrompt.js';
import generateResponse from './scripts/generateResponse.js';
import oneToTwo from './scripts/oneToTwo.js';
import twoToOne from './scripts/twoToOne.js';
// import marked from 'marked';
// import { marked } from 'marked';

let pageNum = 1;
let url;


const logo = document.querySelector('.logo');
const attentionBlock = document.querySelector('.container');
const settingsBlock = document.querySelector('#settings');
const transcriptBlock = document.querySelector('#transcript');
const generateButton = document.querySelector('#generate-button');
const backButton = document.querySelector('#back-button');
const urlInvalid = document.querySelector('.url-error');
const noScript = document.querySelector('.no-script');
const searchForm = document.querySelector('.search-bar');
const generate = document.querySelector('.generate-button');
const firstArrow = document.querySelector('.generate-button img:first-child ');
const secondArrow = document.querySelector('.generate-button img:last-child ');
const buttonsArray = document.querySelector('.btn-group');
const customPrompt = document.querySelector('.prompt-bar');
const aiOutput = document.querySelector('#AI-output');
const loader = document.querySelector('#ai-loader');
const gptLogo = document.querySelector('#gptlogo');
const gptHolder = document.querySelector('.gptholder');

const openModalButton = document.querySelector('.help-button');
const closeModalButton = document.querySelector('.modal-close');
const overlay = document.getElementById('overlay');
const modal = document.querySelector('.modal');

// only display content if on desktop
document.addEventListener('DOMContentLoaded', function() {
  console.log("Script is running");
  console.log("User Agent:", navigator.userAgent);
  console.log("Is Mobile:", /iPhone|iPad|iPod|Android/i.test(navigator.userAgent));

  var isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
  var messageDiv = document.getElementById('non-desktop-message');
  var allBodyChildren = document.body.children;

  // console.log(marked('**Bold**'))

  if (isMobile) {
      messageDiv.style.display = 'block'; 
      
      // Loop through and hide all direct child elements of the body
      for (let i = 0; i < allBodyChildren.length; i++) {
          if (allBodyChildren[i] !== messageDiv) {
              allBodyChildren[i].style.display = 'none';
          }
      }
  } else {
      messageDiv.style.display = 'none'; 
  }
});


//Help button:

openModalButton.addEventListener('click', () => {
  modal.classList.add('active');
  overlay.classList.add('active');
});

closeModalButton.addEventListener('click', () => {
  modal.classList.remove('active');
  overlay.classList.remove('active');
});

overlay.addEventListener('click', () => {
  modal.classList.remove('active');
  overlay.classList.remove('active');
})

function colorfySpinner(){
  if (gptHolder.classList.contains('black')){
    gptHolder.classList.remove('black');
    gptHolder.classList.add('green');
  }else if(gptHolder.classList.contains('green')){
    gptHolder.classList.remove('green');
    gptHolder.classList.add('white');
  }else if(gptHolder.classList.contains('white')){
    gptHolder.classList.remove('white');
    gptHolder.classList.add('black');
  }
}


searchForm.addEventListener('submit', (e) => {
    e.preventDefault();
    url = document.querySelector('.search-bar input').value;
    
    if (!url.includes('https://www.youtube.com/watch?v=')){
        urlInvalid.classList.remove('hidden');
    }else{

        const startIndex = url.indexOf("v=") + 2;
        const videoId = url.slice(startIndex);

        oneToTwo();
        pageNum = 2;
        if (!urlInvalid.classList.contains('hidden')){
          urlInvalid.classList.add('hidden');
        }

        fetch(`https://tubify-be02a8d8ea61.herokuapp.com/transcript/${videoId}`)
        
        .then(response => response.text())

        .then(data => {
          if(data === "no transcript!"){
            noScript.classList.remove('hidden');
            twoToOne();
            pageNum = 1;
          }else {
            if (!noScript.classList.contains('hidden')){
              noScript.classList.add('hidden');
            }
            settingsBlock.classList.remove('hidden');
            transcriptBlock.classList.remove('hidden');
            generateButton.classList.remove('hidden');
            textBox(data);
          }
        })
        .catch(err => {
            console.error('Something went wrong with the fetch: ', err)
        })
        .catch((error) => {     // catching search errors
            console.error("something is wrong with the url message", error);
        })
    }
});

buttonsArray.addEventListener('click', (e) => {
  let selected = e.target;
  if (selected.nodeName === "BUTTON") {
    let formerSelection = document.querySelector('.selected');
    if (formerSelection !== null){
      formerSelection.classList.remove('selected');
    }
    if (formerSelection === selected){
      generate.classList.remove('something-selected');
      generate.classList.add('nothing-selected');
      firstArrow.src = "./assets/go-arrow-grey.svg"
      secondArrow.src = "./assets/go-arrow-grey.svg"
    }
    if (formerSelection !== selected){
      selected.classList.add('selected');
      generate.classList.remove('nothing-selected');
      generate.classList.add('something-selected');
      firstArrow.src = "./assets/go-arrow.svg"
      secondArrow.src = "./assets/go-arrow.svg"
    }
  }
});



customPrompt.addEventListener("input", (e) => {
  let selected = e.currentTarget;
  let formerSelection = document.querySelector('.selected');

  if (formerSelection !== null && formerSelection !== selected){
    formerSelection.classList.remove('selected');
    selected.classList.add('selected');
    generate.classList.remove('nothing-selected');
    generate.classList.add('something-selected');
    firstArrow.src = "./assets/go-arrow.svg"
    secondArrow.src = "./assets/go-arrow.svg"
  } else if (formerSelection === null){
    selected.classList.add('selected');
    generate.classList.remove('nothing-selected');
    generate.classList.add('something-selected');
    firstArrow.src = "./assets/go-arrow.svg"
      secondArrow.src = "./assets/go-arrow.svg"
  } 
});



generate.addEventListener("click", (e) => {
  let key;
  let standard = true;
  const transcript = document.querySelector('.scrollbox-inner p').innerHTML
  if (!generate.classList.contains("nothing-selected")){
    let selected = document.querySelector('.selected');
    if (selected.nodeName === "BUTTON") {
      key = selected.innerHTML;
    } else {
      selected = document.querySelector('.prompt-bar input');
      key = selected.value;
      standard = false;
    }
    // let prompt = makePrompt(key);
    let prompt = makePrompt(key, transcript);
    pageNum = 3;
    settingsBlock.classList.add('hidden');
    transcriptBlock.classList.add('hidden');
    generateButton.classList.add('hidden');
    attentionBlock.classList.add('found');
    if (standard){
    generateResponse(prompt, transcript, key);
    }else{
    generateResponse(prompt, transcript);
    }
    setInterval(colorfySpinner, 1600);
    loader.classList.remove('hidden');
    loader.classList.remove('hidden');
    gptLogo.classList.remove('hidden');
    gptHolder.classList.remove('hidden');
  }
});



backButton.addEventListener("click", (e) => {

  if (pageNum === 2){
    twoToOne();
    settingsBlock.classList.add('hidden');
    transcriptBlock.classList.add('hidden');
    generateButton.classList.add('hidden');
    backButton.classList.add('hidden');
    pageNum = 1;

  }else if (pageNum === 3){

    aiOutput.classList.add('hidden');
    settingsBlock.classList.remove('hidden');
    transcriptBlock.classList.remove('hidden');
    generateButton.classList.remove('hidden');
    pageNum = 2;
  }
});


logo.addEventListener("click", (e) => {
  if (pageNum === 1){
    document.querySelector('.search-bar input').value = "";
    if (!noScript.classList.contains('hidden')){
      noScript.classList.add('hidden');
    }
    if (!urlInvalid.classList.contains('hidden')){
      urlInvalid.classList.add('hidden');
    }
  }
  if (pageNum === 2){
    twoToOne();
    settingsBlock.classList.add('hidden');
    transcriptBlock.classList.add('hidden');
    generateButton.classList.add('hidden');
    backButton.classList.add('hidden');
    pageNum = 1;
    document.querySelector('.search-bar input').value = "";
  }else if (pageNum === 3) {
    aiOutput.classList.add('hidden');
    twoToOne();
    backButton.classList.add('hidden');
    pageNum = 1;
    document.querySelector('.search-bar input').value = "";
  }

});


const copyButton = document.getElementById("copy-button");
const aiResponse = document.querySelector(".ai-response");
copyButton.addEventListener("click", () => {
  const textToCopy = aiResponse.innerHTML;
  const tempTextArea = document.createElement("textarea");
  tempTextArea.value = textToCopy;
  document.body.appendChild(tempTextArea);
  tempTextArea.select();
  document.execCommand("copy");
  document.body.removeChild(tempTextArea);
  alert("Text copied to clipboard!");
});