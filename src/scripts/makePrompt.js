// const promptMap = {
//     "Summary": `You will be clear and concise and behave like a sophisticated writer. Please write me a summary of the following transcript from a youtube video. Please note this transcription may have spelling or punctuation errors, so infer meaning when necessary. Also make no mention of the details of this request, I just want the summary.\n Here is the transcript: \n\n`,
  
//     "Explaination for Dummies": `You will explain the youtube video content in a simple and easily understandable manner, as if you were explaining it to a beginner. Please read the transcript provided and create a clear and straightforward explanation. Disregard any complex language or jargon, and make the explanation easy to grasp.\n Here is the transcript: \n\n`,
  
//     "Key Points": `You will identify and list the key points from the youtube video transcript. Please read the transcript and highlight the most important and significant information. Condense the content to its essential elements to provide a concise overview of the video's main points.\n Here is the transcript: \n\n`,
  
//     "TLDR": `You will summarize the youtube video in a "Too Long, Didn't Read" (TLDR) format. Please read the transcript and provide a short and concise summary that captures the main message of the video. The TLDR summary should be brief and to the point.\n Here is the transcript: \n\n`,
  
//     "Essay": `You will write an essay on the topic discussed in the youtube video. Please use the transcript as a reference and craft a comprehensive essay covering the subject matter. Feel free to add context, analysis, and your own insights to create a well-structured and engaging essay.\n Here is the transcript: \n\n`,
  
//     "Article": `You will write an informative article based on the content of the youtube video transcript. Please use the transcript as a reference and create an article that is well-researched and provides valuable insights to the readers. Aim for a cohesive and polished article.\n Here is the transcript: \n\n`,
  
//     "Rap Song": `You will turn the transcript into an engaging and creative rap song. Please read the transcript and convert it into rhymes and rhythm suitable for a rap song. Infuse the lyrics with energy and creativity to make it entertaining and enjoyable.\n Here is the transcript: \n\n`,
  
//     "Poem": `You will compose a poetic piece inspired by the youtube video transcript. Please use the transcript as a source of inspiration and create a beautiful poem with expressive language and vivid imagery. Let your creativity flow and make the poem captivating.\n Here is the transcript: \n\n`,

// };

// const prompt = 
// `I want you to transform this video transcript into a ${choice}. \n
// Ensure that your output is concise and formatted in Markdown. \n
// Start with a header and structure the content appropriately. Use Markdown elements like **bold** for emphasis, *italics* for secondary emphasis, and '#' for headers. \n
// Here is an example structure:\n
// # Main Header\n
// ## Subheader\n
// - Bullet point for key points\n
// **Bold Text** for important phrases\n
// *Italic Text* for additional emphasis\n\n
// Transcript:\n
// ${transcript}`;

function makePrompt(choice, transcript) {
    // Retrieve available choices from the UI
    const choiceOptions = Array.from(document.querySelectorAll('.btn-group button')).map(btn => btn.innerHTML);

    // Determine the prompt style based on the choice
    let promptStyle = choiceOptions.includes(choice) ?
        `I want you to transform this video transcript into a ${choice}. \n` :
        `I want you to transform this video transcript into the following style: ${choice}. \n`;

    // Construct the complete prompt
    const prompt = `${promptStyle}
    Ensure that your output is concise and formatted in Markdown. \n
    Start with a header and structure the content appropriately. Use Markdown elements like **bold** for emphasis, *italics* for secondary emphasis, and '#' for headers. \n
    Here is an example structure:\n
    # Main Header\n
    ## Subheader\n
    - Bullet point for key points\n
    **Bold Text** for important phrases\n
    *Italic Text* for additional emphasis\n\n
    Transcript:\n
    ${transcript}`;

    return prompt;
}

export default makePrompt;