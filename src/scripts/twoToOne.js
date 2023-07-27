function twoToOne() {

    const outer = document.querySelector('#search');
    const inner = document.querySelector('#s-bar');
    const backButton = document.querySelector('#back-button');
    const attentionBlock = document.querySelector('.container');
    const github = document.querySelector('.github');
    const linkedin = document.querySelector('.linkedin');
    
    //!go away from fullscreen
    attentionBlock.classList.remove('fullscreen');
    outer.classList.remove('hidden');
    
    //! hide page two features
    // const settingsBlock = document.querySelector('#settings');
    // const transcriptBlock = document.querySelector('.transcript');
    // const generateButton = document.querySelector('.generate-button');
    // settingsBlock.classList.add('hidden');
    // transcriptBlock.classList.add('hidden');
    // generateButton.classList.add('hidden');


    //! hide page 2's elements:
    settingsBlock.classList.remove('hidden');
    transcriptBlock.classList.remove('hidden');
    generateButton.classList.remove('hidden');
    backButton.classList.add('hidden');

    //! show search bar:
    inner.classList.add('search-bar');
    outer.classList.add('youtube-search');


    // light-to-dar mode:
    // backButton.classList.remove('light');
    // backButton.classList.add('dark');
    github.classList.remove('light');
    github.classList.add('dark');
    linkedin.classList.remove('light');
    linkedin.classList.add('dark');


}

export default twoToOne;