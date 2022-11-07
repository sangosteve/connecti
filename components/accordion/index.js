import React, { useState, useContext } from "react";
import { FiChevronRight, FiHash } from "react-icons/fi";
import Link from "next/link";
import { ChannelContext } from "../../contexts/ChannelContext";
const Accordion = ({ channels }) => {
  const { channelId, setChannelId } = useContext(ChannelContext);
  const [open, setOpen] = useState(false);
  console.log("ch-id", channelId);

  return (
    <div className={`w-full `}>
      <div
        className={`w-full flex items-center cursor-pointer`}
        onClick={
          //() => console.log("hey")
          () => {
            setOpen((open) => !open);
            console.log(open);
          }
        }
      >
        <FiChevronRight />
        <span className="px-2 text-sm font-bold">CHANNELS</span>
      </div>

      <ul
        // className={`px-6 max-h-${
        //   open ? 96 : 0
        // }  overflow-hidden  transition-[max-height] duration-150 ease-linear`}
        className={`max-h-${
          open ? 96 : 0
        } overflow-hidden transition-[max-height] duration-150 ease-linear`}
      >
        {channels?.map((channel) => (
          <li
            className="text-sm py-1 px-6  w-full hover:bg-black"
            key={channel.id}
            onClick={() => setChannelId(channel.id)}
          >
            <Link
              className="flex items-center hover:cursor-pointer py-1 text-base"
              href={`/channels/${channel.name}`}
            >
              <FiHash />
              <small className="ml-2">{channel.name}</small>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Accordion;
