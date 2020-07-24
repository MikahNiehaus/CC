function say(text) {
    const xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {

        document.getElementById("info").innerHTML =
            text;

    };
    xhttp.open("GET", "ajax_info.txt", true);
    xhttp.send();
    setTimeout(function () {
        greet();
    }, 3000);
}

function greet() {

    const myDate = new Date();
    const hrs = myDate.getHours();

    let greet;

    if (hrs < 12)
        greet = 'Good Morning';
    else if (hrs >= 12 && hrs <= 17)
        greet = 'Good Afternoon';
    else if (hrs >= 17 && hrs <= 24)
        greet = 'Good Evening';
    const xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {

        document.getElementById("info").innerHTML =
            greet;

    };
    xhttp.open("GET", "ajax_info.txt", true);
    xhttp.send();
}

function editBody(body) {
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

    say("CC added to Clipboard!")

}