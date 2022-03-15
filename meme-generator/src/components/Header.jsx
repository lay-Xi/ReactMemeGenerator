import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro';

export default function Header() {
  return (
    <nav>
      <FontAwesomeIcon className='nav--icon' size='2x' icon={solid('face-grin')} />
      &nbsp; &nbsp;
      <h1 className='nav--title'>Meme Generator</h1>
    </nav>
  );
}
