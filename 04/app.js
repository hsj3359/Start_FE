var count = [10,20,30,40,50,60,70,100];
var sum =0;
 for(var num =0; num < count.length; num++){
   sum += count[num];
   if(num == count.length-1){
     var avg = sum/count.length;
     console.log("평균값은"+avg);
   }
 }

function gugudan(){
  for (var num1 = 1; num1<10; num1++){
    for(var num2 =1; num2 < 10; num2++){
      console.log(num1+"*"+num2+"="+num1*num2);
    }  
  } 
}

gugudan();

var admin ={
  nick : 'sj',
  age :25,
  area:'jeju',

};
admin.constructor == Object
console.log(admin.hasOwnProperty('nick'));
alert(admin);
sum = 0;
while(true){
  var temp = window.prompt("sum 은"+sum+"\n"+"종료를 원하시면 end를 입력해주세요");
  if(temp == "end"){
      break;
  }
  sum += Number(temp);


}
