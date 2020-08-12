

//runs when DOM is loaded
document.addEventListener("DOMContentLoaded", function() {
   console.log("Starting Up!")
   //A Brand New instance of Object Gets Created called subjects
   const subjects = new SubjectsAda();
   //calls object method getSubjects()
   subjects.getSubjects();
   
   greet();//calls object method
  
   }); 


function greet(){
  //creats A Brand New instance of Object Gets Created called myDate
   const myDate = new Date();
   
   const hrs = myDate.getHours();
   //creates Variable defined with let (let variables can be reassigned)
   let greet;
   
 
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

  
