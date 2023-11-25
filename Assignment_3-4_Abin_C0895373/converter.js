
var hasSwapped = false;
// Add an event listener to the button with the id "btn"
document.getElementById("btn").addEventListener("click", convertCurrency, false);


// Function to convert USD to CAD and CAD TO USD
function convertCurrency() {
    // Get the USD or CAD amount from the input field
    var usdAmount = document.getElementById('usdAmount').value;

    // Check if the input is zero or not a number (Data validation)
    if (usdAmount == 0 || isNaN(usdAmount)) {
        alert('Please enter a valid number more than 0');
        // Exit the function if the input is invalid
        return;
    }

    // Convert USD to CAD or CAD to USD using a changing exchange rate
    
     
    // if the Currency is not changed by calling the swap() the exchange rate remain 1.25 else 0.8
    var exchangeRate = hasSwapped ? 0.8 : 1.25;
    var cadAmount = usdAmount * exchangeRate;

    // Round the result to 3 decimal places
    cadAmount = cadAmount.toFixed(3);

    // Display the converted amount in the result input field
    document.getElementById('result').value = cadAmount;
    
    
}
function toggle() {
    // Get the element with the class
    var element = document.querySelector('.cad');

    // Toggle the "active" class on the element
    element.classList.toggle('active');
}

function swap(){
//    interchanging elements once this function is called
    var swapelement = document.getElementById('rectangle1')
    var swapelement2 = document.getElementById('rectangle2')
    var swapelement3 = document.getElementById('rr')
    // changing hasSwapped to opposite of whats the current boolen
    hasSwapped = !hasSwapped;
    
    swapelement2.innerHTML = swapelement.innerHTML 
    swapelement.innerHTML = swapelement3.innerHTML
    swapelement3.innerHTML = swapelement2.innerHTML
    
}

