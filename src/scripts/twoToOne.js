function twoToOne() {

    const searchForm = document.querySelector('#s-bar');
    const backButton = document.querySelector('#back-button');
    const attentionBlock = document.querySelector('.container');
    const github = document.querySelector('.github');
    const linkedin = document.querySelector('.linkedin');
    const settingsBlock = document.querySelector('#settings');
    const transcriptBlock = document.querySelector('.transcript');
    const generateButton = document.querySelector('.generate-button');
    const mainHeading = document.querySelector('#main-heading');

    mainHeading.classList.remove('hidden')
    attentionBlock.classList.remove('fullscreen');
    searchForm.classList.remove('hidden');
    settingsBlock.classList.add('hidden');
    transcriptBlock.classList.add('hidden');
    generateButton.classList.add('hidden');
    backButton.classList.add('hidden');
    github.classList.remove('light');
    github.classList.add('dark');
    linkedin.classList.remove('light');
    linkedin.classList.add('dark');
}

export default twoToOne;