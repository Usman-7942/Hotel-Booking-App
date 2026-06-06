import React, { useContext } from "react";
import styles from "./TransactionList.module.css";
import { TransactionContext } from "../../Components/TransactionContext/TransactionContext"
const TransactionList = () => {

  const { transactions, setTransactions } = useContext(TransactionContext);

  // DELETE FUNCTION
  const deleteTransaction = (id) => {
    const updated = transactions.filter((item) => item.id !== id);

    setTransactions(updated);

    localStorage.setItem("transactions", JSON.stringify(updated));
  };

  return (
    <div className={styles.transactionlist_container}>
      <h2>🧾 Recent Transactions</h2>

      {transactions.length === 0 ? (
        <p className={styles.empty}>No transactions found</p>
      ) : (
        transactions.map((item) => (
          <div key={item.id} className={styles.list_div}>

            <div className={styles.left_div}>
              <h3>{item.title}</h3>
              <p className={styles.left_para}>{item.type}</p>
            </div>

            <div className={styles.right_div}>
              <h3
                className={
                  item.type === "income"
                    ? styles.income
                    : styles.expense
                }
              >
                {item.type === "income" ? "+" : "-"}${item.amount}
              </h3>

              <button
                className={styles.deletebtn}
                onClick={() => deleteTransaction(item.id)}
              >
                🗑 Delete
              </button>
            </div>

          </div>
        ))
      )}
    </div>
  );
};

export default TransactionList;