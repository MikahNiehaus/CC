// function name(parameter1, parameter2, parameter3) {
//   // what the function does
//  } 


//runs on load
function loadFunction(){
console.log("Starting Up")
//A Brand New const object Gets Created then runs it
//const — Can not be reassigned and not accessible before they appear within the code.
const load = new LogsAdapter();
load.getLogs();
}

function myFunction() {
  //const — Can not be reassigned and not accessible before they appear within the code.
  ////A Brand New const object Gets Created
  const now = new Date();
 // creats an unchanging const with the body + hour
  const input = document.getElementById("new-log-body").value + "\n(Hour " + now.getHours()+")";
  //A Brand New const object Gets Created then runs it
  const log = new LogsAdapter();
  log.createLog(input);
  console.log(log.getLogs())
  //reloads page
  location.reload();
  }
  function showLogToEdit(){
    //The var statement declares a function-scoped or globally-scoped variable, optionally initializing it to a value.
//var — The most common variable. Can be reassigned but only accessed
//within a function. Variables defined with var move to the top when
//code is executed
    var e = document.getElementById("mySelect");
    var body = e.options[e.selectedIndex].label;
    var id = e.options[e.selectedIndex].value;
    document.getElementById("edit-log-body").value = body;
    document.getElementById("edit-log-body").name = id;
    console.log("[selected item] body: " + body + " id: " + document.getElementById("edit-log-body").name);
  }
