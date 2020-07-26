$(document).ready()


// moment().format('MMMM Do YYYY, h:mm:ss a');
// console.log(moment().format('MMMM Do YYYY, h:mm:ss a'));
// moment().endOf('day').fromNow(); 


// Get Current Day & Date
function currentDay() {
    $("#currentDay").html([moment().format('dddd, ' + 'MMMM Do YYYY')]);
}

function createSchedule() {
    let container = $("<div>").addClass("row");
    let hourCol = $("<div>").addClass("col-2 hour").text("placeholder");
    let textCol = $("<div>").addClass("col-9 text").text("placeholder");
    let saveCol = $("<div>").addClass("col-1 save").text("placeholder");
    let saveBtn = $("<button>").addClass("btn fas fa-save");

for (let i = 0; i < 12; i++) {
    $(".container").append(container.append(hourCol,textCol,saveCol));

}

    // textCol += "<h1>Hi</h1>";

    // return textCol;

    // let hourCol = $("<div>");
    // let p = $("p").text("hello!");

    // hourCol.html(p);


    // $("div").html(function(){
    //     $("p").append(" <b>Appended text</b>.");
    //   });


    // $( ".hi" ).add( "span" ).css( "background", "yellow" );
    // $(".hi").append("<p>Hi</p>");
    // $().append("<p>Hi</p>");

}



// Calling Functions
$(currentDay);
$(this).on("load", createSchedule());
// $(createSchedule);