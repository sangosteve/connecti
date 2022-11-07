import React from "react";
import { FiPlus, FiChevronDown } from "react-icons/fi";

const style = {
  wrapper: "w-full px-4 py-6 flex items-center justify-between  text-white",
  left: "flex items-center text-white",
};
const SideMenuHeader = () => {
  const companyName = "konekta";
  return (
    <div className={style.wrapper}>
      <span className={style.left}>
        konekta
        <FiChevronDown />
      </span>
      <FiPlus />
    </div>
  );
};

export default SideMenuHeader;
