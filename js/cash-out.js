document
  .getElementById("cash-out-btn")
  .addEventListener("click", function (event) {
    event.preventDefault();

    const cashOutAmount = document.getElementById(
      "input-cash-out-amount"
    ).value;
    const cashOutPin = document.getElementById("input-cash-out-pin").value;
    if (cashOutPin === "1234") {
      const mainBalance = document.getElementById("account-balance").innerText;

      const cashOutMoney = parseFloat(cashOutAmount);
      const currentBalance = parseFloat(mainBalance);

      const cashOut = currentBalance - cashOutMoney;
      document.getElementById("account-balance").innerText = cashOut;
      console.log(cashOut);
    } else {
      alert("Failed to cash out. Please try again!");
    }
  });
