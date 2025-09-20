function addToCart(product) {
  alert(product + " has been added to your cart!");
}

document.querySelector("form")?.addEventListener("submit", function(event) {
  event.preventDefault();
  alert("Thank you for contacting us! Wait for the update.");
});
