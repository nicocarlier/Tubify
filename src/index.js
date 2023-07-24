// import Gpt from './scripts/gpt.js';
import Search from './scripts/search.js';
import textBox from './scripts/textBox.js';
//import getTranscript from './scripts/getTranscript.js'; //? refactor to use this

const title = document.querySelector('.container h1')

// textBox();

//!works
Search().then((res) => {
    console.log("video ID is: ", res[1])
    fetch(`http://localhost:5001/transcript/${res[1]}`)
    .then(transcript => transcript.json()) // You need to parse the response as JSON
    // .then(data => { console.log(data.fullText);
    .then(data => { 
        title.classList.add('found')
        textBox(data.fullText);
        console.log(data.fullText);
  })
  .catch(err => {
    console.error('Error: ', err);
  });
}).catch((error) => {
    console.error("something is wrong with the url message", error);
})


//? refactor to use this
// Search()
//   .then(videoID => getTranscript(videoID[2]))
//   .then(transcript => console.log(transcript))
//   .catch(error => console.error("Error: ", error));
