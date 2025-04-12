// This is where the calculation happens
function calculateEMI() {
    const loanAmount = parseFloat(document.getElementById('loanAmount').value);
    const interestRate = parseFloat(document.getElementById('interestRate').value);
    const loanTenure = parseInt(document.getElementById('loanTenure').value);
  
    const emiResult = document.getElementById('emiResult');
    const totalInterest = document.getElementById('totalInterest');
    const totalAmount = document.getElementById('totalAmount');
  
    if (isNaN(loanAmount) || isNaN(interestRate) || isNaN(loanTenure)) {
      emiResult.textContent = "Please enter valid inputs.";
      totalInterest.textContent = "";
      totalAmount.textContent = "";
      return;
    }
  
    const monthlyRate = interestRate / 12 / 100;
    const x = Math.pow(1 + monthlyRate, loanTenure);
    const emi = (loanAmount * monthlyRate * x) / (x - 1);
    const totalAmt = emi * loanTenure;
    const interestAmt = totalAmt - loanAmount;
  
    emiResult.textContent = `EMI/month: ₹${emi.toFixed(2)}`;
    totalInterest.textContent = `Total Interest: ₹${interestAmt.toFixed(2)}`;
    totalAmount.textContent = `Total Amount: ₹${totalAmt.toFixed(2)}`;
  }
  
  // Event listener for the button click
  document.getElementById('calculateButton').addEventListener('click', calculateEMI);
  