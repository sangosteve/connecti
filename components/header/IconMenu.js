import React, { useState } from "react";
import supabase from "../../supabase.config";
import { FiSettings, FiBell } from "react-icons/fi";
const style = {
  wrapper: "w-full h-full flex items-center",
  icon: "p-2 bg-[#272729] text-white",
  avatar:
    "w-10 h-10 rounded-full bg-[#007ACC] text-white flex items-center justify-center text-base font-bold",
};

const IconWrapper = ({ children }) => (
  <span className={style.icon}>{children}</span>
);

const IconMenu = () => {
  // console.log(
  //   supabase.auth.getUser().then((res) => console.log(res.data?.user?.email))
  // );
  const [user, setUser] = useState(null);
  const getUser = async () => {
    const res = await supabase.auth
      .getUser()
      .then((res) => setUser(res.data.user));
  };

  getUser();

  // console.log("user", user?.email);
  return (
    <div className={style.wrapper}>
      <IconWrapper>
        <FiBell />
      </IconWrapper>
      <IconWrapper>
        <FiSettings />
      </IconWrapper>

      <div className={style.avatar}>{user?.email.charAt(0).toUpperCase()}</div>
    </div>
  );
};

export default IconMenu;
