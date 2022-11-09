import React, { Component } from 'react';
import "./navbar.css";
import { Link } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import { Navbar, Nav } from "react-bootstrap";
import Logo from "../../Assests/icons/Asset 1.png"
import Searchbar from '../SearchBars/Searchbar';
import GoogleAuth from '../GoogleAuth';
import 'antd/dist/antd.css';
import Box from '@mui/material/Box';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import { TextField } from '@mui/material';
import { connect } from 'react-redux';
import PostList from '../posts/PostList';

class NavBars extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      city: '',
      product:'',
    };

  }
  loginchecker() {
    if (this.props.isSignedIn) {
      window.location.href = '/salePost'
    }
    else
      window.location.href = '/Login'
  }

  render() {
    const handleCityInputChange = event => {
      // setTextInput(event.target.value);
      this.setState({ city: event.target.value })
      this.props.cityVal(event.target.value)
      console.log(event.target.value);
    

    };
   
  const handleTextInputChange = event => {
      this.setState({product : event.target.value});
      this.props.productVal(event.target.value)
      console.log(event.target.value);
      
  };
    


    return (

      <div className='ui secondary pointing menu color  ' >
        <Container>
          <div className='item'>  <img src={Logo} alt="Logo" /></div>
          <Link to="/" className='item'> <h1>BidPlacer</h1> </Link>
          <div className='item '> <TextField
            id="outlined-name"
            label="City"
            onChange={handleCityInputChange}
            
          />
          </div>
          <div className='item'>
          <Box
                  sx={{
                    width: 500,
                    maxWidth: '100%',
                    
                  }}
                >
               <TextField fullWidth label="Search" id="fullWidth"   onChange= {handleTextInputChange} />
      
         </Box>
          </div>
          <div className=' menu right'>

            <Link to='/login' className='item' ><AccountCircleOutlinedIcon sx={{ fontSize: 40 }} color="action" /></Link>

            <div className='item'>
              <button className='Sell-btn' onClick={event => this.loginchecker()}>+SELL</button>

            </div>
            <div className='item'>
              <GoogleAuth />
            </div>

          </div>
        </Container>

      </div>

    )
  }
}
const mapStateToProps = (state) => {
  return {
    isSignedIn: state.auth.isSignedIn
  };

};
export default connect(mapStateToProps)(NavBars);