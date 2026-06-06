import React, { useState, useContext } from "react";
import styles from "./EditTransaction.module.css";
import { TransactionContext } from "../../Components/TransactionContext/TransactionContext"

const EditTransaction = () => {

  const { transactions, setTransactions } = useContext(TransactionContext);

  const [editId, setEditId] = useState(null);

  const [editData, setEditData] = useState({
    title: "",
    amount: "",
    type: "expense",
    category: "",
    date: ""
  });

  // OPEN EDIT
  const handleEdit = (item) => {
    setEditId(item.id);
    setEditData(item);
  };

  // INPUT CHANGE
  const handleChange = (e) => {
    const { name, value } = e.target;

    setEditData({
      ...editData,
      [name]: name === "amount" ? Number(value) : value
    });
  };

  // SAVE UPDATE
  const handleSave = () => {
    const updated = transactions.map((item) =>
      item.id === editId ? editData : item
    );

    setTransactions(updated);

    localStorage.setItem("transactions", JSON.stringify(updated));

    setEditId(null);
  };

  return (
    <div className={styles.container}>
      <h2>🧾 Transactions</h2>

      {/* LIST */}
      {transactions.map((item) => (
        <div key={item.id} className={styles.card}>
          <div>
            <h3>{item.title}</h3>
            <p>{item.type}</p>
          </div>

          <div className={styles.right}>
            <h3>
              {item.type === "income" ? "+" : "-"}${item.amount}
            </h3>

            <button
              onClick={() => handleEdit(item)}
              className={styles.editbtn}
            >
              ✏ Edit
            </button>
          </div>
        </div>
      ))}

      {/* MODAL */}
      {editId && (
        <div className={styles.modalOverlay}>
          <div className={styles.modal}>
            <h3>Edit Transaction</h3>

            <input
              name="title"
              value={editData.title}
              onChange={handleChange}
              placeholder="Title"
            />

            <input
              name="amount"
              type="number"
              value={editData.amount}
              onChange={handleChange}
              placeholder="Amount"
            />

            <select
              name="type"
              value={editData.type}
              onChange={handleChange}
            >
              <option value="income">Income</option>
              <option value="expense">Expense</option>
            </select>

            <input
              name="category"
              value={editData.category}
              onChange={handleChange}
              placeholder="Category"
            />

            <input
              name="date"
              type="date"
              value={editData.date}
              onChange={handleChange}
            />

            <div className={styles.buttons}>
              <button onClick={handleSave} className={styles.save}>
                Save
              </button>

              <button
                onClick={() => setEditId(null)}
                className={styles.cancel}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default EditTransaction;