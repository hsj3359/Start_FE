var list, index;
var view = true;

function togle(){
  if(view){
    list = document.getElementsByClassName("box red");
    for(var i=0; i<list.length; i++){
      list[i].style.display="none";
    }
    view =false;
  }
  else{
    list = document.getElementsByClassName("box red");
    for(var i=0; i<list.length; i++){
      list[i].style.display="block";
    }
    view =true;
  }
}

function reset(){
  list = document.getElementsByClassName("box");
  const num = list.length;
  for(var i=num-1; i>-1; i--){
    list[i].remove();
  }
}

function red(){
  list = document.getElementsByClassName("box");
  for (index = 0; index < list.length; ++index) {
      list[index].setAttribute('class','box red');
  }
}

function add(){
  var div = document.createElement('div');
  div.setAttribute('class','box red');
  document.querySelector('body').appendChild(div);
}

function del(){
  list = document.getElementsByClassName("box red");
  list[list.length-1].remove();

}


function img(){
  list = document.getElementsByClassName("box");
  if(list.length==0){
    add();
    for(var i=0; i<list.length; i++){
      list[i].innerHTML ='<img src="https://i.imgur.com/69NjYBH.png" >';
    }
  }
  else{
    for(var i=0; i<list.length; i++){
      list[i].innerHTML ='<img src="https://i.imgur.com/69NjYBH.png" >';
    }
  }
}

function text(){
  list = document.getElementsByClassName("box");
  var txt = document.getElementsByClassName('txt');
  var value = txt[0].getAttribute('value');
  console.log(value);
  for(var i=0; i<list.length; i++){
    list[i].innerHTML = value;
  }
 

}

