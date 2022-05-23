//First, set up a DOMContentLoaded event listener to detect when the HTML page has loaded and the document is ready to be manipulated. 
//Use the event's callback function to target the paragraph element with id="text" and replace the text with "This is really cool!"
document.addEventListener('DOMContentLoaded', function(){
    const p = document.querySelector('#text');
    p.textContent = 'This is really cool!'
});

