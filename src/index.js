// import Gpt from './scripts/gpt.js';
import Search from './scripts/search.js';
import textBox from './scripts/textBox.js';
// import textBoxOld from './scripts/textBoxOld.js';
import makePrompt from './scripts/makePrompt.js';
import generateResponse from './scripts/generateResponse.js';
import twoToOne from './scripts/twoToOne.js';
import oneToTwo from './scripts/oneToTwo.js';


const port = "5001";

let pageNum = 1;

// const searchForm = document.querySelector('.search-bar');


// let urlError = document.querySelector('.url-error');
// urlError.classList.remove('hidden');


//!  PAGE #2 SANDOX ===============


// oneToTwo();

// let settingsBlock = document.querySelector('.settings');
// settingsBlock.classList.remove('hidden');
// // let textBoxEle = document.querySelector('.text-block');
// // textBoxEle.remove();
// let transcriptBlock = document.querySelector('.transcript');
// transcriptBlock.classList.remove('hidden');
// let generateButton = document.querySelector('.generate-button');
// generateButton.classList.remove('hidden');

// const attentionBlock = document.querySelector('.container');
// const outer = document.querySelector('.youtube-search');
// const inner = document.querySelector('.search-bar');
// attentionBlock.classList.add('fullscreen');
// outer.classList.add(('hidden'));
// inner.classList.remove(('search-bar'));
// outer.classList.remove(('youtube-search'));

//! PAGE #3 SANDBOX ====================

// settingsBlock.classList.add('hidden');
// transcriptBlock.classList.add('hidden');
// generateButton.classList.add('hidden');

//! end =================

// let data = "at dawn when you have trouble getting out of bed tell yourself I have to go to work as a human being what do I have to complain of if I'm going to do what I was born for the things I was brought into this world to do or is this what I was created for to huddle under the blankets and stay warm but it's nicer here so you were born to feel nice instead of doing things and experiencing them do you see the plants the birds the ants and spiders and bees going about their individual tasks putting the world in order as best they can and you're not willing to do your job as a human being why aren't you running to do what your nature demands but we have to sleep sometime agreed but nature set a limit on that as it did on eating and drinking and you're over the limit you've had more than enough of that but not of working there you're still below your quota you don't love yourself enough or you'd love your nature too and what it demands of you people who love what they do wear themselves down doing it they even forget to wash or eat do you have less respect for your own nature than the engraver does for Engraving the dancer for the dance when they're really possessed by what they do they'd rather stop eating and sleeping than give up practicing their Arts is helping others less valuable to you not worth your effort I hope you like this video I hope you subscribe but what I really want you to subscribe to is our daily stoic email one bit of stoic wisdom totally for free to the largest community of stoics ever in existence and hope to see you there at dailystoke.com email";
// textBox(data);
// textBoxOld(data);
// AiEditBar();
// Gpt(5001)

//! SANDBOX ENDS ============

const settingsBlock = document.querySelector('.settings');
const transcriptBlock = document.querySelector('.transcript');
const generateButton = document.querySelector('.generate-button');
const github = document.querySelector('.github');
const linkedin = document.querySelector('.linkedin');
const attentionBlock = document.querySelector('.container');
const outer = document.querySelector('.youtube-search');
const inner = document.querySelector('.search-bar');
const backButton = document.querySelector('#back-button');

//! ACTUAL LOGIC  ==================

Search().then((vidID) => {

  pageNum = 2;
  
  // fetch(`http://localhost:5001/transcript/${vidID}`) //! (Local fetch)
  fetch(`https://tubify-be02a8d8ea61.herokuapp.com/transcript/${vidID}`)

  .then(response => response.text())

  .then(data => {
    if(data === "no transcript!"){
      // console.log("bad url!!")
      let urlError = document.querySelector('.url-error');
      urlError.classList.remove('hidden');
      //! warn user...
    }else{
      oneToTwo();
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
      generate.classList.add('nothing-selected');
      firstArrow.src = "./assets/go-arrow-grey.svg"
      secondArrow.src = "./assets/go-arrow-grey.svg"
    }

    if (formerSelection !== selected){
      selected.classList.add('selected');
      generate.classList.remove('nothing-selected');
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
    firstArrow.src = "./assets/go-arrow.svg"
    secondArrow.src = "./assets/go-arrow.svg"
  } else if (formerSelection === null){
    selected.classList.add('selected');
    generate.classList.remove('nothing-selected');
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

    //! hide page elements
    settingsBlock.classList.add('hidden');
    transcriptBlock.classList.add('hidden');
    generateButton.classList.add('hidden');

    //! switch to "found mode"
    attentionBlock.classList.add('found');
    let message = document.querySelector('.back-button p')
    message.innerHTML = "Edit Prompt"

    generateResponse(prompt, transcript, port);
    //! add some animation here while waiting

  }
});
//!

//! Back Button event listener
// const settings = document.querySelector('.settings');
backButton.addEventListener("click", (e) => {
  // if (!settings.classList.contains('hidden')){
    if (pageNum === 2){


    twoToOne();

    //!hide page 2 eles
    const settingsBlock = document.querySelector('#settings');
    const transcriptBlock = document.querySelector('.transcript');
    const generateButton = document.querySelector('.generate-button');
    settingsBlock.classList.add('hidden');
    transcriptBlock.classList.add('hidden');
    generateButton.classList.add('hidden');

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