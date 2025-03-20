import React from "react";
import SideBar from "../../Utility/SideBar";
import { AiOutlineDashboard } from "react-icons/ai";
import { FaBook, FaUsers } from "react-icons/fa";
import { BiCategory } from "react-icons/bi";
import { MdShoppingCart } from "react-icons/md";
import { IoSettingsOutline } from "react-icons/io5";
import { FiLogOut } from "react-icons/fi";
function MySideBar() {
  const sidebarItems = [
    { title: "Dashboard", icon: <AiOutlineDashboard size={22} /> },
    { title: "Books", icon: <FaBook size={22} /> },
    { title: "Categories", icon: <BiCategory size={22} /> },
    { title: "Orders", icon: <MdShoppingCart size={22} /> },
    { title: "Users", icon: <FaUsers size={22} /> },
    { title: "Settings", icon: <IoSettingsOutline size={22} /> },
    {
      title: "Logout",
      icon: <FiLogOut size={20} />,
      className: "text-red-400 hover:bg-red-600",
    },
  ];
  return (
    <div>
      <SideBar sidebarItems={sidebarItems}/>
    </div>
  );
}

export default MySideBar;
