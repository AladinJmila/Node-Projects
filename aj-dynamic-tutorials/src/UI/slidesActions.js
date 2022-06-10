import slidesEditor from './slidesEditor';
import slidesPlayer from './slidesPlayer';

export default function slidesActions(state) {
  slidesEditor(state);
  slidesPlayer(state);
}
