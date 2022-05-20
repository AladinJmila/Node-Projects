import UIActions from './UI/UIActions';
import slidesPlayer from './UI/slidesPlayer';
import slidesSketcher from './UI/slidesSketcher';
import './main.css';

const state = {
  // mode: 'viewer',
  mode: 'editor',
};

const viewerBtn = document.getElementById('viewer-btn');
const editorBtn = document.getElementById('editor-btn');
const navBtns = document.getElementById('nav-btns');

function resetNavBtnsStyle() {
  // console.log(navBtns.children);
  [...navBtns.children].forEach(el => el.classList.remove('active'));
}

viewerBtn.addEventListener('click', () => {
  state.mode = 'viewer';
  slidesPlayer(state);
  slidesSketcher(state);
  resetNavBtnsStyle();
  viewerBtn.classList.add('active');
});

editorBtn.addEventListener('click', () => {
  state.mode = 'editor';
  slidesPlayer(state);
  slidesSketcher(state);
  resetNavBtnsStyle();
  editorBtn.classList.add('active');
});

UIActions();
slidesPlayer(state);
slidesSketcher(state);
