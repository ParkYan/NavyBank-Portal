//Pop-up logic for the product descriptions. 

// Data for the pop-ups
const modalData = {
    'Savings': 'Our High-Yield Savings account offers a 4.50% APY (Annual Percentage Yield), helping your money grow faster.',
    'Credit Builder': 'Establish a US credit score safely, even if you are new to the country.',
    'IRA': 'An IRA is a tax-advantaged account that helps you save for retirement.',
    'Stocks': 'Invest in stocks and ETFs with zero commissions via our mentor tools.'
};

// Function to open the modal with the appropriate content
function openModal(product) {
    const modal = document.getElementById("productModal");
    const title = document.getElementById("modalTitle");
    const desc = document.getElementById("modalDescription");

    //Defensive check: only open modal if matching product data exists
    if (modalData[product]) {
        title.innerText = product;
        desc.innerText = modalData[product];
        modal.style.display = "block";
    } else {
        console.error("No data found for product: " + product);
    }
}

// Modal closes when clicking outside the content or on the close button
window.onclick = function (event) {
    const modal = document.getElementById("productModal");
    if (event.target == modal || event.target.classList.contains("close-btn")) {
        modal.style.display = "none";
    }
}

//Calculator

// Function to calculate the future value of the savings based on user input
function calculateInterest() {
    const p = parseFloat(document.getElementById('principal').value) || 0;
    const monthly = parseFloat(document.getElementById('monthly').value) || 0;
    const years = parseFloat(document.getElementById('years').value) || 0;
    const annualRate = parseFloat(document.getElementById('strategy').value);

    if (years <= 0) {
        document.getElementById('calc-result').innerHTML = "Please enter a valid number of years.";
        return;
    }

    // Divides the annual rate by 12
    const r = annualRate / 12;
    const n = years * 12; // Total number of months

    // Principal Deposit growth
    const principalGrowth = p * Math.pow((1 + r), n);

    // Monthly Contributions growth 
    const contributionGrowth = monthly * ((Math.pow((1 + r), n) - 1) / r);

    // Total balance after the specified years
    const total = principalGrowth + contributionGrowth;
    const formattedTotal = total.toLocaleString('en-US', { style: 'currency', currency: 'USD' });
    
    // Display the result
    document.getElementById('calc-result').innerHTML =
        `In ${years} years, your total estimated balance is <strong>${formattedTotal}</strong>.`;
}