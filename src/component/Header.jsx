import Icon from "./base/Icon";
import { VscAccount } from "react-icons/vsc";
import Logo from "./base/Logo";
import { useState } from "react";
import ModalLogin from "../pages/ModalLogin";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div className="fixed top-0 left-0 right-0 bg-slate-600 w-full z-10 text-white font-bold ">
      <div className="flex justify-between items-center h-20 mx-20">
        <Logo>
          LoGo
        </Logo>
        <Icon>
          <NavLink to={"login"}> <VscAccount/> </NavLink>
        </Icon>
      </div>
    </div>
  )
}
export default Header;