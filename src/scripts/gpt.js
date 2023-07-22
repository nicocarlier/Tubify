function GPT(port){
    
    const chatLog = document.getElementById('chat-log');
    const message = document.getElementById('message');
    const form = document.querySelector('form');
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const messageText = message.value;
        message.value = '';
        const messageElement = document.createElement('div');
        messageElement.classList.add('message');
        messageElement.classList.add('message--sent');
        messageElement.innerHTML = `
            <div class=message__text">${messageText}</div>
        `;
        chatLog.appendChild(messageElement);
        chatLog.scrollTop = chatLog.scrollHeight;
        fetch(`http://localhost:${port}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                message: messageText
            })
        })
        .then(res => {
            if (!res.ok) {
            throw new Error('Network response was not ok');
            }
            return res.json();
        })
        .then(data => {
            // console.log(data);
            // console.log(data.choices[0].message.content);
            const messageElement = document.createElement('div');
            messageElement.classList.add('message');
            messageElement.classList.add('message--received');
            messageElement.innerHTML = `
                <div class="message__text">${data.choices[0].message.content}</div>
            `;
            chatLog.appendChild(messageElement);
            chatLog.scrollTop = chatLog.scrollHeight;
        })
        .catch(error => {
            console.error('There has been a problem with your fetch operation:', error);
        });
    });
    
}


export default GPT;