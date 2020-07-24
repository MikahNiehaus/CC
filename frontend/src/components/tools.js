// #####NOTES#####
//#const
// The keyword const does NOT define a constant value. It defines a constant reference to a value.
// Because of this, we cannot change constant primitive values, but we can change the properties of constant objects. (Array example)
//#new/instance
// An “instance” means a reference to an “object” created by “new” or the equivalent.


function say(text) {
    // XMLHttpRequest (XHR) objects are used to interact with servers.
    //  You can retrieve data from a URL without having to do a full page refresh.
    //   This enables a Web page to update just part of a page without disrupting what the user is doing.
    //    XMLHttpRequest is used heavily in AJAX programming.
    const xhttp = new XMLHttpRequest();
    //An EventHandler that is called whenever the readyState attribute changes.
    xhttp.onreadystatechange = function () {
        // The Document method getElementById() returns an Element object representing the element whose id property matches the specified string.
        document.getElementById("info").innerHTML = text;
    };
    //	Specifies the type of request
    //      method: the type of request: GET or POST
    //      url: the server (file) location
    //      async: true (asynchronous) or false (synchronous)
    xhttp.open("GET", "ajax_info.txt", true);
    //Sends the request to the server (used for GET)
    xhttp.send();
    //The setTimeout() method calls a function or evaluates an expression after a specified number of milliseconds.
    setTimeout(function () {
        greet();
    }, 3000);
}

function greet() {
//Creates a JavaScript Date instance that represents a single moment in time in a platform-independent format. 
    const myDate = new Date();
    const hrs = myDate.getHours();
    //finds the time of day
    let greet;
    if (hrs < 12)
        greet = 'Good Morning';
    else if (hrs >= 12 && hrs <= 17)
        greet = 'Good Afternoon';
    else if (hrs >= 17 && hrs <= 24)
        greet = 'Good Evening';
    // XMLHttpRequest (XHR) objects are used to interact with servers.
    //  You can retrieve data from a URL without having to do a full page refresh.
    //   This enables a Web page to update just part of a page without disrupting what the user is doing.
    //    XMLHttpRequest is used heavily in AJAX programming.
    const xhttp = new XMLHttpRequest();
    //An EventHandler that is called whenever the readyState attribute changes.
    xhttp.onreadystatechange = function () {
        // The Document method getElementById() returns an Element object representing the element whose id property matches the specified string.
        document.getElementById("info").innerHTML =  greet;
    };
    //	Specifies the type of request
    //      method: the type of request: GET or POST
    //      url: the server (file) location
    //      async: true (asynchronous) or false (synchronous)
    xhttp.open("GET", "ajax_info.txt", true);
    //Sends the request to the server (used for GET)
    xhttp.send();
}

function editBody(body) {
    //edit the body to make it easer to read
    let resolt = ""
    resolt = body;
    resolt = resolt.replace(/  +/g, ' ');
    resolt = resolt.split('.').join('.\n');
    resolt = resolt.replace(/  +/g, ' ');
    return resolt;
}

function copyStringToClipboard(str) {
    // Create new element
    const el = document.createElement('textarea');
    // Set value (string to be copied)
    el.value = str;
    // Set non-editable to avoid focus and move outside of view
    el.setAttribute('readonly', '');
    el.style = { position: 'absolute', left: '-9999px' };
    document.body.appendChild(el);
    // Select text inside element
    el.select();
    // Copy text to clipboard
    document.execCommand('copy');
    // Remove temporary element
    document.body.removeChild(el);
    //says "CC added to Clipboard!"
    say("CC added to Clipboard!")

}