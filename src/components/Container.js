import React from "react";
import mainpic from "../images/mainpic.jpeg"
import styles from "./Container.css";

function Container() {
  return <img src={mainpic} alt="" className={styles.mainpic} class="mainpic" />;

}

export default Container;