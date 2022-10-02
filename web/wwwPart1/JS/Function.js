
/*====================================Responsive Navigation====================================*/
function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}


let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  slides[slideIndex-1].style.display = "block";
  setTimeout(showSlides, 5000); // Change image every 5 seconds
}



/*====================================Submit Button for Contact/Booking-form=====================================*/
const form = document.getElementById('containerForm', 'form');

form.addEventListener('submit-btn', function handleSubmit(event) {
  event.preventDefault();

  // 👇️ Send data to server here

  // 👇️ Reset form here
  form.reset();
});


/*====================================BookingCalendar=====================================*/

var currentDateTime = new Date();
var year = currentDateTime.getFullYear();
var month = (currentDateTime.getMonth() + 1);
var date = (currentDateTime.getDate() + 1);

if(date < 10) {
  date = '0' + date;
}
if(month < 10) {
  month = '0' + month;
}

var dateTomorrow = year + "-" + month + "-" + date;
var checkinElem = document.querySelector("#checkin-date");
/*var checkoutElem = document.querySelector("#checkout-date");*/

checkinElem.setAttribute("min", dateTomorrow);

checkinElem.onchange = function () {
    checkoutElem.setAttribute("min", this.value);
}

// const form = document.getElementById('booking-form');

{
    if(session_status()=== PHP_SESSION_NONE) session_start();
    $loggedIn = false;

    //determine whether the user is logged in by looking at values set
    // in $_SESSION by the login script. This is just an example
    if(isset($_SESSION['user']) && $_SESSION['expires'] > time()) 
        $loggedIn = true;

    //set JS header (otherwise the browser will expect an HTML file)
    header('Content-Type: application/javascript');

    //now send the right file to the browser
    if($loggedIn){
        //instruct the browser and proxies to never cache this file. Probably
        //better just set short caching (1-2hrs) to reduce server load
        header("Cache-Control: no-cache, no-store, must-revalidate");
        header("Expires: 0");

        readfile('/path/to/private.js');
    }
    else{
        //allow caching and reusing for up to 7 days
        header("Cache-Control: max-age=" . 60*60*24*7); //max age allowed: 7 days
        header("Expires: ".gmdate('D, d M Y H:i:s', time() + 60*60*24*7).' GMT');

        readfile('/path/to/public.js');
    }