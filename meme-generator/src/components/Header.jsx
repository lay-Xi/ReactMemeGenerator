import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro';

export default function Header() {
  return (
    <div>
      <FontAwesomeIcon icon={solid('face-grin')} />
      Meme Generator
    </div>
  );
}
