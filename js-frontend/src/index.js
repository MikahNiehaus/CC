//const app = new App()
function loadFunction(){
console.log("Starting Up")
const load = new LogsAdapter();
//  load.createLog("input");
load.getLogs();
}
function myFunction() {
    const input = document.getElementById("new-log-title").value + "\n\n" + document.getElementById("new-log-body").value + "\nTime stamp " + Date.now()
    const log = new LogsAdapter();
  log.createLog(input);
  console.log(log.getLogs())
  location.reload();


  }
  
