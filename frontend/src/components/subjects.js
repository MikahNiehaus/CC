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
//#AJAX?
// AJAX = Asynchronous JavaScript And XML.
// AJAX is not a programming language.


document.addEventListener("DOMContentLoaded", function() {
   console.log("Starting Up!")
   const subjects = new SubjectsAdapter();
   subjects.getSubjects();
greet();
  
   }); 


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
         document.getElementById("info").innerHTML =
         greet;
  
}

  
