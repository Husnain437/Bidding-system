import React from 'react'
import './Footer.css';
import { Space } from 'antd';
import {
    FacebookOutlined,
    InstagramOutlined,
    TwitterCircleFilled 
  
} from '@ant-design/icons';


const Footer = () => {
  return (
  <>
    <div className="main-footer font-link">
       <div className="container">
            <div className="row">
                <div className="col-md-2 col-sm-6 heading">
                    <h6>
                        POPULAR CATOGERIS
                    </h6>
                    <ul className='list-unstyled'>
                        <li> Laptops</li>
                        <li> Computers</li>
                        <li> Vehical</li>
                        <li>Mobile Phones</li >
                    </ul>
                </div>
                <div className="col-md-2 col-sm-6 heading">
                    <h6>
                       TRENDING SEARCHS
                    </h6>
                    <ul className='list-unstyled'>
                        <li> Bikes</li>
                        <li> Cars</li>
                        <li> Book</li>
                        <li> Dogs</li >
                    </ul>
                </div>
                <div className="col-md-2 col-sm-6 heading">
                    <h6>
                        ABOUT US
                    </h6>
                    <ul className='list-unstyled'>
                        <li> About BP</li>
                        <li> Contact us</li>
                        <li> Privacy</li>
                        <li> Term and use</li >
                    </ul>
                </div>
                  
                <div className="col-md-2 col-sm-6 heading">
                    <h6>
                        FOLLOW US
                    </h6>
                    <ul className='list-unstyled'>
                    <Space>
                        <InstagramOutlined />
                        <FacebookOutlined />
                        <TwitterCircleFilled />
                        
                    </Space>
                   
                    </ul>
                </div> 
            </div>
            <div className='footer-btm'>
                <p className="text-xs-center">
                    &copy;{new Date().getFullYear()} Bidplacer - All Rights Reserved    
                </p>   
            </div>
            </div>   
    </div>
    </>
  )
}

export default Footer;