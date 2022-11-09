import React from "react";
import PostList from "../../../component/posts/PostList";
import './UserDashboard.css'
const   UserDashboard =(props)=>{
    
    const city= props.cityVal;
    const product= props.productVal;
    return(
        <div>
            <h2 className='dash-heading font-link '>UserDashboard</h2>
            <hr/>
            <PostList searchedCity={props.cityVal} searchedproduct={props.productVal}/>
        </div>
        
    )
}
export default UserDashboard;