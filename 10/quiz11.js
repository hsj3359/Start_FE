import randomModuel from './randomNum';
import avg from './avg';

var array = new Array();
var num = randomModue(1, 100);
for (var i = 0; i < 10; i++) {
  array.push(num);
}
var avg = avg(array)
document.body.innerHTML = avg;