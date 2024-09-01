/***

Ticket fare Calculator
    - Children (age < 10): free
    - Students get a 50% discount
    - Senior citizens (age >= 60) gets a 15% Discount
    - Otherwise Regular ticket fare 800 tk
*/

var price = 800;
var age = 35;

if (age < 10) {
    console.log("free");
}
else if (age>=10 && age<=25) {
    console.log(price/2);
}
else if (age >=60){
   var discount = price * 15/100;
   var pay = price - discount;

    console.log(pay);
}
else {
    console.log(price);
}