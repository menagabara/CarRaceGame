window.onload=function(){
var n=0;
var img_arr=["img/red2.png","img/yellow2.png","img/white.png"];
var length = img_arr.length ;
var img=document.getElementById('img1');

var looper;
var degrees = 0;
 rotateAnimation=function(el,speed){
	var elem = document.getElementById(el);

		elem.style.WebkitTransform = "rotate("+degrees+"deg)";

	looper = setTimeout('rotateAnimation(\''+el+'\','+speed+')',speed);
	degrees++;
	if(degrees > 359){
		degrees = 1;
}}


rotateAnimation("img1",30);
back=function(){
  n=(n+length-1)%length;
  localStorage.setItem("xmodel",n);
  console.log(localStorage.getItem("xmodel"))
  img.src=img_arr[n];
  degrees = 1;
  clearInterval(looper);
  rotateAnimation("img1",30);
}
frword=function(){
  n=(n+1)%length;
  img.src=img_arr[n];
  localStorage.setItem("xmodel",n);
  clearInterval(looper);
  degrees = 1;
  rotateAnimation("img1",30);
}
document.getElementById("back").addEventListener("click", back);
document.getElementById("forward").addEventListener("click", frword);


localStorage.setItem("xmodel",n);


}
