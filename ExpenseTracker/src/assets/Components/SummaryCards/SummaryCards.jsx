import React, { useContext } from "react";
import style from "./SummaryCards.module.css";
import { TransactionContext } from "../../Components/TransactionContext/TransactionContext"

const SummaryCards = () => {

  const { transactions } = useContext(TransactionContext);

  // TOTAL INCOME
  const income = transactions
    .filter((t) => t.type === "income")
    .reduce((acc, t) => acc + t.amount, 0);

  // TOTAL EXPENSE
  const expense = transactions
    .filter((t) => t.type === "expense")
    .reduce((acc, t) => acc + t.amount, 0);

  // BALANCE
  const balance = income - expense;

  return (
    <div className={style.cards_container}>

      {/* BALANCE */}
      <div className={`${style.cards} ${style.balance}`}>
        <h2>💰 Balance</h2>
        <p className={style.para}>${balance}</p>
      </div>

      {/* INCOME */}
      <div className={`${style.cards} ${style.income}`}>
        <h2>📈 Income</h2>
        <p className={style.para}>${income}</p>
      </div>

      {/* EXPENSE */}
      <div className={`${style.cards} ${style.expense}`}>
        <h2>📉 Expense</h2>
        <p className={style.para}>${expense}</p>
      </div>

    </div>
  );
};

export default SummaryCards;