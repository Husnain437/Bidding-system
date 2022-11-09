
import { Delete, Edit } from '@mui/icons-material';
import React from 'react'
import { connect } from 'react-redux';

import { fetchPosts } from '../../actions';
import ActionAreaCard from '../card/ActionAreaCard';
import { withRouter } from '../withRouter/withRouter';


import './PostList.css';
class PostList extends React.Component {
    state = {
        citySearch: '',
        productSearch: ''
    }
    componentDidMount() {
        this.props.fetchPosts();
        console.log(this.props)
        console.log(this.props, 'asdf');
        // this.setState({
        //     citySearch: this.props.searchedCity,
        //     productSearch: this.props.productSearch
        // })
        

    }

    renderAdmin(post) {
        const url = this.props.location.pathname;   
        if (post.userId === this.props.currentUserId && url === '/userdashbord') {
       
            return (
                <div className='right floated content' >
                    <Edit
                        onClick={() => this.props.history(`/edit/${post._id}`, {
                            state: { post }
                        })}
                        style={{ color: 'black' }} />
                    <Delete
                        onClick={() => this.props.history(`/postdelete/${post.id}`, { state: { post } })}
                        style={{ color: 'black' }} />
                </div>
            )
                    }
    }
    renderList() {
       
        const url = this.props.location.pathname;
        return this.props.posts.filter((item => item.title && item.location)).map(post => {

            if (post.userId === this.props.currentUserId && url === '/userdashbord') {
                
                return (
                    

                    <ActionAreaCard post={post} title={post.title} description={post.description} price={post.price} image={post.image} button={this.renderAdmin(post)} />
                        
                );
            
            }
            else if  ((post.title.toLowerCase().includes(this.props.searchedproduct.toLowerCase()) && this.props.searchedproduct !== '') || (post.location.toLowerCase().includes(this.props.searchedCity.toLowerCase()) && this.props.searchedCity !== '')) {
              
                return (

                    <ActionAreaCard post={post} title={post.title} description={post.description} image={post?.image} price={post.price} />
                )
            
                }
            else if(this.props.searchedproduct == '' && this.props.searchedCity == ''){
             
              if(url==='/userdashbord'){
                return(
                    null
                )

              }
              else{
                return (

                    <ActionAreaCard post={post} title={post.title} description={post.description} image={post?.image} price={post.price} />
                )
              }
            }
       


        });
    }
   

    render() {
      
        return (
            <div className='xyz font-link' >
                <h2>Avaiable Products</h2>

                <div className='abc' >

                    {this.renderList()}
                </div>

            </div>
        );


    }
}

const mapStateToProps = (state) => {
    return {
        posts: Object.values(state.posts),
        currentUserId: state.auth.userId
    };

};
export default connect(mapStateToProps, { fetchPosts })(withRouter(PostList));