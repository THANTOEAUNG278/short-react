import Icon from "./base/Icon";
import { VscAccount } from "react-icons/vsc";
import Logo from "./base/Logo";
import { useState } from "react";
import ModalLogin from "../pages/ModalLogin";

const Header = () => {
  const [showModal,setshowModal] = useState(false);
  return (
    <div className="fixed top-0 left-0 right-0 bg-slate-600 w-full z-10 text-white font-bold ">
      <div className="flex justify-between items-center h-20 mx-20">
        <Logo>
          LoGo
        </Logo>
        <Icon>
          <a href="#" onClick={()=>setshowModal(true)}><VscAccount/></a>
        </Icon>
      </div>
      {showModal && <ModalLogin onClose={()=>setshowModal(false)}/>}
    </div>
  )
}
export default Header;