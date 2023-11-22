function temConvert(fah) {
    let cel;
    cel = (fah-32)/1.8;
    return cel;
}
function result() {
    let number1 = document.getElementById("value").value;
    document.getElementById("outputCel").innerHTML = temConvert(number1);
}