class Logs {
  constructor() {
    this.notes = []
    this.initBindingsAndEventListeners()
 
  }

  initBindingsAndEventListeners() {
    this.notesForm = document.getElementById('new-note-form')
    this.noteInput = document.getElementById('new-note-body')
    this.notesNode = document.getElementById('notes-container')
    this.noteShowNode = document.getElementById('note-show')
    this.body = document.querySelector('body')
  //this.notesForm.addEventListener('submit', this.handleAddNote.bind(this))
   // this.notesNode.addEventListener('click', this.handleNoteClick.bind(this))
    this.body.addEventListener('blur', this.updateNote.bind(this), true)
  }

  

  updateNote() {
    if (event.target.className.includes('note-element')) {
      const { target } = event
      target.contentEditable = false
      target.classList.remove('editable')
      const body = event.target.innerHTML
      const noteId = target.dataset.noteid
      this.adapter.updateNote(body, noteId).then(updatedNote => {
        this.notes = this.notes.map(
          n => (n.id === updatedNote.id ? new Note(updatedNote) : n)
        )
        this.render()
      })
    }
  }




  handleNoteClick() {
    if (
      event.target.dataset.action === 'delete-note' &&
      event.target.parentElement.classList.contains('note-element')
    ) {
      const noteId = event.target.parentElement.dataset.noteid
      this.adapter.deleteNote(noteId).then(resp => this.removeDeletedNote(resp))
    } else if (event.target.dataset.action === 'edit-note') {
      this.toggleEditNote()
    } else if (event.target.className === 'show-link') {
      debugger
      const noteId = event.target.parentElement.dataset.noteid
      const note = this.notes.find(note => note.id === +noteId)
      this.noteShowNode.innerHTML = note.renderShow()
    }
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
    option.text = t;
    option.id = y
    x.add(option);
    console.log(option)
//     var text;


//     text = "<ul>";
   
//       text += "<li>" + x + "</li>";
    
//     text += "</ul>";
// //this.notesNode.innerHTML = `<ul id="${y}">${x}</ul>`
// document.getElementById("myP").innerHTML = text;
 
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
  var x = document.getElementById("mySelect");
  x.remove(x.selectedIndex);
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
