
function clickBody(){
  console.log('click');
}

var box = document.getElementById("debug");
// box.remove();
var div = document.createElement("div");
div.style.border = "1px solid black";
div.innerHTML = "hello!!";
document.body.appendChild(div);


const span = document.createElement('span');
const textNode = document.createTextNode('hello!'); 
span.appendChild(textNode);
document.querySelector('#debug').appendChild(span);

const list = document.getElementById('list'); 
list.removeChild(list.children[0]);

document.body.addEventListener('click',clickBody())