import { useMutation } from "@tanstack/react-query";
import React, { useState } from "react";
import { deposit, withdraw } from "../api/auth";

const Account = () => {
  const [amount, setAmount] = useState("");

  const { mutate: Deposit } = useMutation({
    mutationKey: ["deposit"],
    mutationFn: () => deposit(amount),
  });

  const { mutate: Withdraw } = useMutation({
    mutationKey: ["withdraw"],
    mutationFn: () => withdraw(amount),
  });

  const handleDeposit = () => {
    Deposit({ amount: parseFloat(amount) });
  };

  const handleWithdraw = () => {
    Withdraw({ amount: parseFloat(amount) });
  };

  console.log(amount);
  return (
    <div className="ii">
      <div className="jj">
        <div className="input-group mb-3">
          <span className="input-group-text">$</span>
          <input
            className="ll form-control"
            style={{ backgroundColor: "skyblue" }}
            placeholder="$"
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
        </div>
        <div className="oo">
          <button
            className="ll"
            style={{ backgroundColor: "red" }}
            type="button"
            onClick={handleWithdraw}
          >
            Withdraw
          </button>

          <button
            className="ll"
            style={{ backgroundColor: "green" }}
            type="button"
            onClick={handleDeposit}
          >
            Deposit
          </button>
        </div>
      </div>
    </div>
  );
};

export default Account;
