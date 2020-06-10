//const app = new App()
function loadFunction(){
console.log("Starting Up")
const load = new LogsAdapter();
//  load.createLog("input");
load.getLogs();
}
function myFunction() {
  const now = new Date();
    const input = document.getElementById("new-log-body").value + "\n(Hour " + now.getHours()+")";
    const log = new LogsAdapter();
  log.createLog(input);
  console.log(log.getLogs())
  location.reload();


  }
  function showLogToEdit(){
    var e = document.getElementById("mySelect");
    var body = e.options[e.selectedIndex].label;
    var id = e.options[e.selectedIndex].value;
    document.getElementById("edit-log-body").value = body;
    document.getElementById("edit-log-body").name = id;
console.log("[selected item] body: " + body + " id: " + document.getElementById("edit-log-body").name);

  }
