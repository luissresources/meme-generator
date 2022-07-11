import React, {useState} from 'react';
import domtoimage from 'dom-to-image';
import Logo from './componentes/Logo';
import imagenLogo from './images/logo-2.png'
import './App.css';

function App(props) {

  const [image, setImage] = useState('');
  const [topText, setTopText] = useState('');
  const [bottomText, setBottomText] = useState('');
  const [urlMemeResult, setUrlMemeResult] = useState('');

  const onChangeImage = (e) => {
    let divCreateMeme;
    if (divCreateMeme = document.querySelector('img.default')){
      let divCreateMeme = document.querySelector('img.default');
      let classDivCreateMeme = document.querySelector('img.default').classList;
      classDivCreateMeme = Array.from(classDivCreateMeme);
      divCreateMeme.classList.remove('default');
    }
    
    setImage(e.target.value);
  }

  const onChangeTopText = (e) => {
    setTopText(e.target.value);
  };
  const onChangeBottomText = (e) => {
    setBottomText(e.target.value);
  };

  const onClickCreateImage = (e) => {
    e.preventDefault();
    let divImgMemeResult = document.querySelector('.meme-result img');
    if (divImgMemeResult !== null){
      divImgMemeResult.remove();
    }

    if (document.querySelector('img.default')){
      alert('Please, selected a image');
    } else {
      
    }

    let node = document.querySelector('.container-meme');

      domtoimage.toPng(node)
      .then(function (dataUrl) {
          let divMemeResult = document.querySelector('.meme-result');
          var img = new Image();
          img.src = dataUrl;
          setUrlMemeResult(dataUrl);
          divMemeResult.style.boxShadow = '0 0 5px 10px var(--orange)';
          divMemeResult.appendChild(img);
      })
      .catch(function (error) {
          console.error('oops, something went wrong!', error);
      });
  }

  return (
    <div className="App container">
      <Logo 
        logo = {imagenLogo} />
      <h1>Memes Generator</h1>
      <form action="" name='create-meme' id='form-meme'>
        <select name="" id="memes-category" className='meme-img-default' defaultValue={''} onChange={onChangeImage} required>
          <option value="" disabled>Selection</option>
          <option value="cat-awesome">Awesome</option>
          <option value="cat-confusing">Confusing</option>
          <option value="cat-fashion">Fashion</option>
          <option value="cat-laugth">Laugth</option>
          <option value="dog-rogue">Rogue</option>
          <option value="cat-sideways">Sideways</option>
        </select>
        <input type="text" placeholder='Top text' onChange={onChangeTopText}/>
        <input type="text" placeholder='Bottom text' onChange={onChangeBottomText} />
        <button onClick={onClickCreateImage}>Create</button>
      </form>
      <div className="container-meme-result">
        <div className="container-meme">
          <div className="meme__items">
            <span className='meme-top-text'>{topText}</span>
            <span className='meme-bottom-text'>{bottomText}</span>
          </div>
          <img src={image !== '' ? `/images/${image}.jpg` : 'https://via.placeholder.com/200'} alt="" className='meme-img default'/>
        </div>
        <div className="meme-result">
        </div>
      </div>
      <a href={urlMemeResult} className={urlMemeResult === '' ? 'meme-download' : ''} download>Download</a>
    </div>
  );
}

export default App;
