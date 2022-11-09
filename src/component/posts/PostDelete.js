import React from "react";
import { connect } from 'react-redux';
import { withRouter } from "../withRouter/withRouter";
import Modal from "../Modal";
import history from "../../history";
import { fetchPost ,deletePost  } from "../../actions";
import PostForm from "./PostForm";
import {Link} from 'react-router-dom';
function backtohome(){
    history.push('/');
    window.location.reload(false);
}
class PostDelete extends React.Component{
    componentDidMount(){
        console.log(this?.props);
        // this.props.fetchPost(this.props.location.state.post.id);
    }
    renderAction(){
    return(
        <div>
             <button onClick={()=>this.props.deletePost(this.props.location.state.post.id)} className='ui negative button'>Delete</button>
                <Link to='/' className='ui button' > Cancel</Link>
        </div>
    );
    }
    rendertitle(){
        return(
            this.props.location.state.post.title
        )
    }
    renderContent(){
        return(
            `Are you sure You Want to Delete This Post with title: ${this.props.location.state.post.title}`
        )
    }
    render(){
          
        return(
            
            
                
                <Modal
                title="Delete Post"
                contect={this.renderContent()}
                action={this.renderAction()} 
                onDismiss={()=>backtohome()}
                
            
                />
                
            
        )
    }
    
    
};
const mapStateToProps = (state, ownProps) => {
    return {
      post: Object.values(state.posts),
      currentUserId: state.auth.userId
  };
  
  };

export default connect(mapStateToProps, { fetchPost, deletePost })(withRouter(PostDelete));