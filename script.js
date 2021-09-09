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
     //9 am
     var storageInput0 = document.querySelector('#input-0');  //select text area id
     var button0 = document.querySelector('#saveBtn-0');  //select button id
     var storedInput0 = localStorage.getItem('textInput-0'); //select key value to get from localStorage
     
     storageInput0.textContent = storedInput0;

     var saveToLocalStorage = function () {
         localStorage.setItem('textInput-0', storedInput0);
         console.log("saved?")
     }
     button0.addEventListener('click', saveToLocalStorage);

     //10am
     var storageInput1 = document.querySelector('#input-1');  
     var button1 = document.querySelector('#saveBtn-1'); 
     var storedInput1 = localStorage.getItem('textInput-1'); 
     
     storageInput1.textContent = storedInput1;

     var saveToLocalStorage = function () {
         localStorage.setItem('textInput-1', storedInput1);
         console.log("saved?")
     }
     button1.addEventListener('click', saveToLocalStorage);

    //11am
     var storageInput2 = document.querySelector('#input-2');  
     var button2 = document.querySelector('#saveBtn-2'); 
     var storedInput2 = localStorage.getItem('textInput-2'); 
     
     storageInput2.textContent = storedInput2;

     var saveToLocalStorage = function () {
         localStorage.setItem('textInput-2', storedInput2);
         console.log("saved?")
     }
     button2.addEventListener('click', saveToLocalStorage);

    // 12p
     var storageInput3 = document.querySelector('#input-3');  
     var button3 = document.querySelector('#saveBtn-3'); 
     var storedInput3 = localStorage.getItem('textInput-3'); 
     
     storageInput3.textContent = storedInput0;

     var saveToLocalStorage = function () {
         localStorage.setItem('textInput-3', storedInput3);
         console.log("saved?")
     }
     button3.addEventListener('click', saveToLocalStorage);

     //1pm
     var storageInput4 = document.querySelector('#input-4');  
     var button4 = document.querySelector('#saveBtn-4'); 
     var storedInput4 = localStorage.getItem('textInput-4'); 
     
     storageInput4.textContent = storedInput4;

     var saveToLocalStorage = function () {
         localStorage.setItem('textInput-4', storedInput4);
         console.log("saved?")
     }
     button4.addEventListener('click', saveToLocalStorage);

     //2pm
     var storageInput5 = document.querySelector('#input-5');  
     var button5 = document.querySelector('#saveBtn-5'); 
     var storedInput5 = localStorage.getItem('textInput-5'); 
     
     storageInput5.textContent = storedInput5;

     var saveToLocalStorage = function () {
         localStorage.setItem('textInput-5', storedInput5);
         console.log("saved?")
     }
     button5.addEventListener('click', saveToLocalStorage);

     //3pm
     var storageInput6 = document.querySelector('#input-6');  
     var button6 = document.querySelector('#saveBtn-6'); 
     var storedInput6 = localStorage.getItem('textInput-6'); 
     
     storageInput6.textContent = storedInput6;

     var saveToLocalStorage = function () {
         localStorage.setItem('textInput-6', storedInput6);
         console.log("saved?")
     }
     button6.addEventListener('click', saveToLocalStorage);

     //4pm
     var storageInput7 = document.querySelector('#input-7');  
     var button7 = document.querySelector('#saveBtn-7'); 
     var storedInput7 = localStorage.getItem('textInput-7'); 
     
     storageInput7.textContent = storedInput7;

     var saveToLocalStorage = function () {
         localStorage.setItem('textInput-7', storedInput7);
         console.log("saved?")
     }
     button7.addEventListener('click', saveToLocalStorage);

     //5pm
     var storageInput8 = document.querySelector('#input-8');  
     var button8 = document.querySelector('#saveBtn-8'); 
     var storedInput8 = localStorage.getItem('textInput-8'); 
     
     storageInput8.textContent = storedInput8;

     var saveToLocalStorage = function () {
         localStorage.setItem('textInput-8', storedInput8);
         console.log("saved?")
     }
     button8.addEventListener('click', saveToLocalStorage);


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