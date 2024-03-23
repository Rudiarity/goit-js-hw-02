function makeTransaction(x, y) {
     const totalPrice = x * y;
    return "You ordered "+x+" droids worth "+totalPrice + " credits!";
}
console.log(makeTransaction(5, 3000));
console.log(makeTransaction(3, 1000)); 
console.log(makeTransaction(10, 500));
