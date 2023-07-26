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
                // res = [url, videoId];
                res = videoId;
            }else {
                res = "not valid url";
                // videoId = "not a valid url"
            }
            resolve(res);
            // resolve(videoId);
        });
    });
}





export default search;