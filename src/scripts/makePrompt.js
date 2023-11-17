function makePrompt(choice, transcript) {

    // Retrieve default styles from the UI
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