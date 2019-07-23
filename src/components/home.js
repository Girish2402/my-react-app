import React, { Component } from 'react';
// import axios from 'axios'
import { Link } from 'react-router-dom';
import Pokeball from '../pokeball.png'
import { connect } from 'react-redux'



class Home extends Component{

    // state = {
    //     posts: []
    // }

    // componentDidMount(){
    //     console.log("hey");
    //     axios.get("https://jsonplaceholder.typicode.com/posts").then((resp) => {
    //         this.setState({
    //             posts: resp.data.slice(1,10)
    //         })
    //         console.log(resp)
    //     })
    // }


    render(){
        debugger;
        // const posts = this.state.posts
        const posts = this.props.posts
        let post_item
        if (posts.length) {
            post_item = posts.map(post => {
                return(
                    
                    <div className="col-lg-3" key={post.id}>
                        <Link to={'/'+ post.id}>
                            <div className="card">
                                <img src={Pokeball} alt="pokeball" />
                                <div className="card-body">
                                    <h5 className="card-title pink-text">{post.title}</h5>
                                    <p className="card-text black-text">{post.body}</p>
                                </div>
                            </div>
                        </Link>
                    </div>
                    
                )
            })
        }else{
            return (<p>No posts yet...!</p>)
        }
        return (
            <div className="container">
                <div className="home">
                    <div className="row">
                        {post_item}
                    </div>
                </div>
            </div>
        )
    }
}

const stateMapToProps = (state) => {
    return {
        posts: state.posts
    }
}

export default connect(stateMapToProps)(Home);