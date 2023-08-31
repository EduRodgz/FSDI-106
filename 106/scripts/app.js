var notImportantIcon = "fa-regular fa-bookmark";
var importantIcon = "fa-solid fa-bookmark";
let isImportant = false;
let isVisible = true;
//Jquery

function toggleImportant(){


if (isImportant){
    isImportant = false;
    $("#formIcon").removeClass(importantIcon).addClass(notImportantIcon);
} else {
    isImportant = true;
    $("#formIcon").removeClass(notImportantIcon).addClass(importantIcon);
}
}

function toggleView(){
    if(isVisible)
    {
        isVisible = false;
        $("#form").hide();
    }
    else{
        isVisible = true;
        $("#form").show();
    }
}



function saveTasks(){
    let title = $("#txtTitle").val();
    let desc = $("#txtDescription").val();
    let category = $("#selCategory").val();
    let dueDate = $("#selDueDate").val();
    let priority = $("#selPriority").val();

    let task = new Task(   
        isImportant,
        title,
        desc,
        category,
        dueDate,
        priority
        );
        $.ajax({
            type: "POST" ,
            url: "http://fsdiapi.azurewebsites.net/api/tasks/" ,
            data: JSON.stringify(task),
            contentType: "application/json",
            success: function(res){
                console.log(res);
                displayTask(task);
            },
            error: function(error){
                console.log(error);
            }
        });
}

function displayTask(task){
    let icon = task.isImportant
    ? `<i class="important-task ${importantIcon}"></i>`
    : `<i class="regular-task ${notImportantIcon}"></i>`

    let syntax = `
    <div class="task" style="border: 2px solid ${task.title}">
    <div class="info">
        <h5>${task.description}</h5>
    </div>
    </div>`

    $("#pending-task").append(syntax);

}

function loadTask(){
    $.ajax({
        type: "GET",
        url: "http://fsdiapi.azurewebsites.net/api/tasks",
        success: function(res){
            let data = JSON.parse(res);
            for(let task of data){
                displayTask(task);
            }
        },
        error: function(error){
            console.log(error);
            alert("unexpected error");
    }
    });
}

function init()
{
    loadTask();
    $("#toggleView").click(toggleView);
    $("#formIcon").click(toggleImportant);
    $("#btnSave").click(saveTasks);
}

window.onload = init;

