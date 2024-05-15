import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layouts from "./component/Layouts";
import ProductPage from "./pages/Product";
import AboutPage from "./pages/About";
import LoginPage from "./pages/login";
import ProductRoute from "./component/ProductRoute";

const App = () => {
  return(
    <BrowserRouter>
      <Routes>
        <Route path="/" element = {<Layouts/>} >
          <Route index element = {<ProductRoute><ProductPage/></ProductRoute>} />
          <Route path="about" element = {<ProductRoute><AboutPage/></ProductRoute>} />
          <Route path="login" element = {<LoginPage/>} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
export default App;