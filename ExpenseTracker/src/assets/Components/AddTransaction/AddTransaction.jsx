import React, { useState, useContext } from "react";
import style from "./AddTransaction.module.css";
import { TransactionContext } from "../../Components/TransactionContext/TransactionContext"

const AddTransaction = () => {

  const { transactions, setTransactions } = useContext(TransactionContext);

  const [formdata, setFormData] = useState({
    title: "",
    amount: "",
    type: "expense",
    category: "",
    date: ""
  });

  // HANDLE CHANGE
  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData({
      ...formdata,
      [name]:
        name === "amount"
          ? value === ""
            ? ""
            : Number(value)
          : value
    });
  };

  // HANDLE SUBMIT
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formdata.title || !formdata.amount) return;

    const newTransaction = {
      id: Date.now(),
      ...formdata
    };

    const updatedTransactions = [...transactions, newTransaction];

    setTransactions(updatedTransactions);

    localStorage.setItem(
      "transactions",
      JSON.stringify(updatedTransactions)
    );

    setFormData({
      title: "",
      amount: "",
      type: "expense",
      category: "",
      date: ""
    });
  };

  return (
    <div className={style.addtransaction_container}>
      <h2>➕ Add Transaction</h2>

      <form className={style.form} onSubmit={handleSubmit}>

        <input
          type="text"
          name="title"
          placeholder="Title"
          value={formdata.title}
          onChange={handleChange}
        />

        <input
          type="number"
          name="amount"
          placeholder="Amount"
          value={formdata.amount}
          onChange={handleChange}
        />

        <select
          name="type"
          value={formdata.type}
          onChange={handleChange}
        >
          <option value="income">Income</option>
          <option value="expense">Expense</option>
        </select>

        <input
          type="text"
          name="category"
          placeholder="Category"
          value={formdata.category}
          onChange={handleChange}
        />

        <input
          type="date"
          name="date"
          value={formdata.date}
          onChange={handleChange}
        />

        <button type="submit">Add Transaction</button>

      </form>
    </div>
  );
};

export default AddTransaction;