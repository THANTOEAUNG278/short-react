import { useCallback } from "react";
import {useForm} from "react-hook-form"


const ModalLogin = ({onClose}) => {
  const {register,handleSubmit,formState:{errors}} = useForm();
  const onSubmit = useCallback(data =>console.log("data",data),[])
  return(
    <div className="py-24 flex items-center justify-center">
      <div className="bg-slate-300 rounded-lg p-8 w-80">
      <h2 className="text-2xl mb-4 text-center font-bold">Login</h2>
        <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>

          <div>
            <label htmlFor="username" className="block text-black">Useremail</label>
          <input
          className="w-full px-3 py-2 text-black border border-gray-300 rounded focus:outline-none focus:ring focus:ring-blue-400"
          type="email" defaultValue="" {...register("username",{required: "! Input Username",pattern: {value:/A-z$/,message:"! Invalud" } })} placeholder="Enter Useremail" />
          <p className="text-red-500">{errors?.username?.message}</p>
          </div>

          <div> 
            <label htmlFor="password" className="block text-black ">Password</label>
            <input
            className="w-full px-3 py-2 border text-black border-gray-300 rounded focus:outline-none focus:ring focus:ring-blue-400"
            type="password" defaultValue="" {...register("password")} placeholder="Enter Password" />
          </div>
          
          <div className="flex items-center justify-between">
            <button className="bg-blue-500 text-white py-2 px-4 rounded focus:outline-none focus:ring focus:ring-blue-400">
              Login</button>
            <label className="text-blue-400">
              <input className="mr-1" type="checkbox" name="remerber"
              />
              Remerber Me
            </label>
          </div>

          <div className="text-right">
            <button className="text-red-600 hover:text-red-500 mr-2 hover:underline" onClick={onClose}>Cancle</button>
            <span>
              <a className="text-blue-500 hover:underline">Forgot Password?</a>
            </span>
          </div>
        </form>
      </div>
    </div>
  )
}
export default ModalLogin;
