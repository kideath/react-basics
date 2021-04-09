import logo from './logo.svg';
import './App.css';

var React = require('react');

class App extends React.Component {
             
  constructor(props) {
      super(props);
      this.state = {class: "r"};
        
      this.press1 = this.handlePress.bind(this);
  }
  handlePress(){
      let myClass = this.state.class;
      if (myClass == "r") {
        myClass = "g"
      }
      else if (myClass == "g") {
        myClass = "b"
      }
      else if (myClass == "b") {
        myClass = "r"
      }
      this.setState({class: myClass});
      console.log(myClass);      
  }
  render() {
      return (
        <div className="App">
          <div className={"mydiv " + this.state.class}>aaa</div>
          <br/>
          <button onClick={this.press1}>Change color!</button>
        </div>
      )
  }
}

export default App;
