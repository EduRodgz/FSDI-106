document.getElementById("btnJS").addEventListener("click",function(){
    document.getElementById("title").textContent = "Change using JavaScript"
});

$(document).ready(function(){
    $("#btnJQ").click(function(){
        $("#title").text("Change using jQuery");
    });
});

    window.addEventListener("DOMContentLoaded" , function(){
        document.getElementById("toggleJS").addEventListener("click",function(){
            var content = document.getElementById("content");
            if (content.style.display == "none"){
                content.style.display = "block";
            }   else {
                content.style.display = "none";
            }
        });
    });

    $(document).ready(function(){
        $("#toggleJQ").click(function(){
            $("#content").toggle();
        });
    });