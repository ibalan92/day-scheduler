var today = dayjs();
var remainder = parseInt(today.format("DD"));
if(remainder % 10 ===1){
    $("#currentDay").text(today.format("dddd, MMMM D")+"st");
}
else if (remainder % 10 ===2){
    $("#currentDay").text(today.format("dddd, MMMM D")+"nd");
}
else if (remainder % 10 ===3){
    $("#currentDay").text(today.format("dddd, MMMM D")+"rd");
}
else {
    $("#currentDay").text(today.format("dddd, MMMM D")+"th");
}

function currentTime() {
    var hour = dayjs().format('H');
    return hour;
  }

setInterval(currentTime, 1000);

