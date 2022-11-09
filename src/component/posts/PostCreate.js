import React from "react";
import './PostForm.css';
import { connect } from 'react-redux';
import { postCreate } from '../../actions';
import PostForm from "./PostForm";
import Countdown from "../Countdown/Countdown";

class PostCreate extends React.Component {



    onSubmit = (formValues, image) => {
        // console.log(image);
        this.props.postCreate(formValues, image);

    }

    render() {
        return (<>

            <div>
               
                <PostForm onSubmit={(formValues, image) => this.onSubmit(formValues, image)} />
            </div>
        </>
        );
    }
}




export default connect(null, { postCreate })(PostCreate);