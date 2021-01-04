(function() {   
  setInterval(function(){     
  function dayOfTheWeek() {
    var d = new Date();
    var n = d.getDay()
    return n;
  }

  function workingDay(dayOfTheWeek) {
    return dayOfTheWeek >= 1 && dayOfTheWeek <= 5;
  }

  document.getElementById("workingDay").innerHTML = (workingDay(dayOfTheWeek()));

  const lunchStart = 11 * 60 + 30;
  const lunchEnd = 12 * 60 + 30;
  const date = new Date();
  const now = date.getHours() * 60 + date.getMinutes();

  function lunchTime(now) {
    return lunchStart <= now && now <= lunchEnd
  }
  document.getElementById("lunchTime").innerHTML = (lunchTime(now));

  function kimIsReady() {
    return "Of course";
  }
  document.getElementById("kimIsReady").innerHTML = (kimIsReady());

  var today = new Date();
  var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();

  document.getElementById("currentTime").innerHTML = time;

 function dayOfTheWeek() {
    switch (new Date().getDay()) {
      case 0:
        currentDay = "Sunday: No food! Eat at home!";
        break;
      case 1:
        currentDay = "Monday: Meatballs in curry with rice.";
        break;
      case 2:
        currentDay = "Tuesday: Coq au vin with mashed potatoes.";
        break;
      case 3:
        currentDay = "Wednesday: Thai beef salad with glass noodle salad.";
        break;
      case 4:
        currentDay = "Thursday: Burning love with mash and bacon.";
        break;
      case 5:
        currentDay = "Friday: Mexican day with spinach tortillas and whatever else belongs to.";
        break;
      case 6:
        currentDay = "Saturday: No food! Eat at home!";
      }
    }
      document.getElementById("Day").innerHTML = currentDay;

}, 1000);
})();
