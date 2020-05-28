import React ,{Component} from 'react';
import logo from './logo.svg';
import './App.css';

/*function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}
*/

/*class Test extends React.Component {
  render() {
    return <div>
      <Welcome/>
      <Welcome/>
      <Welcome/>
    </div>
  }
}*/

/*static getDerivedStateFromProps(nextProps, prevState) {
  if (nextProps.title != prevState.title) {
    return {
      title: nextProps.title 
    };
  }
  return null;
}*/



class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      myState: 'My first state',
      saySomething: 'Hello World'
    }
    console.log(1);
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    console.log(2);
  }

  changeTxext = () => {
    this.setState({ saySomething: 'How are you?' })
  }

  componentDidMount(){
    console.log(4);
  }
  render() {
    console.log(3);
    return (
      <div className="App">
        <p>{this.state.myState}</p>
        <p>{this.state.saySomething}</p>
        <button onClick={this.changeTxext}>Click</button>
      </div>
    );
  }
}

export default App;



/*class Welcome extends React.Component {
  render() {
    return <div>
      <h1>Hello React</h1>
      <h2>My name is Winnie.</h2>
    </div>
  }
}*/

//export default Welcome; // component > upper case alphabet
