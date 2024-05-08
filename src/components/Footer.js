import React from "react";
import styles from "./Footer.css"
import pic from "../logo.svg"



function Footer() {
  return (
    <div><br />
    <p style={{ textAlign: "center", color: "red", fontSize: "16px"}}>Webdesign | James React Design
    <img src={pic} ClassName="styles.reactlogo" class="reactlogo"></img>
    </p>
    </div>
  )
}

export default Footer;