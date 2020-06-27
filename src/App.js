import React, { Component } from 'react';
import './App.css';
import 'semantic-ui-css/semantic.min.css'
import Post from './components/Post';
import {getPost} from './api';
import {getCommentByPost} from './api';
import {getUserById} from './api';
import { Button, Icon } from 'semantic-ui-react'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      post: {},
      comments: [],
      isLoading: false
    }
  }

  componentWillMount() {
    this.getPost();
  }

  getPost() {
    this.setState({isLoading: true});
    let newArr = [];
    getPost()
    .then(res => {
      this.setState({isLoading: false})
      const num = Math.floor(Math.random() * res.length);
      this.setState({post: res[num]});
      return getCommentByPost(res[num].id);
    })
    .then(res1 => {
        this.setState({comments: res1})
    })
    .catch(err => {
      console.log(err);
    })
  }

  render() {
    const loading = (<div class="loading"><div>Loading</div></div>)
    
    return (
      <div className="App">
        {this.state.isLoading ? loading : null}
        <div class="post">
          <Button onClick={() => {
              this.getPost();
          }}>
            <Icon name='redo' /> Reload
          </Button>
          <Post post={this.state.post} comments={this.state.comments}/>
        </div>     
      </div>
    );
  }
  
}

export default App;
