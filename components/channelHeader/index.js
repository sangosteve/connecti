import React from "react";
import styles from "../../styles/ChannelHeader.module.css";
import { FiChevronDown } from "react-icons/fi";
const ChannelHeader = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.left}>
        <p className={styles.channel_name}>
          Default <FiChevronDown />
        </p>
      </div>
    </div>
  );
};

export default ChannelHeader;
