function generateResponse(prompt, transcript, port){
    const passIn = prompt + transcript;
    // fetch(`http://localhost:${port}`, {
    fetch("https://tubify-be02a8d8ea61.herokuapp.com/", {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            message: passIn
        })
    }).then(res => {
        if (!res.ok) {
        throw new Error('Network response was not ok');
        }
        return res.json();
    })
    .then(data => {
        let response = data.choices[0].message.content;
        let header = document.querySelector('.AI-output h2');
        let responseEle = document.querySelector('.ai-response');
        header.innerHTML = `AI Generated [replace this]`;
        responseEle.innerHTML = response;
        const aiBlock = document.querySelector('#AI-output');
        aiBlock.classList.remove('hidden');

        // let header = document.querySelector('.AI-output h2');
        header.innerHTML = key;

    })
    .catch(error => {
        console.error('There has been a problem with fetch operation:', error);
    });
}

export default generateResponse;