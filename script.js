document.getElementById("calculateBtn").addEventListener("click", function () {
    const loanAmount = parseFloat(document.getElementById('loanAmount').value);
    const interestRate = parseFloat(document.getElementById('interestRate').value);
    const tenure = parseInt(document.getElementById('tenure').value);
  
    if (isNaN(loanAmount) || isNaN(interestRate) || isNaN(tenure)) {
      alert("Enter valid inputs!");
      return;
    }
  
    const monthlyRate = interestRate / 1200;
    const x = Math.pow(1 + monthlyRate, tenure);
    const emi = (loanAmount * monthlyRate * x) / (x - 1);
    const totalAmount = emi * tenure;
    const totalInterest = totalAmount - loanAmount;
  
    document.getElementById('emi').innerText = "EMI/month: ₹" + emi.toFixed(2);
    document.getElementById('totalInterest').innerText = "Total Interest: ₹" + totalInterest.toFixed(2);
    document.getElementById('totalAmount').innerText = "Total Amount: ₹" + totalAmount.toFixed(2);
  });
  