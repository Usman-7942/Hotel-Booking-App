import React, { useState } from "react";
import styles from "./LinkList.module.css";

// ---------- NODE ----------
function createNode(value) {
  return {
    value,
    next: null,
    prev: null
  };
}

const DoublyLinkList = () => {

  const [list, setList] = useState({
    head: null,
    tail: null
  });

  const [nodes, setNodes] = useState([]);
  const [count, setCount] = useState(1);

  // ---------- ADD NODE ----------
  const addNode = () => {

    const newNode = createNode(count);

    if (!list.head) {
      setList({
        head: newNode,
        tail: newNode
      });
    } else {

      // connect old tail → new node
      list.tail.next = newNode;

      // connect new node → old tail (BACK LINK)
      newNode.prev = list.tail;

      setList({
        head: list.head,
        tail: newNode
      });
    }

    setNodes([...nodes, count]);
    setCount(count + 1);
  };

  // ---------- REMOVE LAST NODE ----------
  const removeNode = () => {

    if (!list.head) return;

    // only one node
    if (list.head === list.tail) {
      setList({ head: null, tail: null });
      setNodes([]);
      return;
    }

    const newTail = list.tail.prev;
    newTail.next = null;

    setList({
      head: list.head,
      tail: newTail
    });

    setNodes(nodes.slice(0, -1));
  };

  return (
    <div className={styles.container}>

      {/* DISPLAY */}
      <div className={styles.list}>
        {nodes.map((item, index) => (
          <div key={index} className={styles.node}>
            {item}

            {index !== nodes.length - 1 && (
              <span> ⇄ </span>
            )}
          </div>
        ))}
      </div>

      {/* BUTTONS */}
      <button onClick={addNode}>Add</button>
      <button onClick={removeNode}>Remove</button>

    </div>
  );
};

export default DoublyLinkList;