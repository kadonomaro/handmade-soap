function typeWrite(text, speed, htmlElement) {
    let counter = 0;
    let textCopy = htmlElement.textContent;
    htmlElement.textContent = '';
    speed = speed;

    

    function writeText() {
        if (counter < text.length) {
            if (htmlElement) {
                htmlElement.textContent += textCopy.charAt(counter);
            }
            counter++;
            setTimeout(writeText, speed);
        }
    }

    writeText();

}

export default typeWrite;