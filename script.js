var tglbtn = document.querySelector(".toggleBtn");
var lines = document.querySelectorAll(".lines");
var nav = document.querySelector(".nav");
tglbtn.addEventListener("click",function(){
    nav.classList.toggle("navactive");
    lines.forEach(function(ele){
        ele.classList.toggle("linesactive");
    })
})

