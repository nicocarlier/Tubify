
function textBoxOld(text){

    //! const jsContainer = document.querySelector('.js-container');
    let transcriptContainer = document.querySelector('.transcript');

    let textBlock = document.createElement('div');
    textBlock.classList.add('text-block');
    textBlock.classList.add('revealed');
    

    
    //! jsContainer.append(textBlock);
    transcriptContainer.append(textBlock);
    
    let title = document.createElement('div');
    title.classList.add('title');
    textBlock.append(title)

    let scrollForm = document.createElement('form');
    // scrollBox.classList.add('scrollbox');
    title.append(scrollForm);

    let arrowLeft = document.createElement('img');
    arrowLeft.id = "left-arrow";
    arrowLeft.src = "./assets/down-arrow.svg"
    scrollForm.append(arrowLeft);

    let heading = document.createElement('h2');
    heading.innerHTML = 'Full Video Transcript';
    scrollForm.append(heading);

    let arrowRight = document.createElement('img');
    arrowRight.id = "right-arrow";
    arrowRight.src = "./assets/down-arrow.svg"
    scrollForm.append(arrowRight);


    let scrollBox = document.createElement('div');
    scrollBox.classList.add('scrollbox');
    textBlock.append(scrollBox);
    
    let innerScroll = document.createElement('div');
    innerScroll.classList.add('scrollbox-inner');
    
    scrollBox.append(innerScroll);
    
    let textBody = document.createElement('p');
    textBody.innerHTML = `${text}`;
    
    innerScroll.append(textBody);


    //! Event handler code

    // let textBlock = document.querySelector('.text-block');
    // let showButton = document.querySelector('.title');
    // let leftArrow = document.getElementById('left-arrow');
    // let rightArrow = document.getElementById('right-arrow');

    title.addEventListener("click", function(event) {
        event.preventDefault();
        showTranscript(textBlock);
    });

    function showTranscript(textBlock) {
        if (textBlock.classList.contains('revealed')) {
            textBlock.classList.remove('revealed');
            arrowLeft.style.transform = "rotate(180deg)";
            arrowRight.style.transform = "rotate(-180deg)";
            arrowLeft.src="./assets/down-arrow.svg";
            arrowRight.src="./assets/down-arrow.svg";
        } else {
            textBlock.classList.add('revealed');
            arrowLeft.style.transform = "rotate(0deg)";
            arrowRight.style.transform = "rotate(0deg)";
            arrowLeft.src="./assets/down-arrow.svg";
            arrowRight.src="./assets/down-arrow.svg";
        }
    }

    
}

export default textBoxOld;