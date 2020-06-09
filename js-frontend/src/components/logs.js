class Logs {
  constructor() {
  
  }



 removeOptions(selectElement) {
    var i, L = selectElement.options.length - 1;
    for(i = L; i >= 0; i--) {
       selectElement.remove(i);

    }
 }

 render(t,y) { 
  var x = document.getElementById("mySelect");
  var option = document.createElement("option");
 // const logsAdapter = new LogsAdapter;
  option.text = t;
  option.value =  y
  x.add(option);
  console.log(y)

}

}

function EditFunction(button) {
  var x = document.getElementById("mySelect");
  if (x.contentEditable == "true") {
    x.contentEditable = "false";
    button.innerHTML = "Enable editable!";
  } else {
    x.contentEditable = "true";
    button.innerHTML = "Disable editable!";
  }
}

function DeleteFunction() {
  logsAdapter = new LogsAdapter
  var x = document.getElementById("mySelect");
  var result = x.options[x.selectedIndex].value;
//   var as = document.form1.ddlViewBy.value;
// var e = document.getElementById("ddlViewBy");
// var strUser = e.options[e.selectedIndex].value;
console.log(result)

logsAdapter.deleteLog(result)
  x.remove(result);
 // document.getElementById("log_number").innerHTML = logsAdapter.getLogs();
  location.reload();
}

// class qLogs{
//     constructor(){
//         this.logs = []
//         this.adapter = new LogsAdapter()
//         this.initiBindingsAndEventListeners()
//         this.fetchAndLoadLogs()
//     }

//     initiBindingsAndEventListeners(){
//       this.logsContainer = document.getElementById('logs-container')
//       this.body = document.querySelector('body')
//       this.time = document.querySelector('created_at')
   
//       this.newLogBody = document.getElementById('new-log-body')
//       this.logForm = document.getElementById('new-log-form')
//       this.logForm.addEventListener('submit', this.createLog.bind(this))
//       this.logsContainer.addEventListener('dblclick', this.handleLogClick.bind(this))
//       this.body.addEventListener('blur', this.updateLog.bind(this), true)
//     }
//     createLog(e){
//       document.getElementById("number").innerHTML = Log.length; 
//       console.log(Log.length)
//       e.preventDefault()
//       const value = this.newLogBody.value

//       this.adapter.createLog(value).then(log => {
//         this.logs.push(new Log(log, value))
//         this.render()
//         //this.newLogBody.value = Log.body
//         this.newLogBody.value = ''
//       })
//     }
//     handleLogClick(e){
//       const li = e.target
//       li.contentEditable= true
//       li.focus()
//       li.classList.add('editable')
//     }
//     updateLog(e){
//       console.log('updating log')
//       const li = e.target
//       li.contentEditable = false
//       li.classList.remove('editable')
//       const newValue = li.innerHTML
//       this.adapter.updateLog()
//     }
//     fetchAndLoadLogs(){
//         this.adapter
//         .getLogs()
//         .then(logs => {
//         logs.sort((a,b) => a.id -b.id).forEach(log => this.logs.push(new Log(log,value)))
    
//         })
//         .then(() => {
//             this.render()
//         })
//     }
//     render(){
//       this.logsContainer.innerHTML = this.logs.map(log => log.renderLi()).join('')
     
//     }
    
// }
