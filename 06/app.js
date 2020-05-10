let a = 'fjofaef';
const b = 'fjoeiajofea';
console.log(a, b);


var cp = 'ssully';
var url1 = 'https://1boon.kakao.com/' + cp;
console.log(url1);


const url2 = `https://1boon.kakao.com/${cp}`
console.log(url2)

var str = `aaaaaa \
 sdasd`;
const s = `aaaaa
cccc
ddd`
console.log(str, s);


function sum(x, y = 2){
    return x + y;
}
console.log(sum(1));

const arr = [1, 2, 3];
const newArr = arr.map(item => item * 2);
console.log(newArr);

document.getElementById('box').addEventListener('click', event => console.log(1))


function sumArr(x, y, z) {
    return x + y + z;
}
const numbers = [1, 2, 3];
console.log(sumArr(...numbers));

const words = ['a', 'b'];
const newWords = [...words];
console.log(newWords);

const arr1 = [3, 4, 5];
const arr2 = [1, 2, ...arr1, 6, 7];
console.log(arr2);

const obj = {
    a: 1,
    b: 2,
};
const newObj = { ...obj };
console.log(newObj);


function func(...param) {
    console.log(param);
}
func(1, 2, 3);

function foo() {
    console.log(arguments);
}
foo(1, 2, 3);


var team = obj.team;
var area = obj.area;

var col1 = cols[0];
var col2 = cols[1];

const { team, area } = obj;
const [col1, col2] = cols;
const [, cols2] = cols;


function getArea(options) {
  return options.width * options.height;
}


function getArea({ width, height }) {
  return width * height;
}


const number = 1234;

const student = {

  number, name, id, 
};
console.log(student.number);

const student2 = {
    number, name, id,
   
    playGame() {
      console.log('play');
    },
};
student2.playGame()