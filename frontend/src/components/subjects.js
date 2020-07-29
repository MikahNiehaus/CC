
document.addEventListener("DOMContentLoaded", function() {
   console.log("Starting Up!")
   const subjects = new SubjectsAdapter();
   subjects.getSubjects();
  // const subjectsAdapter = new SubjectsAdapter()
 
  // //  load.createSubject("input");
  // subjectsAdapter.getSubjects();
greet();
  
   }); 

function say(text){
   const xhttp = new XMLHttpRequest();
   xhttp.onreadystatechange = function() {
    
       document.getElementById("info").innerHTML =
       text;
     
   };
   xhttp.open("GET", "ajax_info.txt", true);
   xhttp.send();
   setTimeout(function(){
greet();
   }, 3000);
}

function greet(){

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
     xhttp.onreadystatechange = function() {
      
         document.getElementById("info").innerHTML =
         greet;
       
     };
     xhttp.open("GET", "ajax_info.txt", true);
     xhttp.send();
}

