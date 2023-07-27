function oneToTwo() {

    const github = document.querySelector('.github');
    const linkedin = document.querySelector('.linkedin');
    const attentionBlock = document.querySelector('.container');
    const searchForm = document.querySelector('#s-bar');
    const backButton = document.querySelector('#back-button');
    const mainHeading = document.querySelector('#main-heading');

    mainHeading.classList.add('hidden')
    attentionBlock.classList.add('fullscreen');
    searchForm.classList.add('hidden');
    backButton.classList.remove('hidden');
    github.classList.remove('dark');
    github.classList.add('light');
    linkedin.classList.remove('dark');
    linkedin.classList.add('light');
  
}

export default oneToTwo;