import React, {Component} from 'react';
import {connect} from 'react-redux';
import { fetchPosts } from '../actions/index';
import {Link} from 'react-router';

class PostsIndex extends Component{
    // this method only call 1 time when the component first render
    componentWillMount(){
        this.props.fetchPosts();
    }

    render(){
        return (
            <div>
                <div className="text-xs-right">
                    <Link to="posts/new" className="btn btn-primary">Add a post</Link>
                </div>
                List posts
            </div>
        );
    }
}

export default connect(null, {fetchPosts})(PostsIndex);
