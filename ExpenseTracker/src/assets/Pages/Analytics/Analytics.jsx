import React, { useContext } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer
} from "recharts";

import styles from "./Analytics.module.css";
import { TransactionContext } from "../../Components/TransactionContext/TransactionContext";

const Analytics = () => {

  const { transactions } = useContext(TransactionContext);

  // TOTAL INCOME
  const income = transactions
    .filter(t => t.type === "income")
    .reduce((acc, t) => acc + t.amount, 0);

  // TOTAL EXPENSE
  const expense = transactions
    .filter(t => t.type === "expense")
    .reduce((acc, t) => acc + t.amount, 0);

  // BAR CHART DATA (X-Y AXIS)
  const barData = [
    { name: "Income", amount: income },
    { name: "Expense", amount: expense }
  ];

  // PIE CHART DATA
  const pieData = [
    { name: "Income", value: income },
    { name: "Expense", value: expense }
  ];

  const COLORS = ["#22c55e", "#ef4444"];

  return (
    <div className={styles.analytics_container}>

      <h2>📊 Analytics Dashboard</h2>

      <div className={styles.charts}>

        {/* BAR CHART (X-Y AXIS) */}
        <div className={styles.chart_box}>
          <h3>Income vs Expense (Bar Chart)</h3>

          <ResponsiveContainer width="100%" height={250}>
            <BarChart data={barData}>
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="amount" fill="#3b82f6" />
            </BarChart>
          </ResponsiveContainer>

        </div>

        {/* PIE CHART */}
        <div className={styles.chart_box}>
          <h3>Distribution</h3>

          <ResponsiveContainer width="100%" height={250}>
            <PieChart>
              <Pie
                data={pieData}
                dataKey="value"
                outerRadius={80}
                label
              >
                {pieData.map((_, index) => (
                  <Cell key={index} fill={COLORS[index]} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>

        </div>

      </div>

    </div>
  );
};

export default Analytics;