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
// rquest to server without reloading


//runs when DOM is loaded
document.addEventListener("DOMContentLoaded", function() {
   console.log("Starting Up!")
   //A Brand New instance of Object Gets Created called subjects
   const subjects = new SubjectsAdapter();
   //calls object method getSubjects()
   subjects.getSubjects();
   
   greet();//calls object method
  
   }); 


function greet(){
  //creats A Brand New instance of Object Gets Created called myDate
   const myDate = new Date();
   //creates Variable defined with const (It defines a constant reference to a value.)
   const hrs = myDate.getHours();
   //creates Variable defined with let (let variables can be reassigned)
   let greet;
   
   // (else if) to specify a new condition to test, if the first condition is false
   // (if) to specify a block of code to be executed, if a specified condition is true
   if (hrs < 12)//now i am finding the responce time of day with if and else if statments
       greet = 'Good Morning';
   else if (hrs >= 12 && hrs <= 17)
       greet = 'Good Afternoon';
   else if (hrs >= 17 && hrs <= 24)
       greet = 'Good Evening';
       //now i am changing the info innerHTML (its text)
       //The Document method getElementById() returns an Element object representing the element whose id property matches the specified string.
         document.getElementById("info").innerHTML =
         greet;
  
}

  
