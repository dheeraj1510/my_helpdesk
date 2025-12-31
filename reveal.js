window.addEventListener("scroll",reveal);
function reveal(){
var tegs = document.querySelectorAll(".item");
for(i=0; i < tegs.length; i++){
    var windowheight = window.innerHeight;
    var revealtop = tegs[i].getBoundingClientRect().top;
    var revealpoint = 150;

    if(revealtop < windowheight - revealpoint){
        tegs[i].classList.add('active');
    }else{
        tegs[i].classList.remove('active');
    }
}
}


window.addEventListener("scroll", (event) => {
    let scroll = this.scrollY;
  if(scroll > 400){
    document.getElementById("top").style.display="block";
  }else{
    document.getElementById("top").style.display="none";
  }
});
function windowScroll(){
  window.scrollTo(0,0);
}