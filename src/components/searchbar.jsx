import React from "react";
import styles from "../styles/GoogleSearchBar.module.css";
import { FaSearch, FaMicrophone, FaCamera } from "react-icons/fa";

function GoogleSearchBar() {
  return (
    <div className={styles.searchBar}>
      <FaSearch className={styles.icon} />
      <input
        type="text"
        className={styles.input}
        placeholder="Search Google or type a URL"
      />
      <FaMicrophone className={styles.icon} />
      <FaCamera className={styles.icon} />
      <button className={styles.aiButton}>AI Mode</button>
    </div>
  );
}

export default GoogleSearchBar;