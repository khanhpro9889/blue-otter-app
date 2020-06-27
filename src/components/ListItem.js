import React, { Component } from 'react';
import { Button, Comment, Form, Header } from 'semantic-ui-react'
class ListItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user: {}
        }
    }
    componentWillMount() {

    }
    render() { 
        const {comment} = this.props;
        return (
            <Comment>
                <Comment.Content>
                    <Comment.Author as='a'>{comment.name}</Comment.Author>
                    <Comment.Metadata>
                        <div>{comment.email}</div>
                    </Comment.Metadata>
                    <Comment.Text>{comment.body}</Comment.Text>
                </Comment.Content>
            </Comment>
            // <div class="list-item">
            //     <div class="top">
            //         <span class="name"><a href="#">{comment.id_user.name}</a></span>
            //         <span class="email">{comment.id_user.email}</span>
            //     </div>  
            //     <div class="comment">{comment.content}</div>
            // </div>
        );
    }
}
 
export default ListItem;