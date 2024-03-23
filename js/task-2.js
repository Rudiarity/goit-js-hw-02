// function getShippingMessage(country, price, deliveryFee) {
//     const totalPrice = price + deliveryFee;
//     return "Shipping to "+country+" will cost "+totalPrice+" credits"
    
// }
// console.log(getShippingMessage("Australia", 120, 50)); // "Shipping to Australia will cost 170 credits"
// console.log(getShippingMessage("Germany", 80, 20)); // "Shipping to Germany will cost 100 credits"
// console.log(getShippingMessage("Sweden", 100, 20)); // "Shipping to Sweden will cost 120 credits"

function formatMessage(message, maxLength) {
  const LegthMassage = (massage) 
    if (LegthMassage  <= maxLength) {
        console.log(massage)
    } else if ( LegthMassage  > maxLength) {
        console.log(massage = maxLength + "...")
    }
    return
}
console.log(formatMessage("Curabitur ligula sapien", 16));// "Curabitur ligula..."