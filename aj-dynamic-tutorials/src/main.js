import groupsActions from './UI/groupsActions';
import slidesActions from './UI/slidesActions';
import homeActions from './UI/homeActions';
import './main.css';
import featuresActions from './UI/featruesActions';
import { sendSlide, renderSlide } from './UI/slidesEditor';
import slideToDb from './UI/slideToDb';

const state = {
  mode: 'viewer',
  loaded: false,
  slideSent: false,
  audioBlob: null,
  imageFile: null,
  slides: [],
};

const viewerBtn = document.getElementById('viewer-btn');
const editorBtn = document.getElementById('editor-btn');
const navBtns = document.getElementById('nav-btns');

function resetNavBtnsStyle() {
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
  featuresActions(state);
  slidesActions(state);
  setViewerMode();
  sendSlide();
  renderSlide();
  slideToDb(state);
}
if (/tutorials\/show$/.test(location.href)) {
  homeActions();
}

setTimeout(() => {
  const target = document.querySelector('.core-search__content');

  // console.log(target.getBoundingClientRect());
  console.log(target.parentElement);
}, 5000);
