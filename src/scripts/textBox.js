
function textBox(text){

    //! fill in the text box
    transcript = document.querySelector('.scrollbox-inner p')
    transcript.innerHTML = text;

    //! Event handler code

    let textBlock = document.querySelector('.text-block');
    let title = document.querySelector('.title');
    let arrowLeft = document.getElementById('left-arrow');
    let arrowRight = document.getElementById('right-arrow');

    title.addEventListener("click", function(event) {
        event.preventDefault();
        showTranscript(textBlock);
    });

    function showTranscript(textBlock) {
        if (textBlock.classList.contains('revealed')) {
            textBlock.classList.remove('revealed');
            arrowLeft.style.transform = "rotate(0deg)";
            arrowRight.style.transform = "rotate(0deg)";
            arrowLeft.src="./assets/down-arrow.svg";
            arrowRight.src="./assets/down-arrow.svg";
        } else {
            textBlock.classList.add('revealed');
            arrowLeft.style.transform = "rotate(180deg)";
            arrowRight.style.transform = "rotate(-180deg)";
            arrowLeft.src="./assets/down-arrow.svg";
            arrowRight.src="./assets/down-arrow.svg";
        }
    }
    
}

export default textBox;