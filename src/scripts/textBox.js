
function textBox(text){

    const jsContainer = document.querySelector('.js-container');
    
    let textBlock = document.createElement('div');
    textBlock.classList.add('text-block');
    
    jsContainer.append(textBlock);
    // document.append(textBlock);
    
    let title = document.createElement('div');
    title.classList.add('title');
    textBlock.append(title)

    let scrollBox = document.createElement('div');
    scrollBox.classList.add('scrollbox');
    textBlock.append(scrollBox);
    
    
    let heading = document.createElement('h2');
    heading.innerHTML = "Full Transcript:";
    
    title.append(heading);
    
    let innerScroll = document.createElement('div');
    innerScroll.classList.add('scrollbox-inner');
    
    scrollBox.append(innerScroll);
    
    let textBody = document.createElement('p');
    textBody.innerHTML = `${text}`;
    
    innerScroll.append(textBody);

    
}

export default textBox;