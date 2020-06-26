import React, { Component } from 'react';
import Header from './Header';
import Body from './Body';

class Post extends Component {
    constructor(props) {
        super(props);
        this.state = {
            post: {},
            comments: []
        }
    }

    
    render() { 
        const {post} = this.props;
        const {comments} = this.props;
        console.log(comments);
        return (
            <div class="mt-10">
                <Header post={post}/>
                <Body comments={comments}/>    
            </div>   
        )
    }
}
 
export default Post;