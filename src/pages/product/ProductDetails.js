import React from 'react';
import './productDetails.css';

import { InputNumber, Space } from 'antd';

import { withRouter } from '../../component/withRouter/withRouter';
import { connect } from 'react-redux';
import { bidCreate, fetchbids } from '../../actions';




class ProductDetails extends React.Component {
    state = {
        bid: null,
        highestBid: 0,
        objArray: [],

    }
    async componentDidMount() {
        // await this.props.fetchbids();
        // const { data } = await axios.get(`${baseURL}/bids`)
        // console.log(data, 'sergsdfgsdfgdfgsd')
      const bidds=  await this.props.fetchbids();


        await this.setState({ objArray: Object.values(this.props.data.bids) })
        console.log(this.state.obj);
        console.log(this.state.objArray, '111');
        this.state.objArray.map(data => {
                console.log(data);
            if (data.id == this.props?.location?.state.id) {
                
                console.log(this.props?.location?.state.price, 'start price');
                if (data.bid > this.props?.location?.state.price) {
                    console.log(data.bid,'amb');
                    this.setState({highestBid: data.bid})
                    // console.log(this.state.highestBid);
                }
            }
        })
console.log(this.state.highestBid);

    }
    // constructor(props) {
    //     super(props);
    //     this.props.fetchbids(); 
    // }



    render() {
        console.log(this.props, 'props');
        console.log(this.props.data.bids, 'check');


        const post = this.props?.location?.state

        const allbids = this.props.data.bids;
        const currentpostid = post.id;
        const objArray = [];



        const handlebidInputChange = event => {
            this.setState({ bid: event.target.value })
            console.log(event.target.value);

        }
        const handleonclick = () => {

            this.props.bidCreate(this.state.bid, post.id)
            console.log(post,'post');
        }

        return (
            <>

                <div className='main-container'>
                    <div className='img-side'>
                        <div className='product-preview'>
                            <img className='main-img' src={post.image} alt='Product img' />


                        </div>
                        <div className='product-details'>
                            <h4>Details</h4>
                            <div className='detailsss'>
                                <p>Starting price</p>
                                <p>{post.price}</p>
                                <p>City</p>
                                <p>{post.location}</p>
                            </div>

                            <hr />
                            <h4>Description</h4>
                            {post.description}

                        </div>
                    </div>

                    <div className='product-data'>
                        <div className='first-box'>
                            <div className='product-title'>
                                <h1 className='pri'>RS  {post.price}</h1>


                            </div>
                            <h4 className='post-title'>{post.title}</h4>
                            <hr />
                            <div className='city'>
                                <p>{post.location}</p>

                            </div>
                        </div>
                        <hr />
                        {/* <p className='product-details'>
                        {post.description}
                    </p> */}
                        <div className='img-head'>
                            <h3 className='heading' >Select image</h3>
                            <div>
                                <img className='product-image selected-Product' src={post.image} alt="image1" />
                                <img className='product-image' src={post.image} alt="image2" />
                                <img className='product-image' src={post.image} alt="image3" />
                                <img className='product-image' src={post.image} alt="image4" />
                            </div>
                        </div>
                        <hr />
                        <div className='asking-price'>
                            {/* <button>
                                <h2 style={{ color: "white" }}>${post.price}</h2>
                            </button> */}
                            <div  className='high'><h3 className='pri'>HighestBid:{this.state.highestBid}</h3></div>
                            
                            <hr />
                            <Space>
                                <input className='bid' type='number' onChange={handlebidInputChange} min={1} max={100000} defaultValue={post.price} />
                            </Space>
                            <hr />
                            <button onClick={() => handleonclick()} ><h2 style={{ color: "white" }}>Bid</h2></button>
                        </div>
                    </div>

                </div>

            </>


        )
    }
}
const mapStateToProps = (state) => {
    return {
        data: state
    };
}
export default connect(mapStateToProps, { bidCreate, fetchbids })(withRouter(ProductDetails));
