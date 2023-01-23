var url = "http://api.aladhan.com/v1/timingsByCity/*0?country=IQ&city=Karbala";



function getTim(){
 fetch(url)
 .then(function(response) {
    return response.json()
})
 .then(function(data){
    let fatm=data.data.timings.Fajr
    document.getElementById("Fajr-t").innerHTML=fatm
    let dutm=data.data.timings.Dhuhr
    document.getElementById("Dhuhr-t").innerHTML=dutm
    let matm=data.data.timings.Maghrib
    document.getElementById("Maghrib-t").innerHTML=matm

    //date
    let hday=data.data.date.hijri.day
    let hmonth=data.data.date.hijri.month.ar
    let hyear=data.data.date.hijri.year
    let date= hday +" "+ hmonth +" "+ hyear
   document.getElementById("hij").innerHTML=date
   console.log(date=hday+""+hmonth+""+hyear)
 })
 .catch((error) => { 
 console.log('Erroe')
})
}
getTim()


//counterTime
 
// Update the count down every 1 second
var countDownDate = new Date("2023,1,24 5:39:00").getTime();

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

  // Display the result in the element with id="demo"
  document.getElementById("timer").innerHTML = hours +"h:"+ minutes +"m:" + seconds + "s";

  // If the count down is finished, write some text
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("timer").innerHTML = "الوقت المتبقي";
  }
}, 1000);