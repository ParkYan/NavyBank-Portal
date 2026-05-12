
/*Learn More modal*/
const modalData = {
    'Savings': 'Our High-Yield Savings account offers a 4.50% APY, helping your money grow faster than traditional banks. There are no monthly fees for newcomers.',
    'IRA': 'An IRA is a tax-advantaged account that helps you save for retirement in the US. It is a long-term "Digital Mentor" for your future self.',
    'Stocks': 'Investing in stocks means buying a small piece of a company. It carries more risk but offers the highest potential for growth over many years.'
};

function openModal(product) {
    const modal = document.getElementById("productModal");
    document.getElementById("modalTitle").innerText = product;
    document.getElementById("modalDescription").innerText = modalData[product];
    modal.style.display = "block";
}

// Close the modal when clicking the (x) or clicking outside the window
window.onclick = function (event) {
    const modal = document.getElementById("productModal");
    if (event.target == modal || event.target.className == "close-btn") {
        modal.style.display = "none";
    }
}

/*Calculator*/
function calculateInterest() {
    const p = parseFloat(document.getElementById('principal').value) || 0;
    const monthly = parseFloat(document.getElementById('monthly').value) || 0;
    const years = parseFloat(document.getElementById('years').value) || 0;
    const annualRate = parseFloat(document.getElementById('strategy').value);

    if (years <= 0) {
        document.getElementById('calc-result').innerHTML = "Please enter a valid number of years.";
        return;
    }

    // Since it's monthly, we divide the annual rate by 12
    const r = annualRate / 12;
    const n = years * 12; // Total number of months

    // Part 1: Initial Deposit growth
    const principalGrowth = p * Math.pow((1 + r), n);

    // Part 2: Monthly Contributions growth (Future Value of Annuity)
    const contributionGrowth = monthly * ((Math.pow((1 + r), n) - 1) / r);

    const total = principalGrowth + contributionGrowth;
    const formattedTotal = total.toLocaleString('en-US', { style: 'currency', currency: 'USD' });

    document.getElementById('calc-result').innerHTML =
        `In ${years} years, your total estimated balance is <strong>${formattedTotal}</strong>.`;
}