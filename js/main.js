var a = document.getElementById("no1");
var b = document.getElementById("no2");

function add() {
    var addi = Number(a.value) + Number(b.value);
    document.getElementById("ans").innerHTML = addi;
}
function sub() {
    var sub = Number(a.value) - Number(b.value);
    document.getElementById("ans").innerHTML = sub;
}
function mul() {
    var mul = Number(a.value) * Number(b.value);
    document.getElementById("ans").innerHTML = mul;
}
function div() {
    var div = Number(a.value) / Number(b.value);
    document.getElementById("ans").innerHTML = div;
}
