// What is AJAX?
// AJAX = Asynchronous JavaScript And XML.

// AJAX is not a programming language.

// AJAX just uses a combination of:

// A browser built-in XMLHttpRequest object (to request data from a web server)
// JavaScript and HTML DOM (to display or use the data)
// AJAX is a misleading name. AJAX applications might use XML to transport data, but it is equally common to transport data as plain text or JSON text.

document.addEventListener("DOMContentLoaded", function() {
   console.log("Starting Up!")
   const subjects = new SubjectsAdapter();
   subjects.getSubjects();
greet();
  
   }); 

function say(text){
    // A browser built-in XMLHttpRequest object (to request data from a web server)
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
       // A browser built-in XMLHttpRequest object (to request data from a web server)
       const xhttp = new XMLHttpRequest();
     xhttp.onreadystatechange = function() {
      
         document.getElementById("info").innerHTML =
         greet;
       
     };
     xhttp.open("GET", "ajax_info.txt", true);
     xhttp.send();
}

