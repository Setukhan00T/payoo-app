document
  .getElementById("add-money-btn")
  .addEventListener("click", function (event) {
    event.preventDefault();

    const addMoney = document.getElementById("input-add-amount").value;

    const pinNumber = document.getElementById("input-pin-number").value;

    if (pinNumber === "1234") {
      const balance = document.getElementById("account-balance").innerText;

      const addMoneyNumber = parseFloat(addMoney);
      const balanceNumber = parseFloat(balance);
      const updatedBalance = balanceNumber + addMoneyNumber;
      console.log(updatedBalance);

      document.getElementById("account-balance").innerText = updatedBalance;
    } else {
      alert("Failed to add money. Please try again!");
    }
  });
