import React, { createContext, useState, useEffect } from "react";

// 1. Create Context
export const TransactionContext = createContext();

// 2. Provider Component
export const TransactionProvider = ({ children }) => {

  const [transactions, setTransactions] = useState([]);

  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("all");
  const [sort, setSort] = useState("latest");

  // LOAD FROM LOCALSTORAGE
  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("transactions"));
    if (saved) {
      setTransactions(saved);
    }
  }, []);

  // SAVE TO LOCALSTORAGE
  useEffect(() => {
    localStorage.setItem("transactions", JSON.stringify(transactions));
  }, [transactions]);

  return (
    <TransactionContext.Provider
      value={{
        transactions,
        setTransactions,
        search,
        setSearch,
        filter,
        setFilter,
        sort,
        setSort
      }}
    >
      {children}
    </TransactionContext.Provider>
  );
};