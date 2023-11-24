
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
        $("#textarea1").prop( "disabled", true );
        $("#textarea2").attr("class", "present");
        $("#textarea3,#textarea4,#textarea5,#textarea6,#textarea7,#textarea8,#textarea9").attr("class","future");
    }
    else if(hour<12){
        $("#textarea1,#textarea2").attr("class", "past");
        $("#textarea1,#textarea2").prop( "disabled", true );
        $("#textarea3").attr("class", "present");
        $("#textarea4,#textarea5,#textarea6,#textarea7,#textarea8,#textarea9").attr("class","future");
    }
    else if(hour<13){
        $("#textarea1,#textarea2,#textarea3").attr("class", "past");
        $("#textarea1,#textarea2,#textarea3").prop( "disabled", true );
        $("#textarea4").attr("class", "present");
        $("#textarea5,#textarea6,#textarea7,#textarea8,#textarea9").attr("class","future");
    }
    else if(hour<14){
        $("#textarea1,#textarea2,#textarea3,#textarea4").attr("class", "past");
        $("#textarea1,#textarea2,#textarea3,#textarea4").prop( "disabled", true );
        $("#textarea5").attr("class", "present");
        $("#textarea6,#textarea7,#textarea8,#textarea9").attr("class","future");
    }
    else if(hour<15){
        $("#textarea1,#textarea2,#textarea3,#textarea4,#textarea5").attr("class", "past");
        $("#textarea1,#textarea2,#textarea3,#textarea4,#textarea5").prop( "disabled", true );
        $("#textarea6").attr("class", "present");
        $("#textarea7,#textarea8,#textarea9").attr("class","future");
    }
    else if(hour<16){
        $("#textarea1,#textarea2,#textarea3,#textarea4,#textarea5,#textarea6").attr("class", "past");
        $("#textarea1,#textarea2,#textarea3,#textarea4,#textarea5,#textarea6").prop( "disabled", true );
        $("#textarea7").attr("class", "present");
        $("#textarea8,#textarea9").attr("class","future");
    }
    else if(hour<17){
        $("#textarea1,#textarea2,#textarea3,#textarea4,#textarea5,#textarea6,#textarea7").attr("class", "past");
        $("#textarea1,#textarea2,#textarea3,#textarea4,#textarea5,#textarea6,#textarea7").prop( "disabled", true );
        $("#textarea8").attr("class", "present");
        $("#textarea9").attr("class","future");
    }
    else if(hour<18){
        $("#textarea1,#textarea2,#textarea3,#textarea4,#textarea5,#textarea6,#textarea7,#textarea8").attr("class", "past");
        $("#textarea1,#textarea2,#textarea3,#textarea4,#textarea5,#textarea6,#textarea7,#textarea8").prop( "disabled", true );
        $("#textarea9").attr("class","present");
    }
  }

setInterval(currentTime, 1000);

var task1 = window.localStorage.getItem("task1")
if (task1 !==""){
    $('#textarea1').val(task1);
}

$('#button1').on('click', function() {
    var textareaEl = $(this).siblings('.col').find('textarea');
    window.localStorage.setItem("task1", textareaEl.val());
    textareaEl.val(window.localStorage.getItem("task1"));
});

var task2 = window.localStorage.getItem("task2")
if (task2 !==""){
    $('#textarea2').val(task2);
}

$('#button2').on('click', function() {
    var textareaEl = $(this).siblings('.col').find('textarea');
    window.localStorage.setItem("task2", textareaEl.val());
    textareaEl.val(window.localStorage.getItem("task2"));
});

var task3 = window.localStorage.getItem("task3")
if (task3 !==""){
    $('#textarea3').val(task3);
}

$('#button3').on('click', function() {
    var textareaEl = $(this).siblings('.col').find('textarea');
    window.localStorage.setItem("task3", textareaEl.val());
    textareaEl.val(window.localStorage.getItem("task3"));
});

var task4 = window.localStorage.getItem("task4")
if (task4 !==""){
    $('#textarea4').val(task4);
}

$('#button4').on('click', function() {
    var textareaEl = $(this).siblings('.col').find('textarea');
    window.localStorage.setItem("task4", textareaEl.val());
    textareaEl.val(window.localStorage.getItem("task4"));
});

var task5 = window.localStorage.getItem("task5")
if (task5 !==""){
    $('#textarea5').val(task5);
}

$('#button5').on('click', function() {
    var textareaEl = $(this).siblings('.col').find('textarea');
    window.localStorage.setItem("task5", textareaEl.val());
    textareaEl.val(window.localStorage.getItem("task5"));
});

var task6 = window.localStorage.getItem("task6")
if (task6 !==""){
    $('#textarea6').val(task6);
}

$('#button6').on('click', function() {
    var textareaEl = $(this).siblings('.col').find('textarea');
    window.localStorage.setItem("task6", textareaEl.val());
    textareaEl.val(window.localStorage.getItem("task6"));
});

var task7 = window.localStorage.getItem("task7")
if (task7 !==""){
    $('#textarea7').val(task7);
}
$('#button7').on('click', function() {
    var textareaEl = $(this).siblings('.col').find('textarea');
    window.localStorage.setItem("task7", textareaEl.val());
    textareaEl.val(window.localStorage.getItem("task7"));
});

var task8 = window.localStorage.getItem("task8")
if (task8 !==""){
    $('#textarea8').val(task8);
}
$('#button8').on('click', function() {
    var textareaEl = $(this).siblings('.col').find('textarea');
    window.localStorage.setItem("task8", textareaEl.val());
    textareaEl.val(window.localStorage.getItem("task8"));
});

var task9 = window.localStorage.getItem("task9")
if (task9 !==""){
    $('#textarea9').val(task9);
}

$('#button9').on('click', function() {
    var textareaEl = $(this).siblings('.col').find('textarea');
    window.localStorage.setItem("task9", textareaEl.val());
    textareaEl.val(window.localStorage.getItem("task9"));
});

