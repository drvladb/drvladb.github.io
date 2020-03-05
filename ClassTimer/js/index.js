//End of day timer

var today = new Date();
var dd = String(today.getDate()).padStart(2, '0');
var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
var yyyy = today.getFullYear();
today = mm + '/' + dd + '/' + yyyy;

noschool = ["3/13/2020", "4/10/2020", "4/11/2020", "4/12/2020", "4/13/2020","4/14/2020", "4/15/2020", "4/16/2020",  "4/17/2020", "5/25/2020", "5/25/2020"]
delayedstart = ["5/25/2020"]

if (noschool.includes(today)){
 console.log("There is no school today")
}

if (delayedstart.includes(today)){
 console.log("School today starts 2 hours late")
}

var todaydt = new Date();
if(todatdt.getDay() == 6 || todatdt.getDay() == 0){
  console.log("Today is weekend")
}

var countDownDate = new Date(today + " 14:30:00").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

  // Get today's date and time
  var now = new Date().getTime();

  // Find the distance between now and the count down date
  var distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Output the result in an element with id="demo"
  document.getElementById("eotimer").innerHTML = days + "d " + hours + "h "
  + minutes + "m " + seconds + "s ";

  // If the count down is over, write some text
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("eotimer").innerHTML = "School has ended!";
  }
}, 1000);
