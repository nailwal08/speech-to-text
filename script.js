const outputDiv = document.getElementById('output');
function showDateTime() {
    const dateTimeDisplay = document.getElementById('dateTimeDisplay');
    const currentDateTime = new Date();
    const formattedDateTime = currentDateTime.toLocaleString();
    dateTimeDisplay.textContent = 'Current Date and Time: ' + formattedDateTime;
}
function copyEmailToClipboard() {
    const emailElement = document.getElementById('email');
    const emailText = emailElement.textContent;
    const tempInput = document.createElement('input');
    tempInput.value = emailText;
    document.body.appendChild(tempInput);
    tempInput.select();
    document.execCommand('copy');
    document.body.removeChild(tempInput);
    alert('Email address copied to clipboard: ' + emailText);
}
function aboutPage() {
    document.getElementById('aboutSection').style.display = 'block';
}
function contact() {
    document.getElementById('contactSection').style.display = 'block';
    copyEmailToClipboard();
}
function enableDarkMode() {
    document.body.style.backgroundColor = '#827d7d';
    document.getElementById('section-one').style.backgroundColor = '#757272';
    document.getElementById('section-one').style.color = '#FFFFFF';
    document.getElementById('section-two').style.backgroundColor = '#757272';
    document.getElementById('section-two').style.color = '#FFFFFF';
    document.getElementById('contactSection').style.backgroundColor = '#757272';
    document.getElementById('contactSection').style.color = '#FFFFFF';
    document.getElementById('aboutSection').style.backgroundColor = '#757272';
    document.getElementById('aboutSection').style.color = '#FFFFFF';
}
function disDarkMode() {
    location.reload();
}
function openPortfolio() {
    const myUrl = 'https://nailwal08.github.io/portfolio/';
    window.open(myUrl, '_blank');
}
function closeTab() {
    window.close();
}
const recognition = new webkitSpeechRecognition() || new SpeechRecognition();
recognition.lang = 'en-US';
document.getElementById('micButton').addEventListener('click', () => {
    recognition.start();
    outputDiv.textContent = 'Listening...';
});
recognition.onresult = (event) => {
    const result = event.results[event.results.length - 1][0].transcript.toLowerCase();
    outputDiv.textContent = 'You said: ' + result;
    if (result === 'enable dark mode') {
        enableDarkMode();
    }
    else if (result === 'open portfolio') {
        openPortfolio();
    }
    else if (result === 'close tab') {
        closeTab();
    }
    else if (result === 'contact me') {
        contact();
    }
    else if (result === 'about this page') {
        aboutPage();
    }
    else if (result === 'what is the date today' || result === "what's the date today") {
        showDateTime();
    }
    else if (result === 'disable dark mode') {
        disDarkMode();
    }
    else {
        const theUrl = `https://www.google.com/search?q=${encodeURIComponent(result)}`;
        window.open(theUrl, '_blank');
    }
};
const colorChangingSection = document.getElementById('micButton');
function getRandomColor() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgb(${r},${g},${b})`;
}
function changeBorderColor() {
    const randomColor = getRandomColor();
    colorChangingSection.style.borderColor = randomColor;
}
setInterval(changeBorderColor, 3000); 