import React from "react";
import styles from "../../styles/MessageCard.module.css";
import moment from "moment";
const style = {
  wrapper: "px-2 w-80 h-10 flex items-start justify-start my-8",
  avatar: "w-12 h-10 bg-slate-300 rounded-md",
  details_wrapper: "px-2 w-full flex flex-col",
  top: "w-32 flex items-start justify-between text-start",
  bottom: "w-full",
};

const MessageCard = ({ message }) => {
  return (
    <>
      <div className={styles.wrapper}>
        <div className={styles.avatar}></div>
        <div className={styles.details_wrapper}>
          <div className={styles.top}>
            <small className="text-base font-bold">
              {message?.users?.email?.split("@")[0]}
            </small>
            <small className="mx-2">
              {moment(message?.created_at).startOf("hour").fromNow()}
            </small>
          </div>
          <div className={styles.bottom}>{message?.texte}</div>
        </div>
      </div>
    </>
  );
};

export default MessageCard;
