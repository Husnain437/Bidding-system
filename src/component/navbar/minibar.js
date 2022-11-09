import Container from "react-bootstrap/esm/Container";
import React from "react";
import './minibar.css';
class Minibar extends React.Component{
    render(){
        return(
            <div className='ui secondary pointing menu mini_color ' >
                <Container>
                    <div className="item"> <b>ALL CATEGORIES</b></div>
                    <div className="item" >Antique</div>
                    <div className="item" >Cars</div>
                    <div className="item" >House</div>
                    <div className="item" >Furniture</div>
                    <div className="item" >Clock</div>


                </Container>
            </div>
        )
    }
}
export default Minibar;