import { Navigate } from "react-router-dom"

const token =""
const ProductRoute =({children})=>{
  if(!token) {
    return (
      <Navigate to={"/login"}/>
    )
  }
  return (children)

}
export default ProductRoute;