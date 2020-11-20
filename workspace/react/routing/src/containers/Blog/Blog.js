import React, { Component } from 'react';
// import axios from 'axios';
import  { Route } from 'react-router-dom';

import './Blog.css';
import Posts from './Posts/Posts';

class Blog extends Component {
  render () {
    return (
      <div className="Blog">
        <header>
          <nav>
            <ul>
              <li><a href="/">HOME</a></li>
              <li><a href="/new-post">New Post</a></li>
            </ul>
          </nav>
        </header>
        <Route path="/" exact render={() => <Posts />}/>
        <Route path="/" render={() => <h1>Home 2</h1>}/>
      </div>
    );
  }
}

export default Blog;