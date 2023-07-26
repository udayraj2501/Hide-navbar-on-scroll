var scroll1 = window.scrollY;

window.onscroll = function(){
  var scroll2 = window.scrollY;

  if(scroll1 > scroll2){
    document.querySelector("nav").style.top = "0";
  }
  else{
    document.querySelector("nav").style.top = "-100px";
  }
  scroll1 = scroll2;
}