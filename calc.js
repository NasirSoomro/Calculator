function nasirNumber(num){
var result = document.getElementById("result");
result.value += num;
}
function delResult(){
    var result = document.getElementById("result");
    result.value = ""
}
function getResult(){
    var result = document.getElementById("result"); 
    result.value = eval(result.value)
}
// function foo(){
//     alert("Nasir Hidayat  Roll#9018 \n Assignment  Calculator")
// }
// foo();