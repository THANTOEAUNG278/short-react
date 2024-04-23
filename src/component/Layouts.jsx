import { Outlet } from "react-router-dom"
import NavBar from "./Nav-bar";
import Header from "./Header";

const Layouts = () =>{
  return(
    <div>
      <div>
        <Header/>
      </div>
      <div className="mt-20 flex h-[100vh] overscroll-auto bg">
        <div className=" w-40 bg-slate-200"> 
          <NavBar/>
        </div>
        <div className="flex-auto px-5"> 
          <Outlet/>
        </div>
      </div>
    </div>
  )
}
export default Layouts;