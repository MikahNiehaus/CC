// #####NOTES#####
//#const
// The keyword const does NOT define a constant value. It defines a constant reference to a value.
// Because of this, we cannot change constant primitive values, but we can change the properties of constant objects. (Array example)
//#new/instance
// An “instance” means a reference to an “object” created by “new” or the equivalent.
//#functiuon
// A function in JavaScript is similar to a procedure—a set of statements that performs a task or calculates a value,
//  but for a procedure to qualify as a function, it should take some input and return an output where there is some obvious
//   relationship between the input and the output. To use a function, you must define it somewhere in the scope from which you wish to call it.

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

  
    document.getElementById("info").innerHTML =  greet;
   
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



class CopyStringToClipboard {
    // A class is a type of function, but instead of using the keyword function to initiate it,
    // we use the keyword class, and the properties are assigned inside a constructor() method.
     constructor(string){
       // this refers to the global object whether in strict mode or not.
       this.string = string;
     //   The constructor method is special, it is where you initialize properties, 
     //   it is called automatically when a class is initiated, and it has to have the exact name "constructor", 
     //   in fact, if you do not have a constructor method, JavaScript will add an invisible and empty constructor method.
     }
     // Adding a method to the constructor
     render(){
        // Create new element
    const el = document.createElement('textarea');
    // Set value (string to be copied)
    el.value = this.string;
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
    const speek = new Speek("CC added to Clipboard!");
    speek.render();
     }
   
   
   }