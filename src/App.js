import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from "./component/navbar/NavBars";
import About from "./pages/about/About";
import Home from "./pages/home/Home";
import SignUp from "./pages/profile/signUp/signUp";
import Login from "./pages/profile/login/Login"
import Footer from "./component/footer/Footer";
import ProductDetails from "./pages/product/ProductDetails";

import ActionAreaCard from "./component/card/ActionAreaCard";
import PostList from "./component/posts/PostList";
import history from "./history";
import './App.css';
import PostEdit from "./component/posts/PostEdit";
import { withRouter } from "./component/withRouter/withRouter";
import PostCreate from "./component/posts/PostCreate";
import PostDelete from "./component/posts/PostDelete";
import Countdown from "./component/Countdown/Countdown";
import UserDashboard from "./pages/dashboard/user/UserDashboard";
import Minibar from "./component/navbar/minibar";

function App() {
  const [cityVal, setCityVal] = React.useState('')
  const [productVal, setProductVal] = React.useState('')
  const cityValFunction = (cityVal) => {
    console.log(cityVal, 'cityVal');
    setCityVal(cityVal)
    
  }
  const productValFunction =(productVal)=>{
    console.log(productVal, 'product value');
    setProductVal(productVal)
  }
  return (


    <React.Fragment>
      <div className="nav_bar"><Navbar cityVal={(cityVal => cityValFunction(cityVal))} productVal={(productVal=> productValFunction(productVal))} /></div>
      <div className="mini_bar" ><Minibar /></div>

      <Routes>

        <Route path="/" element={<Home cityVal={cityVal} productVal={productVal}/>} />
        <Route path="/about" element={<About />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/productdetails/:id" element={<ProductDetails />} />
        <Route path="/salePost" element={<PostCreate />} />
        <Route path="/edit/:id" element={<PostEdit />} />
        <Route path="/postdelete/:id" element={<PostDelete />} />
        <Route path="/PostList" element={<PostList  />} />
        <Route path="/countdown" element={<Countdown />} />
        <Route path="/userdashbord" element={<UserDashboard cityVal={cityVal} productVal={productVal}/>} />

      </Routes>
      <div className="bot_fot"><Footer /></div>



    </React.Fragment>
  );
}
export default withRouter(App);
