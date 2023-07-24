function search(){
    return new Promise((resolve, reject) => {
        const searchForm = document.querySelector('.search-bar');

        searchForm.addEventListener('submit', (e) => {
            e.preventDefault();
            // searchForm.classList.add('hidden');
            const url = document.querySelector('.search-bar input').value;

            // let videoId
            let res;
            if (url.includes('https://www.youtube.com/watch?v=')){


                const startIndex = url.indexOf("v=") + 2;
                const videoId = url.slice(startIndex);

                console.log(videoId, "video id is");

                res = [url, videoId];
                


                const outer = document.querySelector('.youtube-search');

                // outer.classList.add(('hidden'));
                outer.remove();

            }else {
                res = "not valid url";
                // videoId = "not a valid url"
            }
            resolve(res);
            // resolve(videoId)
        });
    });
}



export default search;