function avg() {
    var tamp = null;
    var count = 0;
    for (let i of arguments) {
        if (typeof (arguments[i]) == "number") {
            tamp += arguments[i];
            count += 1;
        }
    }
    return tamp / count;
}
export default avg;