var slider1 = document.getElementById("priAmount");
var slider2 = document.getElementById("interestRate");
var slider3 = document.getElementById("tenure");


var principalAmount = document.getElementById("paValue");
var interestRate = document.getElementById("interestValue");
var tenure = document.getElementById("tenureValue");
var amount = 10000;
var rate = 15;
var months = 6;


principalAmount.innerHTML = slider1.value; // Display the default slider value
interestRate.innerHTML = slider2.value;
tenure.innerHTML = slider3.value;

// Update the current slider value (each time you drag the slider handle)
slider1.oninput = function() {
    amount =  this.value;
    principalAmount.innerHTML = amount;
}
slider2.oninput = function() {
    rate = this.value;
    interestRate.innerHTML = rate;
}
slider3.oninput = function() {
    months = this.value;
    tenure.innerHTML = months;
}


for(i=0; i<=2;i++){

document.querySelectorAll("input")[i].addEventListener("change",function(){

    document.querySelector("#priAmount").addEventListener("change", function(){
        amount = slider1.value ;
          // var amount = document.querySelectorAll("input")[0].value;
      });
      document.querySelector("#interestRate").addEventListener("change", function(){
        rate = slider2.value ;
          // var amount = document.querySelectorAll("input")[0].value;
      });
      document.querySelector("#tenure").addEventListener("change", function(){
        months = slider3.value ;
          // var amount = document.querySelectorAll("input")[0].value;
      });
  
  
   var interest =  (amount * (rate * 0.01)) / months;
  
   var total =  ((amount / months) + interest).toFixed(2);
  
   document.querySelector("#emi").innerHTML = "₹" + total;
})
}
   
