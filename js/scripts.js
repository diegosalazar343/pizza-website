//Business Logic
function determinePrice(input1, input2, input3, input4, input5, input6) {
  const valTotal = input1 + input2 + input3 + input4 + input5 + input6;
if (valTotal valTotal <= 7) {
  price ="7 dollars";
} else if (valTotal <= 13) {
  price="13 dollars";
} else {
  price="20 dollars";
}
  return price;
}



//User Logic
$(document).ready(function() {
  $("form").submit(function(event){
    event.preventDefault();
    let pizzaOrder = [];
    const size = parseInt($("#size").val());
    const crust = parseInt($("#crust").val());
    const sauce = parseInt($("#sauce").val());
    $("input:checkbox[name=cheese-type]:checked").each(function () {
      const cheeseType = $(this).val();
      pizzaOrder.push(cheeseType);
    })
    $("input:checkbox[name=meat-type]:checked").each(function () {
      const meatType = $(this).val();
      pizzaOrder.push(meatType);
    })
    $("input:checkbox[name=non-meat-type]:checked").each(function () {
      const nonMeatType = $(this).val();
      pizzaOrder.push(noneMeatType);
    }
  });
});
