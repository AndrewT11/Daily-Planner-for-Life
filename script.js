$(document).ready(function () {
//timer
var date = moment();
$("#currentDay").text(date.format("MMM Do YYYY, h:mm:ss a"));


//present time
var now = parseInt(moment().format("HH"));
console.log(now)

var hours = [
    "9a",
    "10a",
    "11a",
    "12p",
    "1p",
    "2p",
    "3p",
    "4p",
    "5p"
]

for(var i= 0; i < hours.length; i++) {
    $(`<div class="col-2 time-block"></div>`).text(hours[i]).appendTo(".container");
    $(`<textarea class="col-9" id="input-${i}"></textarea>`).attr("placeholder", "Any Plans?").appendTo(".container");
    $(`<button class="col-1 btn-success saveBtn-${i}" id="saveBtn-${i}"></button>`).text("save").appendTo(".container");

}

})
var storageInput = document.querySelector('#input-0');
var button = document.querySelector('#saveBtn-0');
var storedInput = localStorage.getItem('textInput-0');


    storageInput.textContent = storedInput;

var saveToLocalStorage = function () {
    localStorage.setItem('textInput-0', storageInput.textContent);
    console.log("saved?")
}

button.addEventListener('click', saveToLocalStorage);

//////////////////////////////////////////////////////////////////////////



// var $container = $('.container');
// var $divEl1 = $('<div>');
// var $textareaEl = $('<textarea>');
// var $saveButtonEl = $('<button>');
// var num = 9;

// var start = function () {
//     for(var i= 0; i < num; i++) {
//         $container.append($divEl1);
//         $divEl1.addClass("col-2 hour");
//         $divEl1.css("border", "black");
//         $divEl1.text("a1")
//         $container.append($textareaEl);
//         $textareaEl.addClass("col-9 inputBox");
//         $textareaEl.css("border", "black");
//         $textareaEl.text("a2")
//         $container.append($saveButtonEl);
//         $saveButtonEl.addClass("col-1 button");
//         $saveButtonEl.css("border", "black");
//         $saveButtonEl.text("a3")
//     }
//     console.log("hi");
// };

// start()
 
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