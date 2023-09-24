
// Function to enable dark mode (change background color to gray)
function showDateTime() {
    const dateTimeDisplay = document.getElementById('dateTimeDisplay');
    const currentDateTime = new Date();
    const formattedDateTime = currentDateTime.toLocaleString();
    dateTimeDisplay.textContent = 'Current Date and Time: ' + formattedDateTime;
}
function copyEmailToClipboard() {
    const emailElement = document.getElementById('email');
    const emailText = emailElement.textContent;
    
    // Create a temporary input element to copy the email
    const tempInput = document.createElement('input');
    tempInput.value = emailText;
    document.body.appendChild(tempInput);
    tempInput.select();
    document.execCommand('copy');
    document.body.removeChild(tempInput);

    alert('Email address copied to clipboard: ' + emailText);
}

// Add click event listeners to show the contact section and copy email
function aboutPage(){
    document.getElementById('aboutSection').style.display = 'block';
}
function contact(){
    document.getElementById('contactSection').style.display = 'block';
    copyEmailToClipboard();
}

const outputDiv = document.getElementById('output');

function enableDarkMode() {
    document.body.style.backgroundColor = '#827d7d'; // Gray background color
        document.getElementById('section-one').style.backgroundColor = '#757272';
        document.getElementById('section-one').style.color = '#FFFFFF';
        document.getElementById('section-two').style.backgroundColor = '#757272'; 
        document.getElementById('section-two').style.color = '#FFFFFF'; 
        document.getElementById('contactSection').style.backgroundColor = '#757272';
        document.getElementById('contactSection').style.color = '#FFFFFF';
        document.getElementById('aboutSection').style.backgroundColor = '#757272';
        document.getElementById('aboutSection').style.color = '#FFFFFF';
        
    }
function disDarkMode(){
    location.reload();
}
function openPortfolio() {
    const myUrl= 'https://nailwal08.github.io/portfolio/';
    window.open(myUrl,'_blank');
    
}
function closeTab(){
    window.close();
}

// Create a SpeechRecognition object
const recognition = new webkitSpeechRecognition() || new SpeechRecognition();
recognition.lang = 'en-US';

// Add a click event listener to the microphone icon button
document.getElementById('micButton').addEventListener('click', () => {
    recognition.start();
    outputDiv.textContent = 'Listening...';
});

// Listen for speech recognition results
recognition.onresult = (event) => {
    const result = event.results[event.results.length - 1][0].transcript.toLowerCase();
    outputDiv.textContent = 'You said: ' + result;
  
    // Check if the recognized speech matches the command
     if (result === 'enable dark mode') {
        enableDarkMode();
    } 
    else if(result === 'open portfolio') {
        openPortfolio();
    }
    else if(result === 'close tab') {
        closeTab();
    }
    else if(result==='contact me'){
        contact();
    }
    else if(result==='about this page'){
        aboutPage();
    }
    else if(result==='what is the date today' || result==="what's the date today"){
        showDateTime();
    }
    else if(result==='disable dark mode'){
        disDarkMode();
    }
    else {
        const theUrl= `https://www.google.com/search?q=${encodeURIComponent(result)}`;
        window.open(theUrl,'_blank');
    } 
   
};
const colorChangingSection = document.getElementById('micButton');

// Function to generate a random RGB color
function getRandomColor() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgb(${r},${g},${b})`;
}

// Function to change the section's border color automatically
function changeBorderColor() {
    const randomColor = getRandomColor();
    colorChangingSection.style.borderColor = randomColor;
}

// Automatically change the border color at regular intervals (e.g., every 3 seconds)
setInterval(changeBorderColor, 3000); // Change color every 3 seconds (3000 milliseconds)