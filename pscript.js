//Playing around with appending

// var $container = $('.container');
// var $divEl1 = $('<div>');
// var $divEl2 = $('<div>');
// var $divEl3 = $('<div>');
// var num = 9;

// var start = function () {
//     for(var i= 0; i < num; i++) {
//         $container.append($divEl1);
//         $divEl1.addClass("col-2 hourBox hour");
//         $divEl1.css("border", "black");
//         $divEl1.text("a1")
//         $container.append($divEl2);
//         $divEl2.addClass("col-9 inputBox");
//         $divEl2.css("border", "black");
//         $divEl2.text("a2")
//         $container.append($divEl3);
//         $divEl3.addClass("col-1 button");
//         $divEl3.css("border", "black");
//         $divEl3.text("a3")
//     }
// };

// start()


// Amount of hours in calender = 9
// use input for input then local storage?
// -----------------------------------------------------------------------
// var inputPlans = Input.value; somewhere

// var plans = localStorage.getItem("plans")
// var savedPlans = {
//     todo: inputPlans
// }

// plans = JSON.parse(plans);
// plans.push(inputPlans)

// var newPlans = JSON.stringify(plans)
//  localStorage.setItem("plans". newPlans);


//javascript version of simple input for localStorage

// var storageInput = document.querySelector('storage');
// var text = document.querySelector('.text');
// var button = document.querySelector('button');
// var storedInput = localStorage.getItem('textInput');

// if(storageInput) {
//     text.textContent = storedInput;
// }

// //this isn't needed. just for fun No text object
// storageInput.addEvenetListener('input', function(letter){
//     text.textContent = letter.target.value
// })

// var saveToLocalStorage = function () {
//     localStorage.setItem('textInput', text.textContent);
// }

// button.addEventListener('click', saveToLocalStorage);