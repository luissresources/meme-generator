import React, {useState} from 'react';
import './App.css';

function App() {

  const [topText, setTopText] = useState('');
  const [bottomText, setBottomText] = useState('');

  const onChangeTopText = (e) => {};
  const onChangeBottomText = (e) => {};

  return (
    <div className="App">
      <form action="" name='create-meme'>
        <select name="" id="memes-category">
          <option value="cat-awesome">Awesome</option>
          <option value="cat-confusing">Confusing</option>
          <option value="cat-fashion">Fashion</option>
          <option value="cat-laugth">Laugth</option>
          <option value="dog-rogue">Rogue</option>
          <option value="cat-sideways">Sideways</option>
        </select>
        <input type="text" placeholder='top-text' onChange={() => onChangeTopText}/>
        <input type="text" placeholder='bottom-text' onChange={() => onChangeBottomText} />
        <button>Crear</button>
      </form>
      <div className="meme">
        <span>Top Text</span>
        <span>Bottom Text</span>
        <img src="" alt="" />
      </div>
    </div>
  );
}

export default App;
