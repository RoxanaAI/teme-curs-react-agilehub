import './App.css';

function App() {

  function handleClick() {
    console.log("img click");
  }

  function handlePlayAgain() {
    console.log("play again click");
  }

  const imageUrl = "https://www.brandcrowd.com/gallery/brands/pictures/picture15574683467192.jpg";

  return (
    <div className="App">
      <div className="card-box w3-border">
        <div className="card">
          <img src={ imageUrl } alt="cover" onClick={handleClick} />
        </div>
        <div className="card">
          <img src={ imageUrl } alt="cover" onClick={handleClick} />
        </div>
        <div className="card">
          <img src={ imageUrl } alt="cover" onClick={handleClick} />
        </div>
        <div className="card">
          <img src={ imageUrl } alt="cover" onClick={handleClick} />
        </div>
        <div className="card">
          <img src={ imageUrl } alt="cover" onClick={handleClick} />
        </div>
        <div className="card">
          <img src={ imageUrl } alt="cover" onClick={handleClick} />
        </div>
        <div className="card">
          <img src={ imageUrl } alt="cover" onClick={handleClick} />
        </div>
        <div className="card">
          <img src={ imageUrl } alt="cover" onClick={handleClick} />
        </div>
      </div>
       <button className="button btn-primary" onClick={handlePlayAgain}>Play Again</button>
    </div>
  );
}

export default App;
