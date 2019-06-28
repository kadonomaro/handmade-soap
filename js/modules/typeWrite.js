function typeWrite(text, speed, htmlElement) {
    let counter = 0;
    speed = speed || 100;

    

    function writeText() {
        if (counter < text.length) {
            if (htmlElement) {
                htmlElement.textContent = '';
                htmlElement.textContent += text.charAt(counter);
            }
            counter++;
            setTimeout(writeText, speed);
        }
    }

    writeText();

}

export default typeWrite;