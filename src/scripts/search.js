// import oneToTwo from './scripts/oneToTwo.js';

// import oneToTwo from './oneToTwo.js';

function search(){
    return new Promise((resolve, reject) => {
        const searchForm = document.querySelector('.search-bar');
        searchForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const url = document.querySelector('.search-bar input').value;
            let res;

            if (url.includes('https://www.youtube.com/watch?v=')){
                const startIndex = url.indexOf("v=") + 2;
                const videoId = url.slice(startIndex);
                res = videoId;
                // oneToTwo();




            }else {
                res = "not valid url";
            }
            // oneToTwo();
            resolve(res);
        });

    });
}

export default search;