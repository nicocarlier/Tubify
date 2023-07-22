function search(){
    return new Promise((resolve, reject) => {
        const searchForm = document.querySelector('.search-bar');

        searchForm.addEventListener('submit', (e) => {
            e.preventDefault();
            // searchForm.classList.add('hidden');
            let url = document.querySelector('.search-bar input').value;

            let res;
            if (url.includes('https://www.youtube.com/watch?v=')){

                const startIndex = url.indexOf("v=") + 2;
                const videoId = url.slice(startIndex);
                res = [url, videoId]; // can make an object


                const outer = document.querySelector('.youtube-search');
                outer.classList.add(('hidden'));
                // youtube-search

            }else {
                res = "not valid url";
            }
            resolve(res);
        });
    });
}



export default search;