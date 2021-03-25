import React from 'react';
import './App.css';

class App extends React.Component {
  state = {
    notList: {},
    theList: {},
    conditionals: {
      isError: false,
      isCLicked: false
    }
  }

  theClick = () => {
    fetch('localhost:8081/endpoint')
    .then(
      response => {
        this.setState(prevState => (
          {
            theList: [...prevState.theList, response.json()]
          }
        ))
      })
  }

  render() {
    return <div className="App">
      <div className="buttons">
        <button className="button" type="button" onClick={this.theClick}>Get Everything</button>
        { this.state.theList.length > 0 &&
        <ul>
          { this.state.theList.map( item => (
            <li key={item.id}>{item.name}</li>
          )) }
        </ul>
        } 
      </div>
    </div>
  };
}

export default App;
