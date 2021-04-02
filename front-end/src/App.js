import React from 'react';
import './App.css';

class App extends React.Component {
  state = {
    errors: {},
    theList: {},
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
      }
    )
    .catch((e) => {
      console.log(`error: ${e}`)
    })
  }

  render() {
    return <div className="App">
      <div className="buttons">
        <button className="button" type="button" onClick={this.theClick}>Get Everything</button>
        { this.state.theList.length > 0 &&
        <table>
          <tbody>
            <tr>
              <th>Item</th><th>Price</th>
            </tr>
            { this.state.theList.map( item => (
              <tr key={item.id}>
                <td>{item.name}</td><td>{item.price}</td>
              </tr>
          )) }
            
            <tr>
              <td>clouds</td><td>1.32</td>
            </tr>
            <tr>
              <td>boop</td><td>4.32</td>
            </tr>
          </tbody>
        </table>
        } 
      </div>
    </div>
  };
}

export default App;
