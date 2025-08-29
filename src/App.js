import './App.css';
import Header from './Header';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={"https://m.media-amazon.com/images/I/61nuuPxUvaL.png"} className="App-logo" alt="logo" />
        <p>
      <h1>My weather app</h1>
        </p>
        <p>{Header}</p>
        <a
          className="App-link"
          href="https://m.media-amazon.com/images/I/61nuuPxUvaL.png"
          target="_blank"
          rel="noopener noreferrer"
        >
          Get weather
        </a>
      </header>
    </div>
  );
}

export default App;
