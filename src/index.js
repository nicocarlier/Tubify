const container = document.querySelector('.js-container');
const header = document.createElement('h1');
header.innerHTML = 'TUBIFY';
container.append(header);

let body = {message: 'hello world'};

// fetch( 'http://localhost:5001', { 
//     method: 'POST',
//     body: JSON.stringify(body),
//     headers: {
//         "Content-Type": "application/json"
//     }
// }).then(res => {
//     return res.json();
// }).then(data => {
//     console.log(data);
// })







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
    fetch('http://localhost:5001', {
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



//API PROJECT


// import { Configuration, OpenAIApi } from "openai";
// import express from "express";
// import bodyParser from "body-parser";
// import cors from "cors";

// const configuration = new Configuration({
//     organization: "org-gRwB2IDSV07ElX4x7MoS8mf7",
//     apiKey: "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",
// })

// const openAi  = new OpenAIApi(configuration)

// const app = express();
// const port = 3000;

// app.use(bodyParser.json());
// app.use(cors());

// app.post("/", async (req, res) => {

//     const { message } = req.body;
     
//     const completion = await openAi.createChatCompletion({
//         model: "gpt-3.5-turbo",
//         messages: [
//             {role: "user", content: `${message}`},
//         ] 
//     })

//     res.json({
//         completion: completion.data.choices[0].message
//     })

// });

// app.listen(port, () => {
//     console.log(`Example app listening at http://localhost${port}`);
// });

