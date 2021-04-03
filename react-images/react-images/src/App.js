import logo from './logo.svg';
import './App.css';
import myImg from './image.png'; // Tell webpack this JS file uses this image

console.log(logo); // /logo.84287d09.png

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={myImg} alt="Logo" />
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

export default App;
