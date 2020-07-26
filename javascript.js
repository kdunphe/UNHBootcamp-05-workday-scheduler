$(document).ready(function () {


// moment().format('MMMM Do YYYY, h:mm:ss a');
// console.log(moment().format('MMMM Do YYYY, h:mm:ss a'));
// moment().endOf('day').fromNow(); 


// Get Current Day & Date
function currentDay() {
    $("#currentDay").html([moment().format('dddd, ' + 'MMMM Do YYYY')]);
}

// function createSchedule() {
//     let container = $("<div>").addClass("row").attr("id", `row${i}`);
//     let hourCol = $("<div>").addClass("col-2 hour").text("placeholder");
//     let textCol = $("<div>").addClass("col-9 text").text("placeholder");
//     let saveCol = $("<div>").addClass("col-1 save").text("placeholder");
//     let saveBtn = $("<button>").addClass("btn fas fa-save");


// for (let i = 0; i < 12; i++) {
//     $(".container").append(container.append(hourCol,textCol,saveCol));
// }



// Variables
let time = moment();
let toDo = "";


// Adding Schedule Elements to the Page
function createSchedule(currentDay, toDo) {
    let hourBlock = moment(currentDay).hour(8);
    let schedule = $(".container");

    for (let i = 1; i < 11; i++) {
        let row = $("<div>").addClass("row");

    schedule.append(row);
    row.append($("<div>").addClass("col-2 hour time-block").text(hourBlock.format("hh:00 a")));
    row.append($("<textarea>").addClass("col-9 description time-block").text(toDo));
    row.append($("<button>").addClass("col-1 saveBtn").html("<i class='fas fa-save'></i>"));
    hourBlock.add("hour", 1);
    time = moment();

    };

};



// Calling Functions
$(currentDay);
$(this).on("load", createSchedule());})
// $(createSchedule);
