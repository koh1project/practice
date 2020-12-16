import React from 'react';
import { Route, Link } from 'react-router-dom';

import './App.css';
import HomePage from './pages/homepage/homepage.component';

// import ShopPage from './pages/shop/shop.component';

const HatsPage = () => (
  <div>
    <h1>HATS PAGE</h1>
  </div>
);

const TopicsList = (props) => (
  <div>
    <h1>TOPICS LIST PAGE</h1>
    <Link to={`${props.match.url}/13`}>TO TOPIC 13</Link>
    <Link to={`${props.match.url}/17`}>TO TOPIC 17</Link>
    <Link to={`${props.match.url}/21`}>TO TOPIC 21</Link>
  </div>
);

const TopicDetail = (props) => (
  <div>
    <h1>TOPICS DETAIL PAGE: {props.match.params.topicId} </h1>
  </div>
);

function App() {
  return (
    <div>
      <Route exact path="/" component={HomePage} />
      <Route exact path="/topics" component={TopicsList} />
      <Route path="/topics/:topicId" component={TopicDetail} />
      <Route path="/hats" component={HatsPage} />
    </div>
  );
}

export default App;
