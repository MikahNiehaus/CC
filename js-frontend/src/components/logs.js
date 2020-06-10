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
const text = document.getElementById("edit-log-body").value;
const id = document.getElementById("edit-log-body").name;
const logsAdapter = new LogsAdapter;
logsAdapter.updateLog(text, id);
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
