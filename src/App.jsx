import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layouts from "./component/Layouts";
import ProductPage from "./pages/Product";
import AboutPage from "./pages/About";
import LoginPage from "./pages/login";

const App = () => {
  return(
    <BrowserRouter>
      <Routes>
        <Route path="/" element = {<Layouts/>} >
          <Route index element = {<ProductPage/>} />
          <Route path="about" element = {<AboutPage/>} />
          <Route path="login" element = {<LoginPage/>} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
export default App;