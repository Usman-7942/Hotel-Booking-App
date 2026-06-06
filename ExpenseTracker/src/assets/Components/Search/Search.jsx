import React, { useState, useContext } from "react";
import styles from "./Search.module.css";
import { TransactionContext } from "../../Components/TransactionContext/TransactionContext"

const Search = () => {

  const { transactions, setTransactions } = useContext(TransactionContext);

  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("all");
  const [sort, setSort] = useState("latest");

  // DELETE
  const deleteTransaction = (id) => {
    const updated = transactions.filter((item) => item.id !== id);
    setTransactions(updated);

    localStorage.setItem("transactions", JSON.stringify(updated));
  };

  // FILTER + SEARCH + SORT
  const filteredData = transactions
    .filter((item) =>
      item.title.toLowerCase().includes(search.toLowerCase())
    )
    .filter((item) =>
      filter === "all" ? true : item.type === filter
    )
    .sort((a, b) => {
      if (sort === "high") return b.amount - a.amount;
      if (sort === "low") return a.amount - b.amount;
      if (sort === "oldest") return a.id - b.id;
      return b.id - a.id; // latest
    });

  return (
    <div className={styles.container}>

      {/* SEARCH */}
      <input
        type="text"
        placeholder="🔍 Search transactions..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className={styles.search}
      />

      {/* FILTER */}
      <div className={styles.filters}>
        <button
          onClick={() => setFilter("all")}
          className={filter === "all" ? styles.active : ""}
        >
          All
        </button>

        <button
          onClick={() => setFilter("income")}
          className={filter === "income" ? styles.active : ""}
        >
          Income
        </button>

        <button
          onClick={() => setFilter("expense")}
          className={filter === "expense" ? styles.active : ""}
        >
          Expense
        </button>
      </div>

      {/* SORT */}
      <select
        value={sort}
        onChange={(e) => setSort(e.target.value)}
        className={styles.sort}
      >
        <option value="latest">Latest</option>
        <option value="oldest">Oldest</option>
        <option value="high">Highest Amount</option>
        <option value="low">Lowest Amount</option>
      </select>

      {/* LIST */}
      <div className={styles.list}>
        {filteredData.map((item) => (
          <div key={item.id} className={styles.card}>

            <div>
              <h3>{item.title}</h3>
              <p>{item.type}</p>
            </div>

            <div className={styles.right}>
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
                onClick={() => deleteTransaction(item.id)}
                className={styles.deletebtn}
              >
                🗑
              </button>
            </div>

          </div>
        ))}
      </div>

    </div>
  );
};

export default Search;