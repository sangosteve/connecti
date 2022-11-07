import React, { useEffect } from "react";
import ChannelHeader from "../../components/channelHeader";
import ChannelFooter from "../../components/channelFooter";
import ChannelMessages from "../../components/channelMessages";
import styles from "../../styles/ChannelPage.module.css";
import supabase from "../../supabase.config";
const Channel = () => {
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
    <div className={styles.wrapper}>
      <ChannelHeader />
      <ChannelMessages />
      <ChannelFooter />
    </div>
  );
};

export default Channel;
Channel.getLayout = function PageLayout(page) {
  return <>{page}</>;
};
