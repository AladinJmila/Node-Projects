import groupsActions from './UI/groupsActions';
import slidesActions from './UI/slidesActions';
import homeActions from './UI/homeActions';
import './main.css';
import featuresActions from './UI/featruesActions';

const state = {
  mode: 'viewer',
  state: false,
  audioBlob: null,
  imageFile: null,
};

const viewerBtn = document.getElementById('viewer-btn');
const editorBtn = document.getElementById('editor-btn');
const navBtns = document.getElementById('nav-btns');

function resetNavBtnsStyle() {
  // console.log(navBtns.children);
  [...navBtns.children].forEach(el => el.classList.remove('active'));
}

viewerBtn.addEventListener('click', setViewerMode);

function setViewerMode() {
  state.mode = 'viewer';
  state.loaded = true;
  slidesActions(state);
  resetNavBtnsStyle();
  viewerBtn.classList.add('active');
}

editorBtn.addEventListener('click', () => {
  state.mode = 'editor';
  state.loaded = true;
  slidesActions(state);
  resetNavBtnsStyle();
  editorBtn.classList.add('active');
});

if (!/tutorials\/show$/.test(location.href)) {
  groupsActions();
  featuresActions();
  slidesActions(state);
  setViewerMode();
}
if (/tutorials\/show$/.test(location.href)) {
  homeActions();
}
