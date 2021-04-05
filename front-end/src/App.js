import React from 'react';
import './App.css';

class App extends React.Component {
  state = {
    errors: {},
    theList: [],
  }

  theClick = () => {
    fetch('/api/')
    .then(res => res.json())
    .then(res => {
      this.setState(prevState => (
        {
          theList: res
        }
      ))
      console.log(this.state.theList)
    })
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
              <tr key="{item.id}">
                <td>{item.name}</td><td>{item.price}</td>
              </tr>
          )) }
          </tbody>
        </table>
        } 
      </div>
    </div>
  };
}

export default App;
