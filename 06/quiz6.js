function multiplication(){
  const num = document.getElementById('num').value;
  console.log(num);
  var gugudan = "";
  for(var i=1; i<10; i++){
    var tamp = num*i;
    gugudan += tamp + '<br>';
  }
  document.getElementById('result').innerHTML = gugudan;


}