import React, { Component } from "react";
import Rainbow from '../hoc/rainbow'
// import axios from 'axios'
import { Link } from 'react-router-dom';
import { connect } from 'react-redux'
import { deletePost } from '../actions/postAction'

class Post extends Component{

    // state = {
    //     post: null
    // }

    // componentDidMount() {
    //     const id = this.props.match.params.post_id
    //     axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`).then((resp) => {
    //         this.setState({
    //             post: resp.data
    //         })
    //     })
    // }

    handleOnClick = () => {
        console.log(this.props)
        this.props.deletePost(this.props.post.id)
        this.props.history.push('/')
    }

    render(){
        const post = this.props.post ? (
            <div className="row">
                <div className="col s12 m6">
                    <div className="card blue-grey darken-1">
                        <div className="card-content white-text">
                            <span className="card-title">{this.props.post.title}</span>
                            <p>{this.props.post.body}</p>
                        </div>
                        <div className="card-action">
                            <Link to="/">Back</Link>
                            <button className="btn btn-danger" onClick={this.handleOnClick}>delete</button>
                        </div>
                    </div>
                </div>
            </div>
        ) : (
            <div>Loading...</div>
        );
        return post;
    }
}

const mapStateToProps = (state, selfProps) => {
    let id = selfProps.match.params.post_id;
    return {
        post: state.posts.find(post => post.id === parseInt(id))
    }
}

const mapDispactToProps = (dispach) => {
    return{
        deletePost: (id) => { dispach(deletePost(id))}
    }
}

export default connect(mapStateToProps, mapDispactToProps)(Rainbow(Post))