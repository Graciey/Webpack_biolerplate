
import React,{Component} from 'react';
import Home from './components/home.js';

class App extends Component {
  render() {
    return(
      <div className="App" >
        <p>Hello from App</p>
        <Home/>
      </div>
    )
  }
}

if(process.env.NODE_ENV === 'production') {
  console.log('Production Mode')
}
else if(process.env.NODE_ENV === 'development') {
  console.log('Development Mode')
}

export default App;
