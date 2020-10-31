//This will check if today is a working day
//A working day has to be a day between Monday or Friday
function dayOfTheWeek () {
	var d = new Date();
	var n = d.getDay()
	return n;
}

function workingDay(dayOfTheWeek) {
  return dayOfTheWeek >= 1 && dayOfTheWeek <= 5;
}

//Refresh the functions every 5s
/*  setTimeout(worker, 5000);*/

console.log(workingDay(dayOfTheWeek()));

//This will check if it is time for lunch
//Lunch is served between 11:30 to 12:30, so we first need to check if the hour is between 11 and 12
 const lunchStart = 11 * 60 + 30;
 const lunchEnd =  12 * 60 + 30;
 const date = new Date(); 
 const now = date.getHours() * 60 + date.getMinutes();

function lunchTime(now) {
    return lunchStart <= now && now <= lunchEnd
  }
console.log(lunchTime(now));



//This will check if Kim is ready with the food
function kimIsReady () {
//Kim is always ready
    return true;
}
console.log(kimIsReady());