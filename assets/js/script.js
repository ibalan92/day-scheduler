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
    var hour = parseInt(dayjs().format('H'));
    if (hour>17){
        $("textarea").attr("class", "past");
    }
    else if(hour<9){
        $("textarea").attr("class", "future");
    }
    else if(hour<10){
        $("#textarea1").attr("class", "present");
        $("#textarea2,#textarea3,#textarea4,#textarea5,#textarea6,#textarea7,#textarea8,#textarea9").attr("class","future");
    }
    else if(hour<11){
        $("#textarea1").attr("class", "past");
        $("#textarea2").attr("class", "present");
        $("#textarea3,#textarea4,#textarea5,#textarea6,#textarea7,#textarea8,#textarea9").attr("class","future");
    }
    else if(hour<12){
        $("#textarea1,#textarea2").attr("class", "past");
        $("#textarea3").attr("class", "present");
        $("#textarea4,#textarea5,#textarea6,#textarea7,#textarea8,#textarea9").attr("class","future");
    }
    else if(hour<13){
        $("#textarea1,#textarea2,#textarea3").attr("class", "past");
        $("#textarea4").attr("class", "present");
        $("#textarea5,#textarea6,#textarea7,#textarea8,#textarea9").attr("class","future");
    }
    else if(hour<14){
        $("#textarea1,#textarea2,#textarea3,#textarea4").attr("class", "past");
        $("#textarea5").attr("class", "present");
        $("#textarea6,#textarea7,#textarea8,#textarea9").attr("class","future");
    }
    else if(hour<15){
        $("#textarea1,#textarea2,#textarea3,#textarea4,#textarea5").attr("class", "past");
        $("#textarea6").attr("class", "present");
        $("#textarea7,#textarea8,#textarea9").attr("class","future");
    }
    else if(hour<16){
        $("#textarea1,#textarea2,#textarea3,#textarea4,#textarea5,#textarea6").attr("class", "past");
        $("#textarea7").attr("class", "present");
        $("#textarea8,#textarea9").attr("class","future");
    }
    else if(hour<17){
        $("#textarea1,#textarea2,#textarea3,#textarea4,#textarea5,#textarea6,#textarea7").attr("class", "past");
        $("#textarea8").attr("class", "present");
        $("#textarea9").attr("class","future");
    }
    else if(hour<18){
        $("#textarea1,#textarea2,#textarea3,#textarea4,#textarea5,#textarea6,#textarea7,#textarea8").attr("class", "past");
        $("#textarea9").attr("class","present");
    }
  }

setInterval(currentTime, 1000);

