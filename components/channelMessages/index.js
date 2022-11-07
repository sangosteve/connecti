import React, { useState, useEffect, useContext } from "react";
import MessageCard from "./MessageCard";
import { ChannelContext } from "../../contexts/ChannelContext";
import supabase from "../../supabase.config";
const style = {
  wrapper: "w-full h-full pb-32 bg-slate-50 overflow-y-auto bg-inherit",
};

const ChannelMessages = () => {
  const { channelId } = useContext(ChannelContext);
  const [channelMessages, setChannelMessages] = useState([]);
  const fetchChannelMessages = async () => {
    const res = await fetch(
      `http://localhost:3000/api/channels/messages?channelId=${channelId}`
    );
    const data = await res.json();
    setChannelMessages(data);
  };
  useEffect(() => {
    fetchChannelMessages();
  }, [channelId]);

  //subscribe to changes
  useEffect(() => {
    console.log("use effect running...");
    const subscription = supabase
      .channel("messages")
      .on("*", (payload) => {
        console.log("PAYLOAD", payload);
      })
      .subscribe();

    return () => {
      // supabase.removeSubscription(subscription);
      supabase.removeChannel(subscription);
    };
  }, []);
  return (
    <div className={style.wrapper}>
      {channelMessages.map((message) => (
        <MessageCard key={message?.id} message={message} />
      ))}
    </div>
  );
};

export default ChannelMessages;
