document.getElementById("order-form").addEventListener("submit", function (e) {
  var size = document.querySelector('input[name="size"]:checked').value;
  var topping = document.getElementsByName("toppings");
  var selectedCrust = document.getElementsByName("crust")[0].value;
  //alert(selectedCrust)
  var quantity = document.getElementById("quantity").value;

  var selectedToppping = 0;
  for (var i = 0; i < topping.length; i++) {
    if (topping[i].checked == true) {
      selectedToppping++;
    }
  }

  var price = 0;
  if (size === "m") price = 200 + selectedToppping * 30;
  else if (size === "l") price = 300 + selectedToppping * 50;

  var totalPrice = quantity * price;

  alert("Thank you for your order, Your total price " + totalPrice + " THB");

  e.preventDefault();
});
