function pageTwoToThree() {

    const settingsBlock = document.querySelector('.settings');
    const transcriptBlock = document.querySelector('.transcript');
    const generateButton = document.querySelector('.generate-button');
    // const github = document.querySelector('.github');
    // const linkedin = document.querySelector('.linkedin');
    const attentionBlock = document.querySelector('.container');
    // const outer = document.querySelector('.youtube-search');
    // const inner = document.querySelector('.search-bar');
    // const backButton = document.querySelector('#back-button');


    //! hide page elements
    settingsBlock.classList.add('hidden');
    transcriptBlock.classList.add('hidden');
    generateButton.classList.add('hidden');


    //! switch to "found mode"
    attentionBlock.classList.add('found');
    let message = document.querySelector('.back-button p');
    message.innerHTML = "Edit Prompt";
}

export default pageTwoToThree;