
// function getTranscript(videoId){

//     fetch(`http://localhost:5001/transcript/${videoId}`)
//         .then(res => res.json()) // You need to parse the response as JSON
//         .then(data => {
//         return data.fullText;
//     // console.log(data.fullText);
//   })
//   .catch(err => {
//     console.error('Error: ', err);
//   });

// }


function getTranscript(videoId) {
    return fetch(`http://localhost:5001/transcript/${videoId}`)
    .then(res => {
        if (!res.ok) {
            throw new Error(`HTTP error! status: ${res.status}`);
        }
        return res.json();
    })
    .then(data => {
        return data.fullText;
    });
}

//   module.exports = getTranscript;
export default getTranscript;