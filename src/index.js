// import Search from './scripts/search.js';
import textBox from './scripts/textBox.js';
import makePrompt from './scripts/makePrompt.js';
import generateResponse from './scripts/generateResponse.js';
import oneToTwo from './scripts/oneToTwo.js';
import twoToOne from './scripts/twoToOne.js';

let pageNum = 1;

const github = document.querySelector('.github');
const linkedin = document.querySelector('.linkedin');
const outer = document.querySelector('.youtube-search');
const inner = document.querySelector('.search-bar');
// const backButton = document.querySelector('#back-button');

const attentionBlock = document.querySelector('.container');
const settingsBlock = document.querySelector('#settings');
const transcriptBlock = document.querySelector('#transcript');
const generateButton = document.querySelector('#generate-button');
const backButton = document.querySelector('#back-button');
let url;
const urlInvalid = document.querySelector('.url-error');
const noScript = document.querySelector('.no-script');
const searchForm = document.querySelector('.search-bar');
const generate = document.querySelector('.generate-button');
const firstArrow = document.querySelector('.generate-button img:first-child ');
const secondArrow = document.querySelector('.generate-button img:last-child ');
const buttonsArray = document.querySelector('.btn-group');
const customPrompt = document.querySelector('.prompt-bar');
const aiOutput = document.querySelector('#AI-output');
// const copyButton = document.querySelector('#copy-button');


// twoToOne();

// settingsBlock.classList.add('hidden');
// transcriptBlock.classList.add('hidden');
// generateButton.classList.add('hidden');
// attentionBlock.classList.add('found');









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
    let prompt = makePrompt(key);

    settingsBlock.classList.add('hidden');
    transcriptBlock.classList.add('hidden');
    generateButton.classList.add('hidden');
    attentionBlock.classList.add('found');

    if (standard){
    generateResponse(prompt, transcript, key);
    }else{
    generateResponse(prompt, transcript);
    }
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
    // attentionBlock.classList.add('found');

    pageNum = 2;
  }
});

const copyButton = document.getElementById("copy-button")
copyButton.addEventListener("click", () => {
  let copyText = aiOutput.innerHTML;
  document.getElementById("myInput");
  copyText.setSelectionRange(0, 99999); // For mobile devices
  document.execCommand("copy");
  alert("Copied the text");
});


//! Logo event listener
