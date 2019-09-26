// var b = document.getElementById("button1");
// b.onclick = function(){
//     window.alert("HHHEEEEELLLLLPPPP!!!");
// }

document.getElementById("button1").addEventListener('click', function(){
    document.getElementById("para").innerHTML = "FIRST PARAGRAPH!!";
    console.log("you've clicked me!");
});
