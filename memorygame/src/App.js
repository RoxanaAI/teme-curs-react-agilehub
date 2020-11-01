import './App.css';
import React, { useState } from 'react'

function App() {
  // initial state
  var previousIndex = -1;
  var currentIndex = -1;    
  const coverUrl = "https://www.brandcrowd.com/gallery/brands/pictures/picture15574683467192.jpg";
  const [elements, setElements] = useState(startGame());

  function startGame(){
    const lion = "https://pbs.twimg.com/profile_images/1105895900696715264/5Bla3W39_400x400.png";
    const cat = "https://www.sciencenewsforstudents.org/wp-content/uploads/2020/05/1030_LL_domestic_cats-1028x579.jpg";
    const dog = "https://i.guim.co.uk/img/media/fe1e34da640c5c56ed16f76ce6f994fa9343d09d/0_174_3408_2046/master/3408.jpg?width=1200&height=900&quality=85&auto=format&fit=crop&s=0d3f33fb6aa6e0154b7713a00454c83d";
    const monkey = "data:image/jpeg;base64,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";

    previousIndex = -1;
    currentIndex = -1;

    return [ 
      {displayUrl: coverUrl, url: lion, text: "lion" }, 
      {displayUrl: coverUrl, url: cat, text: "cat" }, 
      {displayUrl: coverUrl, url: dog, text: "dog" }, 
      {displayUrl: coverUrl, url: monkey, text: "monkey" }, 
      {displayUrl: coverUrl, url: monkey, text: "monkey" }, 
      {displayUrl: coverUrl, url: dog, text: "dog" }, 
      {displayUrl: coverUrl, url: cat, text: "cat" }, 
      {displayUrl: coverUrl, url: lion, text: "lion" }];
  }

  function handleClick(index) {
    if(index < 0 || index === currentIndex) {
      return;
    }

    var currentElement = elements[index];
    currentElement.displayUrl = currentElement.url;
    setTimeout(() => {
      console.log('Displayed image behind cover')
    }, 1000);
    currentElement.displayUrl = coverUrl;

    if(previousIndex < 0 || currentIndex < 0 ) {
      previousIndex = currentIndex;
      currentIndex = index;
      return;
    }

    var previousElement = elements[previousIndex];
    console.log( "currentIndex " + currentElement.text );
    console.log( "previousIndex " + previousElement.text );

    if(currentElement.text === previousElement.text) {
      alert("Match found");
      currentElement.displayUrl = currentElement.url;
      previousElement.displayUrl = previousElement.url;
      previousIndex = -1;
      currentIndex = -1;
    } else {
      previousIndex = currentIndex;
      currentIndex = index;
    }
  }

  function handlePlayAgain() {
    setElements(startGame());
  }

  return (
    <div className="App">
      <div className="card-box w3-border">
        <div className="card">
            <img src={elements[0].displayUrl} alt="cover" width="300" onClick={() => handleClick(0)}  />
        </div>
        <div className="card">
          <img src={ elements[1].displayUrl } alt="cover" width="300" onClick={() => handleClick(1)} />
        </div>
        <div className="card">
          <img src={ elements[2].displayUrl } alt="cover" width="300" onClick={() => handleClick(2)} />
        </div>
        <div className="card">
          <img src={ elements[3].displayUrl } alt="cover" width="300" onClick={() => handleClick(3)} />
        </div>
        <div className="card">
          <img src={ elements[4].displayUrl } alt="cover" width="300" onClick={() => handleClick(4)} />
        </div>
        <div className="card">
          <img src={ elements[5].displayUrl } alt="cover" width="300" onClick={() => handleClick(5)} />
        </div>
        <div className="card">
          <img src={ elements[6].displayUrl } alt="cover" width="300" onClick={() => handleClick(6)} />
        </div>
        <div className="card">
          <img src={ elements[7].displayUrl } alt="cover" width="300" onClick={() => handleClick(7)} />
        </div>
      </div>
       <button className="button btn-primary" onClick={handlePlayAgain}>Play Again</button>
    </div>
  );
}

export default App;
