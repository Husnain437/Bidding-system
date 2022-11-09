import React from 'react';
import ActionAreaCard from '../../component/card/ActionAreaCard';
import "./home.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import Banner from "../../Assests/icons/Asset 4.png";
import Footer from "../../component/footer/Footer";
import PostList from '../../component/posts/PostList';
import { withRouter } from '../../component/withRouter/withRouter';
import vanner from "../../Assests/245178240-800x600.jpg";
import vanner2 from "../../Assests/Bp.png"

const Home = (props) => {
  console.log(props,'yyyyyyyy');
  console.log(props.cityVal, 'hahahahh');
  const city= props.cityVal;
  const product= props.productVal;
  
  return (
  <div >
    
      {/* <img src={Banner}/> */}
      <img  className='banner'  src={vanner}/>
     
      <div className='Item_Card'><PostList searchedCity={props.cityVal} searchedproduct={props.productVal} /></div>
      
      <img  className='banner'  src={vanner2}/>
  
    
    </div>
  )
}

export default (withRouter(Home));