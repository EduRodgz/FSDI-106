//function saveTask(){
//    let title =$("txtTitle").val();
//}

$("#taskForm").on("submit", function(e)
{
    e.preventDefault();
    let task = 
    {
        title: $("#title").val()
    };
$.ajax({
    type: "POST" ,
    url: "http://fsdiapi.azurewebsites.net/api/tasks/" ,
    data: JSON.stringify(task),
    contentType: 'application/json',
    success: function(res){
        console.log(res);
    },
    error: function(error){
        console.log(error);
    }
})
})