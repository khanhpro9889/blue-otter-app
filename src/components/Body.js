import React, { Component } from 'react';
import ListItem from './ListItem';
import {getCommentByPost} from '../api';


class Body extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user: {}
        }
    }
    componentDidMount() {
        console.log(this.props);
    }
    render() { 
        const {comments} = this.props;
        console.log(comments);
        return (
            <div class="body">
                <div class="cmt">Comments</div>
                {   comments.map(item => {
                        return (<ListItem comment={item}/>);
                    })
                }
            </div>
        );
    }
}
 
export default Body;