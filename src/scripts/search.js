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

                // console.log(videoId, "video id is");

                res = [url, videoId];

                // const attentionBlock = document.querySelector('.container');
                // attentionBlock.classList.active = true;

                const outer = document.querySelector('.youtube-search');
                const inner = document.querySelector('.search-bar');


                outer.classList.add(('hidden'));
                inner.classList.remove(('search-bar'));
                outer.classList.remove(('youtube-search'));

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