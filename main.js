var mouseevent="empty";
var oldX,oldY;
canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");
colour="green";
width_of_line=1;
canvas.addEventListener("mousedown",FM1);
function FM1(){
    colour=document.getElementById("colour").value;
    width_of_line=document.getElementById("width_of_line").value;
mouseevent="mousedown";
}
canvas.addEventListener("mousemove",FM2);
function FM2(e){
    currentx=e.clientX - canvas.offsetLeft;
    currenty=e.clientY - canvas.offsetTop;
if(mouseevent=="mousedown"){
    ctx.beginPath();
    ctx.strokeStyle=colour;
    ctx.lineWidth=width_of_line;
    console.log("Last position of X and Y is");
    console.log(oldX,oldY)
    ctx.moveTo(oldX,oldY)
    console.log("Current position of X and Y is");
    console.log(currentx,currenty)
    ctx.lineTo(currentx,currenty)
    ctx.stroke();
}
oldX=currentx;
oldY=currenty;
}
canvas.addEventListener("mouseleave",FM3);
function FM3(e){
mouseevent="mouseleave";
}
canvas.addEventListener("mouseup",FM4);
function FM4(e){
mouseevent="mouseup";
}