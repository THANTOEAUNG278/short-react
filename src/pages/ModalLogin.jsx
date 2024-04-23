import { useState } from "react";

const ModalLogin = ({onClose}) =>{
  const {username,setUserName} = useState('');
  const {password, setPassword} = useState('');
  return (
    <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50">
      <div className="bg-white rounded-lg p-8 w-80">
        
        <form className="space-y-4">
        <span onClick={onClose} className="text-red-600 absolute top-[28%] right-[39%] hover:scale-[0.9] cursor-pointer text-xl">&times;</span> 
          <div>
            <label htmlFor="username" className="block text-slate-500">Email</label>
            <input type="email" id="username" name="username" placeholder="Email Adress"
            className="w-full px-3 py-2 border text-slate-600 border-gray-300 rounded focus:ring focus:ring-blue-600"
            value={username} onChange={e => setUserName(e.target.value)} required 
            />
          </div>

          <div>
            <label htmlFor="password" className="block text-slate-500">Password</label>
            <input type="text" id="password" name="password" placeholder="Enter Password" 
            className="w-full px-3 py-2 border text-slate-600 border-gray-300 rounded focus:ring focus:ring-blue-600"
            value={password} onChange={e =>setPassword(e.target.value)} required
            />
          </div>

          <div className="flex items-center justify-between">
            <button type="submit"
            className="bg-slate-500 text-white py-2 px-4 rounded focus:outline-none focus:ring focus:ring-blue-400"
            >Login</button>
            <label className="text-sm text-slate-500 ml-1 underline flex items-center justify-center hover:text-red-500 ">
              <input type="checkbox" name="remember" className="" />
              Remember me</label>
          </div>

          <div>
            <span className="ml-2 text-sm text-gray-500 hover:text-white flex items-center justify-center">
              <a href="#" className="text-slate-500 hover:underline hover:text-red-400">Forgot password?</a>
            </span>
          </div>
        </form>
      </div>
    </div>
  )
}
export default ModalLogin;