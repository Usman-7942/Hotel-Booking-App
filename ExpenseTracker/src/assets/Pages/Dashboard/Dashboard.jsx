import React from "react";
import styles from "./Dashboard.module.css";

import Navbar from "../../components/Navbar/Navbar";
import SummaryCards from "../../components/SummaryCards/SummaryCards";
import AddTransaction from "../../components/AddTransaction/AddTransaction";
import Search from "../../components/Search/Search";
import TransactionList from "../../components/TransactionList/TransactionList";
import Analytics from "../Analytics/Analytics";

const Dashboard = () => {
  return (
    <div className={styles.dashboard}>

      <Navbar />

      <div className={styles.container}>

        <SummaryCards />

        <Analytics />

        <AddTransaction />

        <Search />

        <TransactionList />

      </div>

    </div>
  );
};

export default Dashboard;