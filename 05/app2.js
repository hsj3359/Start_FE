var pos1, pos2, pos3, pos4
var elmnt;
var drag = false;
function dragElement() { 
  pos1 = 0;
  pos2 = 0; 
  pos3 = 0; 
  pos4 = 0;
  
}

function down(event){
  dragElement();
  event.preventDefault(); 
  pos3 = event.clientX; 
  pos4 = event.clientY;
  drag=true;
  console.log(drag);
}

function move(event){
  if(drag){
    console.log("실행")
    elmnt = document.getElementById("box");
    event.preventDefault(); 
    pos1 = pos3 - event.clientX;  
    pos2 = pos4 - event.clientY; 
    pos3 = event.clientX; 
    pos4 = event.clientY;
    elmnt.style.top = event.pageX-50 + "px"; 
    elmnt.style.left = event.pageY-50 + "px";
  }
  
}

function up(event){
  drag=false;
  console.log(drag);
  elmnt = document.getElementById("box");
  document.onmouseup = null; 
  document.onmousemove = null; 
  console.log("현재 요소의 위치 y는 " + elmnt.top +", x는" + elmnt.left + "입니다.");
}
