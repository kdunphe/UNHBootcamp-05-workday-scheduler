$(document).ready()


// moment().format('MMMM Do YYYY, h:mm:ss a');
// console.log(moment().format('MMMM Do YYYY, h:mm:ss a'));
// moment().endOf('day').fromNow(); 


function currentDay() {
    $("#currentDay").html([moment().format('dddd, ' + 'MMMM Do YYYY')]);
}

$(currentDay);