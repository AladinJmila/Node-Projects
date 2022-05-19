import UIActions from './UI/UIActions';
import slidesPlayer from './UI/slidesPlayer';
import slidesSketcher from './UI/slidesSketcher';
import './main.css';

const state = {
  mode: 'viewer',
  // mode: 'editor',
};

const viewerBtn = document.getElementById('viewer-btn');
const editorBtn = document.getElementById('editor-btn');

viewerBtn.addEventListener('click', () => {
  state.mode = 'viewer';
  slidesPlayer(state);
  slidesSketcher(state);
});

editorBtn.addEventListener('click', () => {
  state.mode = 'editor';
  slidesPlayer(state);
  slidesSketcher(state);
});

UIActions();
slidesPlayer(state);
slidesSketcher(state);
