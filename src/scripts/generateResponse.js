import { marked } from 'marked';

function titleize(str){
    const small = ["a", "and", "of", "over", "the"];
    const words = str.split(" ");
    const titleized = words.map((word, idx) => {
        if ((idx === 0) || (!small.includes(word)) ){
            return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
        }else {
            return word.toLowerCase();
        }
    })
    return titleized.join(' ')
}

function generateResponse(prompt, transcript, key){
    let title = key || "Text";
    title = titleize("Generated " + title)
    // const passIn = prompt + transcript;
    fetch(`http://localhost:5001`, {
    // fetch("https://tubify-be02a8d8ea61.herokuapp.com/", {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            prompt: prompt
        })
    }).then(res => {
        if (!res.ok) {
        throw new Error('Network response was not ok');
        }
        return res.json();
    })
    .then(data => {
        const markdownTextResponse = data.choices[0].message.content;
        // const header = document.querySelector('.AI-output h2');
        const responseEle = document.querySelector('.ai-response');
        const aiBlock = document.querySelector('#AI-output');
        const loader = document.querySelector('#ai-loader');
        const gptLogo = document.querySelector('#gptlogo');
        const gptHolder = document.querySelector('.gptholder');

        // debugger

        // console.log(marked('**Bold**'));

        
        // console.log(title);

        const htmlContent = marked(markdownTextResponse);
        responseEle.innerHTML = htmlContent;
        
        // header.innerHTML = title;

        //! hide loader:
        loader.classList.add('hidden');
        loader.classList.add('hidden');
        gptLogo.classList.add('hidden');
        gptHolder.classList.add('hidden');

        aiBlock.classList.remove('hidden');

    })
    .catch(error => {
        console.error('There has been a problem with fetch operation:', error);
    });
}

export default generateResponse;