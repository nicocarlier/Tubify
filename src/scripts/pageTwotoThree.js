function pageTwoToThree() {

    // const settingsBlock = document.querySelector('.settings');
    // const transcriptBlock = document.querySelector('.transcript');
    // const generateButton = document.querySelector('.generate-button');
    const github = document.querySelector('.github');
    const linkedin = document.querySelector('.linkedin');
    const attentionBlock = document.querySelector('.container');
    const outer = document.querySelector('.youtube-search');
    const inner = document.querySelector('.search-bar');
    const backButton = document.querySelector('#back-button');

    attentionBlock.classList.add('fullscreen');
    outer.classList.add('hidden');
    inner.classList.remove('search-bar');
    outer.classList.remove('youtube-search');
    backButton.classList.remove('hidden');
  
    // dark-to-light mode:
    backButton.classList.remove('dark');
    backButton.classList.add('light');
    github.classList.remove('dark');
    github.classList.add('light');
    linkedin.classList.remove('dark');
    linkedin.classList.add('light');

}

export default pageTwoToThree;