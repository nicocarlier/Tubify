import Search from './scripts/search.js';
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
//! ACTUAL LOGIC  ==================

Search().then((vidID) => {

  oneToTwo();
  pageNum = 2;
  fetch(`https://tubify-be02a8d8ea61.herokuapp.com/transcript/${vidID}`)
  // fetch(`http://localhost:5001/transcript/${vidID}`)

  .then(response => response.text())

  .then(data => {
    if(data === "no transcript!"){
      // console.log("bad url!!")
      let urlError = document.querySelector('.url-error');
      urlError.classList.remove('hidden');
      //! warn user...
    }else{
      //! show page elements
      settingsBlock.classList.remove('hidden');
      transcriptBlock.classList.remove('hidden');
      generateButton.classList.remove('hidden');
  
      textBox(data);
    }

  })
  .catch(err => {
    console.error('Something went wrong with the fetch: ', err)});
  })
  .catch((error) => {     // catching search errors
    console.error("something is wrong with the url message", error);
  })

//! ACTUAL LOGIC ENDS ===============



  
let generate = document.querySelector('.generate-button');
let firstArrow = document.querySelector('.generate-button img:first-child ');
let secondArrow = document.querySelector('.generate-button img:last-child ');

//! Buttons event listener
let buttonsArray = document.querySelector('.btn-group');
buttonsArray.addEventListener('click', (e) => {
  let selected = e.target;

  if (selected.nodeName === "BUTTON") {

    let formerSelection = document.querySelector('.selected');
    // console.log(formerSelection);

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
//! 


//! custom prompt event listener
let customPrompt = document.querySelector('.prompt-bar')
customPrompt.addEventListener("input", (e) => {
  let selected = e.currentTarget;
  // let generate = document.querySelector('.generate-button');
  // console.log(selected);

  let formerSelection = document.querySelector('.selected');
    // console.log(formerSelection);

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
//!

//! Generate AI Output event listener
generate.addEventListener("click", (e) => {
  // console.log(generate.classList);
  let key;
  const transcript = document.querySelector('.scrollbox-inner p').innerHTML
  if (!generate.classList.contains("nothing-selected")){
    let selected = document.querySelector('.selected');
    if (selected.nodeName === "BUTTON") {
      key = selected.innerHTML;
    } else {
      selected = document.querySelector('.prompt-bar input');
      key = selected.value;
    }
    let prompt = makePrompt(key);

    // backButton =
    // console.log(backButton)
    // if ()

    // backButton

    //! hide page elements
    settingsBlock.classList.add('hidden');
    transcriptBlock.classList.add('hidden');
    generateButton.classList.add('hidden');

    //! switch to "found mode"
    attentionBlock.classList.add('found');
    let message = document.querySelector('#back-button p')
    // message.innerHTML = "Edit Prompt"

    generateResponse(prompt, transcript);

    // let header = document.querySelector('.AI-output h2');
    // header.innerHTML = key;
    //! add some animation here while waiting

  }
});
//!

//! Back Button event listener
// const settings = document.querySelector('.settings');
backButton.addEventListener("click", (e) => {

    if (pageNum === 2){
    twoToOne();

    // //!hide page 2 eles
    settingsBlock.classList.add('hidden');
    transcriptBlock.classList.add('hidden');
    generateButton.classList.add('hidden');
    backButton.classList.add('hidden');

    pageNum = 1;

  }else if (pageNum === 3){
    // threeToTwo();
    // //! switch out of "found mode" to home page
    // attentionBlock.classList.remove('found');
    // let message = document.querySelector('.back-button p')
    // message.innerHTML = "Edit Url"
    // backButton.classList.add('hidden')
  }
});



//! Logo event listener
