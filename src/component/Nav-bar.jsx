import { NavLink } from "react-router-dom"

const NavBar = () => {
  return (
    <div className="flex flex-col items-center justify-center ">
      <NavLink className=" hover:bg-black hover:text-white p-3 w-full" to={"/"}>Product</NavLink>
      <NavLink className="hover:bg-black hover:text-white p-3 w-full" to={"about"}>About</NavLink>
    </div>
  )
}
export default NavBar;