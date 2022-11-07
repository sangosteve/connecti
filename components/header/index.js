import React from "react";
import SearchBar from "./SearchBar";
import IconMenu from "./IconMenu";
const style = {
  header:
    "inset-0 z-50 flex items-center justify-between border-b border-[#343536]  h-14 bg-[#252526]",
  wrapper: "flex flex-1 items-center space-x-4  px-5",
  leftHeader: "flex flex-1 items-center space-x-2",
  rightHeader: "flex items-center space-x-8",
};
const Header = () => {
  return (
    <div className={style.header}>
      <div className={style.wrapper}>
        <div className={style.leftHeader}></div>
        <SearchBar />
        <div className={style.rightHeader}>
          <IconMenu />
        </div>
      </div>
    </div>
  );
};

export default Header;
