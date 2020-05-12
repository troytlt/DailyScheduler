$(document).ready(function(){
// Define an array that stores things to do
//"empty","empty","empty","empty","empty","empty","empty","empty","empty","empty","empty","empty","empty","empty","empty","empty","empty","empty","empty","empty","empty","empty","empty","empty", "empty"

// Show current time using Jquery
let date = new Date($.now());
$("#currentDay").text(date);
// color past, current and future time
var hour = date.getHours();
//function to change color in time-block
function color() {
    for (let i=0; i<25; i++) {
        targetId = JSON.stringify(i);
        if (targetId<hour) {
            $("#"+targetId).addClass("past");
        } else if (targetId==hour) {
            $("#"+targetId).addClass("present");
        } else {
            $("#"+targetId).addClass("future");
        }
    }
}
color();
// function to input todo list
$(".textarea").on("click", function(){
    var input = prompt("Input your task").trim();
    // if input is empty, no need to do anything
    if(input !=="") {
    var note = $("<div>");
    note.text(" "+ input);
    $(this).append(note);
    } else {return};    
})



//click button to save data
$("button").on("click",function(event){
    event.preventDefault();
    var thingTodo = $(this).attr("id");
    var no = thingTodo.charAt(0)+ thingTodo.charAt(1);
    var num = parseInt(no);
    alert($("#"+num).text());
    arr[num]=$("#"+num).text();
    stored(arr);
    getLocalStorage();

});
//function to store data
var arr=[];
function stored(x) {localStorage.setItem("task",JSON.stringify(x))};
//function to get local storage
function getLocalStorage() {
    var newTask = JSON.parse(localStorage.getItem("task"));
    arr= newTask;
    printTextArea(newTask);
}
printTextArea(arr);
//function to print arr to textarea div
function printTextArea() {
    console.log(arr);
    for (let i=1; i<arr.length+1;i++) {
        if (arr[i] === undefined) {
            return
        } else {
            let targetId=JSON.stringify(i);
            $("#"+targetId).text(arr[i]);
        }
    }
}
})
