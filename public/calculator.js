
// var b = document.getElementById("button1");

// b.onclick = function(){

//     window.alert("HHHEEEEELLLLLPPPP!!!");

// }

var mean_button = document.getElementById("mean");
mean_button.onclick = function calculate_mean() {
    var input_mark1 = document.getElementById('mark1').value;
    var input_mark2 = document.getElementById('mark2').value;
    var input_mark3 = document.getElementById('mark3').value;
    var input_mark4 = document.getElementById('mark4').value;
    var input_outof1 = document.getElementById('outof1').value;
    var input_outof2 = document.getElementById('outof2').value;
    var input_outof3 = document.getElementById('outof3').value;
    var input_outof4 = document.getElementById('outof4').value;
    var the_result = document.getElementById('final_result');
    var percentage_1 = input_mark1/input_outof1;
    console.log(percentage_1);
    var percentage_2 = input_mark2/input_outof2;
    console.log(percentage_2);
    var percentage_3 = input_mark3/input_outof3;
    console.log(percentage_3);
    var percentage_4 = input_mark4/input_outof4;
    console.log(percentage_4);
    var total_mean = (percentage_1 + percentage_2 + percentage_3 + percentage_4)*25;
    var T_M = total_mean.toFixed(2)
    the_result.innerHTML = T_M;
    // console.log(total_mean);
}

function percent_calculator_1() {
  var input_mark1 = document.getElementById('mark1').value;
  var input_outof1 = document.getElementById('outof1').value;
  var percentage_1 = (input_mark1/input_outof1)*100;
  var output_1 = document.getElementById('perc_1');
  var p1 = percentage_1.toFixed(2)
  output_1.innerHTML = p1;
}
function percent_calculator_2() {
  var input_mark2 = document.getElementById('mark2').value;
  var input_outof2 = document.getElementById('outof2').value;
  var percentage_2 = (input_mark2/input_outof2)*100;
  var output_2 = document.getElementById('perc_2');
  var p2 = percentage_2.toFixed(2)
  output_2.innerHTML = p2;
}
function percent_calculator_3() {
  var input_mark3 = document.getElementById('mark3').value;
  var input_outof3 = document.getElementById('outof3').value;
  var percentage_3 = (input_mark3/input_outof3)*100;
  var output_3 = document.getElementById('perc_3');
  var p3 = percentage_3.toFixed(2)
  output_3.innerHTML = p3;
}
function percent_calculator_4() {
  var input_mark4 = document.getElementById('mark4').value;
  var input_outof4 = document.getElementById('outof4').value;
  var percentage_4 = (input_mark4/input_outof4)*100;
  var output_4 = document.getElementById('perc_4');
  var p4 = percentage_4.toFixed(2)
  output_4.innerHTML = p4;
}





var weight_button = document.getElementById("weighted");
weight_button.onclick = function calculate_weighted_mean() {
    var input_mark1 = document.getElementById('mark1').value;
    var input_mark2 = document.getElementById('mark2').value;
    var input_mark3 = document.getElementById('mark3').value;
    var input_mark4 = document.getElementById('mark4').value;
    var input_outof1 = document.getElementById('outof1').value;
    var input_outof2 = document.getElementById('outof2').value;
    var input_outof3 = document.getElementById('outof3').value;
    var input_outof4 = document.getElementById('outof4').value;
    var the_result = document.getElementById('final_result');
    var input_weight1 = document.getElementById('weight1').value;
    var input_weight2 = document.getElementById('weight2').value;
    var input_weight3 = document.getElementById('weight3').value;
    var input_weight4 = document.getElementById('weight4').value;

    var percentage_1 = input_mark1/input_outof1;
    // console.log(percentage_1);
    var percentage_2 = input_mark2/input_outof2;
    var percentage_3 = input_mark3/input_outof3;
    var percentage_4 = input_mark4/input_outof4;
    var total_weighted_mean = (input_weight1*percentage_1 + input_weight2*percentage_2 + input_weight3*percentage_3 + input_weight4*percentage_4)*100;
    var TWM = total_weighted_mean.toFixed(2)
    the_result.innerHTML = TWM;
    // console.log(total_weighted_mean);
}


// document.getElementById("mean").addEventListener('click', calculate_mean());

// document.getElementById('mean').addEventListener('click' , function (){
//
//     console.log("im here")
//
//     // console.log(getElementById('a1').innerHTML);
//
// });
