var today = new Date();
var hourNow = today.getHours();
var greeting;
if(hourNow > 10) {
  greeting = "Good Evening";
} else if(hour > 12){
  greeting= "Good Afternoon";
} else if (hour > 0 ) {
  greeting = "Good morning";
}else {
  greeting="welcome";
}
document.querySelector('h3').innerHTML= `${greeting}`;
