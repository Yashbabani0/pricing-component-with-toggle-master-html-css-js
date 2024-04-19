// Add this script to your script.js file

// Function to toggle between monthly and yearly prices
function togglePrice() {
  // Get all elements with class 'month-price'
  var monthlyPrices = document.querySelectorAll(".month-price");
  // Get all elements with class 'year-price'
  var yearlyPrices = document.querySelectorAll(".year-price");
  // Get the toggle switch element
  var toggleSwitch = document.querySelector('.switch input[type="checkbox"]');

  // Iterate through each monthly price element
  monthlyPrices.forEach(function (element) {
    // If toggle switch is checked, show monthly prices, else hide them
    if (toggleSwitch.checked) {
      element.style.display = "inline"; // Show monthly prices
    } else {
      element.style.display = "none"; // Hide monthly prices
    }
  });

  // Iterate through each yearly price element
  yearlyPrices.forEach(function (element) {
    // If toggle switch is checked, hide yearly prices, else show them
    if (toggleSwitch.checked) {
      element.style.display = "none"; // Hide yearly prices
    } else {
      element.style.display = "inline"; // Show yearly prices
    }
  });
}

// Attach the togglePrice function to the change event of the toggle switch
document
  .querySelector('.switch input[type="checkbox"]')
  .addEventListener("change", togglePrice);

// Call togglePrice initially to set the initial state based on the toggle switch position
togglePrice();
