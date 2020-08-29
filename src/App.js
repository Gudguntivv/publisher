import React, { Component,Fragment } from 'react';
import Homepage from "./component/homepage.jsx";


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  render() { 
    return (  
      <Fragment>
         < Homepage />
      </Fragment>
    );
  }
}
 
export default App;

