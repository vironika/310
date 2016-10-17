var time = [
  ' days', ' years', ' months'];
var wish = [];//holds wishes inputes
var text = "";


alert("Make a wish!");

alert("Did you make a wish!");
alert("Make a wish!");
alert("Make a wish!");

document.getElementById("myForm").onmouseover = function() {mouseOver()};
document.getElementById("myForm").onmouseout = function() {mouseOut()};

function mouseOver() {
    document.getElementById("myForm").style.visibility = "hidden";
}



function mouseOut() {
    
    document.getElementById("myForm").style.visibility = "visible";
}

setTimeout(mouseOut, 1000);


//function on click
document.getElementById('submit').onclick = function () {


      var myForm = document.getElementById("myForm");


     //Adds each wish item to my wish array
            for(i = 0; i<5; i++){
               wish.push(myForm.elements[i].value);

            }
    //loop the massege to repit 5 times
     for(i=0; i<wish.length; i++){
         alert("You really dont want anything???? HA ha ha.... ");
         //creats rundom number from 2 to 12
     
       
          
         }
    
   text += "You really dont want anything???? HA ha ha.... ";
    document.getElementById('message').innerHTML =text;

location.href = "#message";
};

