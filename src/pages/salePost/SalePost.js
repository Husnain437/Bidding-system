import React from "react";
import './SalePost.css';
import { connect } from 'react-redux';
import { postCreate} from '../../actions';
import PostForm from "../../component/posts/PostForm";

class SalePost extends React.Component{
 

    
      onSubmit=(formValues)=>{
        this.props.postCreate(formValues);
      }
    
      render() {
        return (
        <>
        
          <div className="sale">
            <PostForm onSubmit={this.onSubmit} />

          </div>
          
          </>
        );
      }
    }
    
    


    export default connect(null,{postCreate})(SalePost);