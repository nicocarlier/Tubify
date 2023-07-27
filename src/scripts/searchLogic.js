
let url;
const urlInvalid = document.querySelector('.url-error');
const noScript = document.querySelector('.no-script');
const searchForm = document.querySelector('.search-bar');

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
        fetch(`https://tubify-be02a8d8ea61.herokuapp.com/transcript/${videoId}`)
        
        .then(response => response.text())

        .then(data => {
          if(data === "no transcript!"){
            noScript.classList.remove('hidden');
            twoToOne();
            pageNum = 1;
          }else {
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
