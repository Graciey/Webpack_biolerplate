
import React,{Component} from 'react';

import './style.scss';

import id from './id.jpg';

class Home extends Component {
  render() {
    return(
      <div className="home" >
        <p>Hello from Home</p>
        <img src={id}/>
      </div>
    )
  }
}


export default Home;
