import React, { useState, useEffect } from "react";
import SideMenuHeader from "./SideMenuHeader";
import Accordion from "./accordion";
import Link from "next/link";
import { BsChatRightText, BsFilter } from "react-icons/bs";
import { FiFilter, FiSearch } from "react-icons/fi";
const Sidebar = () => {
  const [channels, setChannels] = useState([]);
  const fetchChannels = async () => {
    const res = await fetch("http://localhost:3000/api/channels/fetchall");
    const data = await res.json();
    // console.log("data", data);
    setChannels(data);
  };
  useEffect(() => {
    fetchChannels();
  }, []);
  return (
    <div className="side-menu w-64   border-r border-[#343536]  bg-[#252526]">
      <SideMenuHeader />

      <div className="search-field w-full h-8 px-4 flex hover:cursor-pointer">
        <div className="w-8 h-8 flex items-center justify-center  rounded-sm bg-black">
          <BsFilter />
        </div>
        <div className="ml-2 w-full h-8 rounded-sm px-2 flex align-middle items-center  bg-black">
          <FiSearch />
          <small className="ml-2">Find channel</small>
        </div>
      </div>

      <div className="w-full px-6 mb-4 mt-4 py-2 hover:bg-black hover:cursor-pointer">
        <Link className="flex align-middle items-center " href="/threads">
          <BsChatRightText size={14} />
          <p className="ml-2">Threads</p>
        </Link>
      </div>
      <Accordion channels={channels} />
    </div>
  );
};

export default Sidebar;
