import React, { Component } from 'react';

class Header extends Component {
    constructor(props) {
        super(props);
    }
    componentDidMount() {
        console.log(this.props);
    }
    render() { 
        const {post} = this.props;
        return (
            <div class="header ui violet message">
                <h4>{post.title}</h4>
                <div class="content">{post.content}</div>
            </div>
        );
    }
}
 
export default Header;