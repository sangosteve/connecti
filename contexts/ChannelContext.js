import React, { useState, createContext, useEffect } from "react";
export const ChannelContext = createContext();

export const ChannelProvider = (props) => {
  const [channelId, setChannelId] = useState("");
  return (
    <ChannelContext.Provider value={{ channelId, setChannelId }}>
      {props.children}
    </ChannelContext.Provider>
  );
};
