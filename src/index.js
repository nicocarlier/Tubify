import Gpt from './scripts/gpt.js';
import Search from './scripts/search.js';
import textBox from './scripts/textBox.js';
import textBoxOld from './scripts/textBoxOld.js';


//!  PAGE #2 SANDOX ===============

// const attentionBlock = document.querySelector('.container');
// const outer = document.querySelector('.youtube-search');
// const inner = document.querySelector('.search-bar');
// attentionBlock.classList.add('fullscreen');
// outer.classList.add(('hidden'));
// inner.classList.remove(('search-bar'));
// outer.classList.remove(('youtube-search'));

// let data = "at dawn when you have trouble getting out of bed tell yourself I have to go to work as a human being what do I have to complain of if I'm going to do what I was born for the things I was brought into this world to do or is this what I was created for to huddle under the blankets and stay warm but it's nicer here so you were born to feel nice instead of doing things and experiencing them do you see the plants the birds the ants and spiders and bees going about their individual tasks putting the world in order as best they can and you're not willing to do your job as a human being why aren't you running to do what your nature demands but we have to sleep sometime agreed but nature set a limit on that as it did on eating and drinking and you're over the limit you've had more than enough of that but not of working there you're still below your quota you don't love yourself enough or you'd love your nature too and what it demands of you people who love what they do wear themselves down doing it they even forget to wash or eat do you have less respect for your own nature than the engraver does for Engraving the dancer for the dance when they're really possessed by what they do they'd rather stop eating and sleeping than give up practicing their Arts is helping others less valuable to you not worth your effort I hope you like this video I hope you subscribe but what I really want you to subscribe to is our daily stoic email one bit of stoic wisdom totally for free to the largest community of stoics ever in existence and hope to see you there at dailystoke.com email";
// // textBox(data);
// textBoxOld(data);
// // AiEditBar();
// // Gpt(5001)

//! SANDBOX ENDS ============


//! ACTUAL LOGIC  ==================

// let settingsBlock = document.querySelector('.settings')
// settingsBlock.classList.remove('hidden')

// let transcriptBlock = document.querySelector('.transcript')
// transcriptBlock.classList.remove('hidden')

// let generateButton = document.querySelector('.generate-button')
// generateButton.classList.remove('hidden')


Search().then((vidID) => {

  const attentionBlock = document.querySelector('.container');
  const outer = document.querySelector('.youtube-search');
  const inner = document.querySelector('.search-bar');
  
  attentionBlock.classList.add('fullscreen');
  outer.classList.add(('hidden'));
  inner.classList.remove(('search-bar'));
  outer.classList.remove(('youtube-search'));

  fetch(`http://localhost:5001/extract/${vidID}`)

  .then(response => response.text())

  .then(data => {

    let settingsBlock = document.querySelector('.settings');
    settingsBlock.classList.remove('hidden');

    let transcriptBlock = document.querySelector('.transcript');
    transcriptBlock.classList.remove('hidden');

    let generateButton = document.querySelector('.generate-button');
    generateButton.classList.remove('hidden');

    textBox(data);
    // AiEditBar();
    // Gpt(5001);
  })
  .catch(err => {
    console.error('Something went wrong with the fetch: ', err)});
  })
  .catch((error) => {     // catching search errors
    console.error("something is wrong with the url message", error);
  })

//! ACTUAL LOGIC ENDS ===============
  

//! Buttons event listener
let buttonsArray = document.querySelector('.btn-group');
buttonsArray.addEventListener('click', (e) => {
  let selected = e.target;
  if (selected.nodeName === "BUTTON") {
    let formerSelection = document.querySelector('.selected')
    // console.log(formerSelection);
    if (formerSelection !== null){
      formerSelection.classList.remove('selected')
    }
    selected.classList.add('selected')
  }
});
//! 


//! custom prompt event listener

//!


//! Generate event listener

//!







// ele(btn-group)(click)
// e.target
// if (e.target.nodeName === "BUTTON"){}
  