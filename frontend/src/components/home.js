
function openCCFunction(){
  var x = document.getElementById("container").selectedIndex;
  var y = document.getElementById("container").options;
  document.getElementById("cc-body").value = "";
  let id = y[x].id;
  const notes = new NotesAdapter();
  notes.getNotes(id);
}

 function addCCFunction(){
  //gets all the text i need
//const subject_body = document.getElementById("subject-body").value;
let cc_body = document.getElementById("cc-body").value;
//now I'm going to edit the body
cc_body = editBody(cc_body);
//now im going to copy the text to clipboard
copyStringToClipboard(cc_body);
//add it to text


var x = document.getElementById("container").selectedIndex;
var y = document.getElementById("container").options;

//const y = document.getElementById("edit-subject-body").value;
const notes = new NotesAdapter();
notes.createNote(cc_body,y[x].id);

say("CC added!")
}



const subjectButton = document.querySelector('#subjectButton');
const btnRemove = document.querySelector('#btnRemove');
const sb = document.querySelector('#list');
const subject_body = document.querySelector('#subject-body');

subjectButton.onclick = (e) => {
    e.preventDefault();

    // validate the option
    if (subject_body.value == '') {
        alert('Please enter the subject name.');
        return;
    }

     const subjects = new SubjectsAdapter();
     subjects.createSubject(document.getElementById("subject-body").value);
     document.getElementById("subject-body").value="";
    // location.reload();
    say("Subject Created!")
};

// remove selected option
btnRemove.onclick = (e) => {
    e.preventDefault();

    const x = document.getElementById("container").value;
    const subjects = new SubjectsAdapter();
    subjects.deleteSubject(x);
  //  location.reload();
  say("Subject Deleted!")
};






function editBody(body){

// body = body.replace(/[0-9]/g, '');
// body = body.split(' ::, --> ::, ').join('');
// body = body.replace(/[&\/\\#,+()$~%":*?<>{}]/g, '');
// body = body.replace(" .",".");
//body = body.replace('\n', ' ').replace('\r', ' ');
 //body = body.split('\n').join(' ');
// body = body.split('\r').join(' ');

//body = body.split('  ').join('');
body = body.split('.').join('.\n');
// let output = "";
// let character = "";
// let spaceNumber = 0;
// for (let i = 0; i < body.length; i++) {
//   character = body.charAt(i).toString();
// if (character == "." || character == "!" || character == "?"){
//  spaceNumber += 1;
//  if (spaceNumber == 4){
//    output += character;
//    output += "\n";
//    spaceNumber = 0;
   
// }else{
//   output += character
// }

// }
// else{
// output += character;
// }
// }
return body;
}

  function copyStringToClipboard(str) {
    // Create new element
    var el = document.createElement('textarea');
    // Set value (string to be copied)
    el.value = str;
    // Set non-editable to avoid focus and move outside of view
    el.setAttribute('readonly', '');
    el.style = {position: 'absolute', left: '-9999px'};
    document.body.appendChild(el);
    // Select text inside element
    el.select();
    // Copy text to clipboard
    document.execCommand('copy');
    // Remove temporary element
    document.body.removeChild(el);

say("CC added to Clipboard!")

window.open('https://onedrive.live.com/edit.aspx?action=editnew&resid=933325526B7A0FFD!783573&ithint=subject%2cdocx&wdNewAndOpenCt=1595442306682&wdPreviousSession=fdb84090-0c2a-4306-a623-cef288c741fd&wdOrigin=OFFICECOM-WEB.START.NEW', '_blank');
    

 }
 

 function EditSubjectFunction(){
  const x = document.getElementById("container").value;
  const y = document.getElementById("edit-subject-body").value;
  const subjects = new SubjectsAdapter();
  subjects.updateSubject(y,x);
  document.getElementById("edit-subject-body").value = "";
  say("Subject Edited!")
 }