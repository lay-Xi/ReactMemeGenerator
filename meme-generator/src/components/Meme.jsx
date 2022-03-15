import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro';

export default function Meme() {
  return (
    <main>
      <form className='form'>
        <input className='form--input' placeholder='Top Text'></input>
        <input className='form--input' placeholder='Bottom Text'></input>
        <button className='form--button'>
          Get a new meme image &nbsp;
          <FontAwesomeIcon icon={solid('image')} />
        </button>
      </form>
    </main>
  );
}
