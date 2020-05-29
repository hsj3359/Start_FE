function getRandomInt() {
    if (arguments.length == 2) {
        if (typeof (arguments[0]) == 'number' && typeof (arguments[1]) == 'number') {
            min = Math.ceil(arguments[0]);
            max = Math.floor(arguments[1]);
            return Math.floor(Math.random() * (max - min)) + min; //최댓값은 제외, 최솟값은 포함
        }
        else {
            return -1;
        }
    }
    else if (arguments.length == 1) {
        min = 0;
        max = Math.floor(arguments[0]);
        return Math.floor(Math.random() * (max - min)) + min; //최댓값은 제외, 최솟값은 포함
    }
    else {
        alert('올바른 값을 입력해주세요');
    }


}
export default getRandomInt;