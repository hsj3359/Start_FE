var score =0;
var life = 10;
function select(event){
    const $box = event.target;
    if($box.getAttribute("class") =="box"){

        life -=1;
        if(life==0){
            window.alert("GAME OVER");
        }
        document.getElementById('life').innerHTML = life;
    }
    else if($box.getAttribute('id')=="bug"){
        score +=1;
        document.getElementById('point').innerHTML = score;
    }
    else{
       return
    }
  }
  function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min; //최댓값도 포함, 최솟값도 포함
  }
  setInterval(function() {
       let $bug = document.getElementById("bug");
       const top = getRandomIntInclusive(0,380);
       const left = getRandomIntInclusive(0,380);
       $bug.setAttribute('style', 'left :'+left + 'px;'+ 'top : '+top+'px;');

    
    }, 2000);