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



    // Variables
    // let time = moment();
    // let toDo = "";

    // function createSchedule(currentDay, toDo) {
    //     let hourBlock = moment(currentDay).hour(8);
    //     const schedule = $(".container");

    //     for (let i = 1; i < 11; i++) {
    //         const row = $("<div>").addClass("row");

    //     schedule.append(row);
    //     row.append($("<div>").addClass("col-2 hour time-block").text(hourBlock.format("hh:00 a")));
    //     row.append($("<textarea>").addClass(`col-9 ${description} time-block`).text(toDo));
    //     row.append($("<button>").addClass("col-1 saveBtn").html("<i class='fas fa-save'></i>"));
    //     hourBlock.add(1, "hour");
    //     time = moment();


    //     let description = "";
    //     if (today.isBefore(timeBlock, "hour")) {
    //         description = "future"
    //     } else if (today.isAfter(timeBlock, "hour")) {
    //         description = "past"
    //     } else {
    //         description = "present"
    //     };

    // };


    // Calling Functions
    $(this).on("load", createSchedule());
})
