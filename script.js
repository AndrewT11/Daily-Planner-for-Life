$(document).ready(function () {
    //timer
    var date = moment();
    $("#currentDay").text(date.format("MMM Do YYYY, h:mm:ss a"));


    //present time
    var now = parseInt(moment().format("HH a"))-12;
    console.log(now)

    //hours on planner
    var hours = [
        { hour: "9a" }, 
        { hour: "10a" },
        { hour: "11a" },
        { hour: "12p" },
        { hour: "1p" },
        { hour: "2p" },
        { hour: "3p" },
        { hour: "4p" },
        { hour: "5p" }
    ]

    //row that all elements will be appended to
    $('<div class ="col-12 row"></div>').appendTo('.container')

    //for loop to begin populating daily planner
    for(var i= 0; i < hours.length; i++) {
        $(`<div class="col-2 time-block"></div>`).text(hours[i].hour).appendTo(".row"); //row to append all time-blocks
        $(`<textarea class="col-8" id="input-${i}"></textarea>`).attr("placeholder", "Any Plans?").appendTo(".row"); //input-0, input-1, input-2
        $(`<button class="col-2 saveBtn" id="saveBtn-${i}"></button>`).text("save").appendTo(".row"); //saveBtn-0, saveBtn-1, saveBtn-2
        $('.time-block').css({"background": "lightgrey", "font-weight": "900"}) //styling for first div hour
    }

     //local storage that is not working. Will have to write out manually for each. Cannot figure out how to for loop with input index.
     var storageInput0 = document.querySelector('#input-0');  
     var button0 = document.querySelector('#saveBtn-0'); 
     var storedInput0 = localStorage.getItem('textInput-0'); 
     

     console.log("and here?")
     storageInput0.textContent = storedInput0;

     var saveToLocalStorage = function () {
         localStorage.setItem('textInput-0', storedInput0);
         console.log("saved?")
     }
     button0.addEventListener('click', saveToLocalStorage);


})

/////////////////////////////////////////////////////////////////////////
//Left to do:
// - local storage
// - color change past, present, future

//////////////////////////////////////////////////////////////////////////

// ## User Story

// ```md
// AS AN employee with a busy schedule
// I WANT to add important events to a daily planner
// SO THAT I can manage my time effectively
// ```

// ## Acceptance Criteria

// ```md
// GIVEN I am using a daily planner to create a schedule
// WHEN I open the planner
// THEN the current day is displayed at the top of the calendar
// WHEN I scroll down
// THEN I am presented with timeblocks for standard business hours
// WHEN I view the timeblocks for that day
// THEN each timeblock is color coded to indicate whether it is in the past, present, or future
// WHEN I click into a timeblock
// THEN I can enter an event
// WHEN I click the save button for that timeblock
// THEN the text for that event is saved in local storage
// WHEN I refresh the page
// THEN the saved events persist