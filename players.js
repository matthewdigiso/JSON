// Create XmLHTTpRequest Object!
const xhr = new XMLHttpRequest();

// onload is an Event... like a click event :)
xhr.onload = function() {
    if(xhr.status === 200) {
        const date = JSON.parse(xhr.responseText);
};

xhr.open("GET", "players.json");
xhr.send();