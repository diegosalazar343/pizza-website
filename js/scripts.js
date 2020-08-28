//Business Logic
function determinePrice()

//User Logic
$(document).ready(function() {
  let pizzaOrder = [];
  const size = $("#size").val();
  const crust = $("#crust").val();
  const sauce = $("#sauce").val();
  $("input:checkbox[name=cheese-type]:checked").each(function() {
    const cheeseType = $(this).val();
    pizzaOrder.push(cheeseType);
  })
  $("input:checkbox[name=meat-type]:checked").each(function() {
    const meatType = $(this).val();
    pizzaOrder.push(meatType);
  })
  $("input:checkbox[name=non-meat-type]:checked").each(function() {
    const nonMeatType = $(this).val();
    pizzaOrder.push(noneMeatType);
  })
})
