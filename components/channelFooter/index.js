import React, { useContext, useState } from "react";
import styles from "../../styles/ChannelFooter.module.css";
import { MdSend } from "react-icons/md";
import { FiLink, FiCode, FiList, FiPaperclip, FiSmile } from "react-icons/fi";
import { ChannelContext } from "../../contexts/ChannelContext";
const ChannelFooter = () => {
  const [messageText, setMessageText] = useState("");
  const { channelId, setChannelId } = useContext(ChannelContext);
  const sendMessage = async () => {
    const data = {
      sender_id: "ef25e732-91d8-4c19-b918-817cbe8ed007",
      channelId: channelId,
      texte: messageText,
    };
    const res = await fetch("http://localhost:3000/api/messages/new", {
      method: "POST", // or 'PUT'
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Success:", data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });

    console.log(res);
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.input_wrapper}>
        <input
          className={styles.input}
          placeholder="Write to channel..."
          onChange={(e) => setMessageText(e.target.value)}
        />
        <div className={styles.input_options}>
          <div className="flex">
            <div className="w-8 h-8 flex align-middle items-center justify-center rounded-sm hover:bg-black hover:cursor-pointer">
              Aa
            </div>
            <div className="w-8 h-8 flex align-middle items-center justify-center rounded-sm hover:bg-black hover:cursor-pointer">
              B
            </div>
            <div className="w-8 h-8 italic flex align-middle items-center justify-center rounded-sm hover:bg-black hover:cursor-pointer">
              I
            </div>
            <div className="w-8 h-8 flex align-middle items-center justify-center rounded-sm hover:bg-black hover:cursor-pointer">
              H
            </div>
            <div className="w-8 h-8 flex align-middle items-center justify-center rounded-sm hover:bg-black hover:cursor-pointer">
              <FiLink />
            </div>
            <div className="w-8 h-8 flex align-middle items-center justify-center rounded-sm hover:bg-black hover:cursor-pointer">
              <FiCode />
            </div>
            <div className="w-8 h-8 flex align-middle items-center justify-center rounded-sm hover:bg-black hover:cursor-pointer">
              <FiList />
            </div>
            <div className="w-8 h-8 flex align-middle items-center justify-center rounded-sm hover:bg-black hover:cursor-pointer">
              <FiPaperclip />
            </div>
            <div className="w-8 h-8 flex align-middle items-center justify-center rounded-sm hover:bg-black hover:cursor-pointer">
              <FiSmile />
            </div>
          </div>
          <button className={styles.btn_send} onClick={sendMessage}>
            <MdSend size={16} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChannelFooter;
