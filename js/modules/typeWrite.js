export default function typeWrite(text, speed, htmlElement) {
    let counter = 0;
    htmlElement.textContent = '';

    function writeText() {
        if (counter < text.length) {
            if (htmlElement) {
                htmlElement.textContent += text.charAt(counter);
            }
            counter++;
            setTimeout(writeText, speed);
        }
    }

    writeText();
}