var $ = function (selector) {
  return document.getElementById(selector);
};

function processEntries() {
  //Get user input value
  var cents = $("cents").value;
  cents = parseInt(cents);

  //Validate user input
  if (cents >= 0 && cents <= 99) {
    makeChange(cents);
  } else {
    alert("Invalid entry! Please enter a number from 0 to 99");
    //Reset values after invalid entry
    $("cents").value = "";
    $("quarters").value = "";
    $("dimes").value = "";
    $("nickels").value = "";
    $("pennies").value = "";
  }
};

function makeChange(cents) {
  var quarters = parseInt(cents / 25);
  cents = cents % 25;
  var dimes = parseInt(cents / 10);
  cents = cents % 10;
  var nickels = parseInt(cents / 5);
  cents = cents % 5;
  var pennies = parseInt(cents);

  $("quarters").value = quarters;
  $("dimes").value = dimes;
  $("nickels").value = nickels;
  $("pennies").value = pennies;
};

function refreshChange(){
  $("cents").value = "";
  $("quarters").value = "";
  $("dimes").value = "";
  $("nickels").value = "";
  $("pennies").value = "";
}


document.addEventListener("DOMContentLoaded", () => {
  $("calculate").addEventListener("click", processEntries);
  $("refresh").addEventListener("click", refreshChange);
});
