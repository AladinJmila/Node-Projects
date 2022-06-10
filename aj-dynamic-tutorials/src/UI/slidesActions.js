import slidesEditor from './slidesEditor';
import slidesPlayer from './slidesPlayer';
import slidesModeToggle from './slidesModeToggle';

export default function slidesActions(state) {
  slidesEditor(state);
  slidesPlayer(state);
  slidesModeToggle(state);
}
