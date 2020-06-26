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
      const num = Math.floor(Math.random() * res.length);
      this.setState({post: res[num]});
      return getCommentByPost(res[num].id);
    })
    .then(res1 => {
      console.log(res1);
      res1.forEach(item => {
        getUserById(item.id_user).then(res2 => {
          console.log(res2);
          const newItem = {
            ...item,
            id_user: res2
          }
          console.log(newItem);
          newArr = [...newArr, newItem]
          this.setState({
              comments: newArr
          });
          this.setState({isLoading: false}); 
        }).catch(error => {
          console.log(error);
          return null;
        })
      })
      
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
