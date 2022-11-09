import React from "react";
import { connect} from 'react-redux';
import { fetchPost, editPosts } from "../../actions";
import { withRouter } from "../withRouter/withRouter";
import PostForm from "./PostForm";


class PostEdit extends React.Component {
  componentDidMount() {
    // this.props.fetchPost(this.props.match.params.id);
    console.log(this?.props);
  }
  onSubmit=(formValues)=>{
   this.props.editPosts(this.props.location.state.post._id, formValues); 
   
  }

  render() {
    if (!this.props.location.state.post) {
      return <div>Loading...</div>;
    }
    return <div>
      <PostForm initialValues={{title:(this.props.location.state.post.title), description:(this.props.location.state.post.description), price:(this.props.location.state.post.price), location:(this.props.location.state.post.location)}} onSubmit={this.onSubmit} />
     
    </div>;
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    posts: Object.values(state.posts),
    currentUserId: state.auth.userId
};

};

export default connect(mapStateToProps, { fetchPost, editPosts })(withRouter(PostEdit))

// class PostEdit extends React.Component{
    
//     componentDidMount(){
//         this.props.fetchPost(this.props.match.params.id);
//     }
   
//     render(){
//     console.log(this.props);  
//     return(
        
        
//         <div>hello</div>
//     )
//     }
    
// }
// const mapStateToProps=(state, ownProps)=>   {
//     console.log(ownProps);
//     return { posts : state.posts[ownProps.match.prams.id] };
// };
// export default connect(mapStateToProps,{fetchPost}) (PostEdit);
// function PostEdit(props){
//     const {id} = useParams();
//     console.log(props)
//     return (
//         <div>PostEdit {id}</div>
//     );
// }
// const mapStateToProps=(state, ownProps)=>   {
     
//         return { post : state.posts 
//             posts: Object.values(state.posts)};  
//      };
//  export default connect(mapStateToProps,{fetchPost}) (PostEdit);