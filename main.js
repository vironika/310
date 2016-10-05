var time = [
  ' days', ' years', ' months'];
var wish = [];//holds wishes inputes
var text = "";

//function on click
document.getElementById('submit').onclick = function () {


      var myForm = document.getElementById("myForm");


     //Adds each wish item to my wish array
            for(i = 0; i<5; i++){
               wish.push(myForm.elements[i].value);

            }
    //loop the massege to repit 5 times
     for(i=0; i<wish.length; i++){
         //creats rundom number from 2 to 12
      var num = Math.floor((Math.random() * 11) + 2);
         var timeArr = time[Math.floor(Math.random() * time.length)];
           text +=  "Will get " + wish[i] +" in " + num + timeArr + "<br>";
         }
    document.getElementById('message').innerHTML =text;

location.href = "#message";
};

