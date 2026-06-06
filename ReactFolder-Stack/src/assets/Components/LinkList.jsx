import React, { useState } from "react";
import styles from "./LinkList.module.css";

function createNode(value) {
  return {
    value,
    next: null,
  };
}

const LinkList = () => {
  const [list, setList] = useState({
    head: null,
    tail: null,
  });

  const [nodes, setNodes] = useState([]);
  const [count, setCount] = useState(1);

  // =====================================================
  // 🔥 SIMPLE ADD (default → add at tail)
  // =====================================================
  const addNode = () => {
    const newNode = createNode(count);

    if (!list.head) {
      setList({ head: newNode, tail: newNode });
    } else {
      list.tail.next = newNode;

      setList({
        head: list.head,
        tail: newNode,
      });
    }

    setNodes([...nodes, count]);
    setCount(count + 1);
  };

  // =====================================================
  // 🔥 SIMPLE REMOVE (default → remove tail)
  // =====================================================
  const removeNode = () => {
    if (!list.head) return;

    // only one node
    if (list.head === list.tail) {
      setList({ head: null, tail: null });
      setNodes([]);
      return;
    }

    let current = list.head;

    while (current.next !== list.tail) {
      current = current.next;
    }

    current.next = null;

    setList({
      head: list.head,
      tail: current,
    });

    setNodes(nodes.slice(0, -1));
  };

  // =====================================================
  // ADD HEAD
  // =====================================================
  const addHead = () => {
    const newNode = createNode(count);

    newNode.next = list.head;

    setList({
      head: newNode,
      tail: list.tail || newNode,
    });

    setNodes([count, ...nodes]);
    setCount(count + 1);
  };

  // =====================================================
  // ADD TAIL
  // =====================================================
  const addTail = () => {
    addNode();
  };

  // =====================================================
  // ADD AT INDEX
  // =====================================================
  const addAtIndex = (index) => {
    const newNode = createNode(count);

    if (index === 0 || !list.head) {
      addHead();
      return;
    }

    let current = list.head;
    let i = 0;

    while (current && i < index - 1) {
      current = current.next;
      i++;
    }

    if (!current) return;

    newNode.next = current.next;
    current.next = newNode;

    if (current === list.tail) {
      setList({
        head: list.head,
        tail: newNode,
      });
    }

    setNodes([
      ...nodes.slice(0, index),
      count,
      ...nodes.slice(index),
    ]);

    setCount(count + 1);
  };

  // =====================================================
  // REMOVE HEAD
  // =====================================================
  const removeHead = () => {
    if (!list.head) return;

    const newHead = list.head.next;

    setList({
      head: newHead,
      tail: newHead ? list.tail : null,
    });

    setNodes(nodes.slice(1));
  };

  // =====================================================
  // REMOVE TAIL
  // =====================================================
  const removeTail = () => {
    removeNode();
  };

  // =====================================================
  // REMOVE AT INDEX
  // =====================================================
  const removeAtIndex = (index) => {
    if (!list.head) return;

    if (index === 0) {
      removeHead();
      return;
    }

    let current = list.head;
    let i = 0;

    while (current.next && i < index - 1) {
      current = current.next;
      i++;
    }

    if (!current.next) return;

    if (current.next === list.tail) {
      setList({
        head: list.head,
        tail: current,
      });
    }

    current.next = current.next.next;

    setNodes([
      ...nodes.slice(0, index),
      ...nodes.slice(index + 1),
    ]);
  };

  // =====================================================
  // REVERSE
  // =====================================================
  const reverseList = () => {
    if (!list.head || list.head === list.tail) return;

    let prev = null;
    let current = list.head;

    while (current) {
      const next = current.next;

      current.next = prev;
      prev = current;
      current = next;
    }

    setList({
      head: prev,
      tail: list.head,
    });

    setNodes([...nodes].reverse());
  };

  return (
    <div className={styles.container_linklist}>
      {/* DISPLAY */}
      <div className={styles.linklistItems}>
        {nodes.map((item, index) => (
          <div key={index} className={styles.linklist_box}>
            {item}
            {index !== nodes.length - 1 && (
              <span className={styles.arrow}>→</span>
            )}
          </div>
        ))}
      </div>

      {/* ================= SIMPLE CONTROLS ================= */}
      <div>
        <button onClick={addNode}>➕ Add</button>
        <button onClick={removeNode}>➖ Remove</button>
        <button onClick={reverseList}>🔁 Reverse</button>
      </div>

      {/* ================= ADVANCED CONTROLS ================= */}
      <div>
        <button onClick={addHead}>Add Head</button>
        <button onClick={addTail}>Add Tail</button>
        <button onClick={() => addAtIndex(2)}>
          Add Index 2
        </button>

        <button onClick={removeHead}>Remove Head</button>
        <button onClick={removeTail}>Remove Tail</button>
        <button onClick={() => removeAtIndex(2)}>
          Remove Index 2
        </button>
      </div>
    </div>
  );
};

export default LinkList;