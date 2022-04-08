import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro';
import memeData from '../memeData.js';
import { useState } from 'react';

export default function Meme() {
  const [meme, setMeme] = useState({
    topText: '',
    bottomText: '',
    randomImage: 'http://i.imgflip.com/1bij.jpg',
  });
  const [allMemeImages, setAllMemeImages] = useState(memeData);

  function getRandomImage() {
    const memeArray = allMemeImages.data.memes;
    const randomNumber = Math.floor(Math.random() * memeArray.length);

    setMeme({ ...meme, randomImage: memeArray[randomNumber].url });
  }

  function handleChange(event) {
    const { name, value } = event.target;

    setMeme({
      ...meme,
      [name]: value,
    });
  }

  return (
    <main>
      <div className='form'>
        <input
          className='form--input'
          placeholder='Top Text'
          name='topText'
          onChange={handleChange}
          value={meme.topText}
        />
        <input
          className='form--input'
          placeholder='Bottom Text'
          name='bottomText'
          onChange={handleChange}
          value={meme.bottomText}
        />
        <button className='form--button' onClick={getRandomImage}>
          Get a new meme image &nbsp;
          <FontAwesomeIcon icon={solid('image')} />
        </button>
      </div>
      <div className='meme'>
        <img className='meme--image' src={meme.randomImage} alt='' />
        <h2 className='meme--text top'>{meme.topText}</h2>
        <h2 className='meme--text bottom'>{meme.bottomText}</h2>
      </div>
    </main>
  );
}
