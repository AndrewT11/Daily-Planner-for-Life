$(document).ready(function () {
    //timer
    var date = moment();
    $("#currentDay").text(date.format("MMM Do YYYY, h:mm:ss a"));
    var currentTime = parseInt(moment().format("HH a"));
    console.log(currentTime) 

    //hours on planner
    var hours = [
        { hour: "9:00 am", compare: 9 }, 
        { hour: "10:00 am", compare: 10},
        { hour: "11:00 am", compare: 11},
        { hour: "12:00 pm", compare: 12},
        { hour: "1:00 pm", compare: 13},
        { hour: "2:00 pm", compare: 14},
        { hour: "3:00 pm", compare: 15},
        { hour: "4:00 pm", compare: 16},
        { hour: "5:00 pm", compare: 17}
    ]

    //row that all elements will be appended to
    $('<div class ="col-12 row"></div>').appendTo('.container')

    //for loop to begin populating daily planner
    for(var i= 0; i < hours.length; i++) {
        $(`<div class="col-2 time-block"></div>`).text(hours[i].hour).appendTo(".row"); //row to append all time-blocks. 
        // Why can I not use $('.row').append('<div>)
        $(`<textarea class="col-8" id="input-${i}"></textarea>`).attr("placeholder", "Any Plans?").appendTo(".row"); //input-0, input-1, input-2
        $(`<button class="col-2 saveBtn" id="saveBtn-${i}"></button>`).text("save").appendTo(".row"); //saveBtn-0, saveBtn-1, saveBtn-2
        $('.time-block').css({"background": "lightgrey", "font-weight": "900"}) //styling for first div hour
    }

     //localStorage for input. Figure out problem with JQuery DOM element selection

     //9 am
     var storageInput0 = document.getElementById('input-0');  //select text area id
     var button0 = document.getElementById('saveBtn-0');  //select button id
     storageInput0.value = localStorage.getItem('textInput-0'); //set value in input box
    
     var saveToLocalStorage0 = function () {
         localStorage.setItem('textInput-0', storageInput0.value);
         console.log("saved?")
     }
     button0.addEventListener('click', saveToLocalStorage0);

     //10am
     var storageInput1 = document.getElementById('input-1');  
     var button1 = document.getElementById('saveBtn-1'); 
     storageInput1.value = localStorage.getItem('textInput-1'); 
     
     var saveToLocalStorage1 = function () {
         localStorage.setItem('textInput-1', storageInput1.value);
         console.log("saved?")
     }
     button1.addEventListener('click', saveToLocalStorage1);

    //11am
     var storageInput2 = document.getElementById('input-2');  
     var button2 = document.getElementById('saveBtn-2'); 
     storageInput2.value = localStorage.getItem('textInput-2'); 
     
     var saveToLocalStorage2 = function () {
         localStorage.setItem('textInput-2', storageInput2.value);
         console.log("saved?")
     }
     button2.addEventListener('click', saveToLocalStorage2);

    // 12p
     var storageInput3 = document.getElementById('input-3');  
     var button3 = document.getElementById('saveBtn-3'); 
     storageInput3.value= localStorage.getItem('textInput-3'); 
     
     var saveToLocalStorage3 = function () {
         localStorage.setItem('textInput-3', storageInput3.value);
         console.log("saved?")
     }
     button3.addEventListener('click', saveToLocalStorage3);

     //1pm
     var storageInput4 = document.getElementById('input-4');  
     var button4 = document.getElementById('saveBtn-4'); 
     storageInput4.value = localStorage.getItem('textInput-4'); 
     
     var saveToLocalStorage4 = function () {
         localStorage.setItem('textInput-4', storageInput4.value);
         console.log("saved?")
     }
     button4.addEventListener('click', saveToLocalStorage4);

     //2pm
     var storageInput5 = document.getElementById('input-5');  
     var button5 = document.getElementById('saveBtn-5'); 
     storageInput5.value = localStorage.getItem('textInput-5'); 
     
     var saveToLocalStorage5 = function () {
         localStorage.setItem('textInput-5', storageInput5.value);
         console.log("saved?")
     }
     button5.addEventListener('click', saveToLocalStorage5);

     //3pm
     var storageInput6 = document.getElementById('input-6');  
     var button6 = document.getElementById('saveBtn-6'); 
     storageInput6.value = localStorage.getItem('textInput-6'); 
     
     var saveToLocalStorage6 = function () {
         localStorage.setItem('textInput-6', storageInput6.value);
         console.log("saved?")
     }
     button6.addEventListener('click', saveToLocalStorage6);

     //4pm
     var storageInput7 = document.getElementById('input-7');  
     var button7 = document.getElementById('saveBtn-7'); 
     storageInput7.value = localStorage.getItem('textInput-7'); 
    
     var saveToLocalStorage7 = function () {
         localStorage.setItem('textInput-7', storageInput7.value);
         console.log("saved?")
     }
     button7.addEventListener('click', saveToLocalStorage7);

     //5pm
     var storageInput8 = document.getElementById('input-8');  
     var button8 = document.getElementById('saveBtn-8'); 
     storageInput8.value = localStorage.getItem('textInput-8'); 
     
     var saveToLocalStorage8 = function () {
         localStorage.setItem('textInput-8', storageInput8.value);
         console.log("saved?")
     }
     button8.addEventListener('click', saveToLocalStorage8);


     
  //present time
  var currentTime = parseInt(moment().format("HH a"));
  console.log(currentTime) 

  //Time comparisons for color change past, present, future
    if (currentTime > 9) {
        $('#input-0').prop('class', "col-8 past")
    } else if (currentTime === 9) {
        $('#input-0').prop('class', 'col-8 present')
    }  else {
        $('#input-0').prop('class', 'col-8 future')
    }

    if (currentTime > 10) {
        $('#input-1').prop('class', "col-8 past")
    } else if (currentTime === 10) {
        $('#input-1').prop('class', 'col-8 present')
    }  else {
        $('#input-1').prop('class', 'col-8 future')
    }
    if (currentTime > 11) {
        $('#input-2').prop('class', "col-8 past")
    } else if (currentTime === 11) {
        $('#input-2').prop('class', 'col-8 present')
    }  else {
        $('#input-2').prop('class', 'col-8 future')
    }
    if (currentTime > 12) {
        $('#input-3').prop('class', "col-8 past")
    } else if (currentTime === 12) {
        $('#input-3').prop('class', 'col-8 present')
    }  else {
        $('#input-3').prop('class', 'col-8 future')
    }
    if (currentTime > 13) {
        $('#input-4').prop('class', "col-8 past")
    } else if (currentTime === 13) {
        $('#input-4').prop('class', 'col-8 present')
    }  else {
        $('#input-4').prop('class', 'col-8 future')
    }
    if (currentTime > 14) {
        $('#input-5').prop('class', "col-8 past")
    } else if (currentTime === 14) {
        $('#input-5').prop('class', 'col-8 present')
    }  else {
        $('#input-5').prop('class', 'col-8 future')
    }
    if (currentTime > 15) {
        $('#input-6').prop('class', "col-8 past")
    } else if (currentTime === 15) {
        $('#input-6').prop('class', 'col-8 present')
    }  else {
        $('#input-6').prop('class', 'col-8 future')
    }
    if (currentTime > 16) {
        $('#input-7').prop('class', "col-8 past")
    } else if (currentTime === 16) {
        $('#input-7').prop('class', 'col-8 present')
    }  else {
        $('#input-7').prop('class', 'col-8 future')
    }
    if (currentTime > 17) {
        $('#input-8').prop('class', "col-8 past")
    } else if (currentTime === 17) {
        $('#input-8').prop('class', 'col-8 present')
    }  else {
        $('#input-8').prop('class', 'col-8 future')
    }

})

/////////////////////////////////////////////////////////////////////////
//Left to do:
// - color change past, present, future

//////////////////////////////////////////////////////////////////////////
 //if (currentTime < 9) , class = past
  
  //if (currentTime === 9), class = present
  
  //if (currentTime > 9), class = future


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
// THEN the current day is displayed at the top of the calendar ***
// WHEN I scroll down
// THEN I am presented with timeblocks for standard business hours ***
// WHEN I view the timeblocks for that day
// THEN each timeblock is color coded to indicate whether it is in the past, present, or future NOT DONE YET
// WHEN I click into a timeblock
// THEN I can enter an event ***
// WHEN I click the save button for that timeblock
// THEN the text for that event is saved in local storage ***
// WHEN I refresh the page
// THEN the saved events persist ***