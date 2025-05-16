async function submitOrder(user) {
  var shoppingCart, zipCode, shippingRate, orderSuccessful , zipCodes;
  
  // Get the current user's shopping cart
   shoppingCart = await OrderAPI.getShoppingCartAsync(user)
  
  // Also look up the ZIP code from their profile
  zipCodes = await CustomerAPI.getProfileAsync(user)
  
  zipCode = await zipCodes.zipCode
  
  // Calculate the shipping fees
  shippingRate = calculateShipping(shoppingCart, zipCode);
  
  // Submit the order
  orderSuccessful = await OrderAPI.placeOrderAsync(shoppingCart, shippingRate)
  
  console.log(`Your order ${orderSuccessful? "was" : "was NOT"} placed successfully`);
}
