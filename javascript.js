$(document).ready(function () {


    // Get Current Day & Date
    $("#currentDay").html([moment().format('dddd, ' + 'MMMM Do YYYY')]);
    // function currentDay() {
    //     $("#currentDay").html([moment().format('dddd, ' + 'MMMM Do YYYY')]);}


    // Variables
    const time = moment();


    // Adding Schedule Elements to the Page
    // Source: https://www.w3schools.com/js/js_loop_for.asp
    // Source: https://medium.com/@aleks.roslyakov/using-css-grid-jquery-making-a-daily-scheduler-pt-ii-7af7d239a55d
    // Source: Help from tutor
    const currentDay = moment();

    function createSchedule(time) {

        time = moment(time).hour(8);

        for (let i = 1; i < 12; i++) {

            const row = $("<div>").addClass("row").attr(`id`, `row${i}`);
            const timeBlock = $("<div>").addClass("col-2 hour time-block").text(time.format("hh:00 a")).attr("id", `hour${i}`);
            const textBlock = $("<textarea>").addClass("col-9 description time-block").attr(`id`, `text${i}`);
            let saveBtn = $("<button>").html("<i class='fas fa-save'></i>").addClass("col-1 saveBtn").attr(`id`, i);
            $(".container").append(row.append(timeBlock, textBlock, saveBtn));


            if (currentDay.isAfter(time, "hour")) {
                textBlock.addClass("past");
            } else if (currentDay.isBefore(time, "hour")) {
                textBlock.addClass("future");
            } else {
                textBlock.addClass("present");
            }

            time.add(1, "hour");
        }
    }




    $("saveBtn").on("click", function () {
        let input = $(this).siblings(".description").val(); // this value will capture the value of our textArea
        var hour = $(this).parent().attr("id"); // this captures the id which tells us which hour the event coresponds to
        localStorage.setItem(hour, activity); // setting the hour and event to local storage
      });

      $("#hour-9 .description").val(localStorage.getItem("hour-9"));



    // Calling Functions
    $(this).on("load", createSchedule());
})
