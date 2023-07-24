// import Gpt from './scripts/gpt.js';
import Search from './scripts/search.js';
import textBox from './scripts/textBox.js';
//import getTranscript from './scripts/getTranscript.js'; //? refactor to use this

const title = document.querySelector('.container h1')

// textBox();

// Gpt();
//!
// fetch('http://localhost:5001/extract/r7zThgJAAPg')
//   .then(response => response.text())
//   .then(data => {
//     console.log("transcript: \n", data);
//     // call your function to process data
//     textBox(data);
//   })
//   .catch(err => console.error('Error:', err));


//? fetch(`http://localhost:5001/extract/r7zThgJAAPg`)
//   .then(script => {
//       // script.json()}) 
//       console.log(script, "1")
//       // console.log(script.ok, "2")
//       // console.log(script.fullText, "2")
//     .then(data => { 
//       // console.log("full text here?",data);
//       console.log("full text here?",data)})
//     .then(data => { 
//         // title.classList.add('found')
//         // console.log(data)
//         // textBox("hello!");
//         textBox(data.fullText);
//         // AiEditbar();
//         console.log("transcript: \n", data.fullText);
//   })

//!works
Search().then((res) => {
  fetch(`http://localhost:5001/extract/${res[1]}`)
  .then(response => response.text())
  .then(data => {
    console.log("transcript: \n", data);
    // call your function to process data
    textBox(data);
  })
  .catch(err => {
    console.error('Something went wrong with the fetch: ', err)});
})
.catch((error) => {     // catching search errors
    console.error("something is wrong with the url message", error);
})


//? refactor to use this
// Search()
//   .then(videoID => getTranscript(videoID[2]))
//   .then(transcript => console.log(transcript))
//   .catch(error => console.error("Error: ", error));
