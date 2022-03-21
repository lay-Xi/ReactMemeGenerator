import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro';
import memeData from '../memeData.js';
import { useState } from 'react';

export default function Meme() {
  const [meme, setMeme] = useState({
    topText: '',
    bottomText: '',
    randomImage:'http://i.imgflip.com/1bij.jpg'
  });

  const [allMemeImages, setAllMemeImages] = useState(memeData);

  function getRandomImage() {
    const memeArray = allMemeImages.data.memes;
    const randomNumber = Math.floor(Math.random() * memeArray.length);

    setMeme({...meme, randomImage: memeArray[randomNumber].url});
  }

  return (
    <main>
      <div className='form'>
        <input className='form--input' placeholder='Top Text'></input>
        <input className='form--input' placeholder='Bottom Text'></input>
        <button className='form--button' onClick={getRandomImage}>
          Get a new meme image &nbsp;
          <FontAwesomeIcon icon={solid('image')} />
        </button>
      </div>
      <img className='meme--image' src={meme.randomImage} alt='' />
    </main>
  );
}
