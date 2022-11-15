$(document).ready(() => {
    dateTime();
if(!localStorage.hasOwnProperty("task")){
    let task = [
        {
            id:1,
            title:"contoh",
            date: moment().format('MM/DD/YYYY'),
            description: "lorem ipsum, dolor sit amet consectetur adipisicing elit."
        }
    ];
    localStorage.setItem("task", JSON.stringify(task));

}
button_task({type:'render'})
});


const dateTime = () => {
    $("#time").html(moment().format("hh:mm A"));
    $("#date").html(moment().format("ddd, DD MM YYYY"));

}