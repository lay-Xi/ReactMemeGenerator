import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro';
import { useEffect, useState } from 'react';

export default function Meme() {
  const [meme, setMeme] = useState({
    topText: '',
    bottomText: '',
    randomImage: 'http://i.imgflip.com/1bij.jpg',
  });
  const [allMeme, setAllMeme] = useState([]);

  useEffect(() =>
    fetch('https://api.imgflip.com/get_memes')
      .then((res) => res.json())
      .then((data) => setAllMeme(data.data.memes))
  , []);

  function getMemeImage() {
    const randomNumber = Math.floor(Math.random() * allMeme.length);

    setMeme({ ...meme, randomImage: allMeme[randomNumber].url });
  }

  function handleChange(event) {
    const { name, value } = event.target;

    setMeme((prevData) => ({
      ...prevData,
      [name]: value,
    }));
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
        <button className='form--button' onClick={getMemeImage}>
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
