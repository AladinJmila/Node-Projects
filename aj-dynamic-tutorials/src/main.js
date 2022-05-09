import populateSidebar from './UI/sidebarRender';
import injectLevelTow from './UI/mediaRender';
import saveMedia from './media/featureHandler';
import './main.css';

const hideBtn = document.getElementById('hide-sidebar');
const sidebarEl = document.getElementById('sidebar');

hideBtn.addEventListener('click', () => {
  sidebarEl.classList.toggle('hide');
});

populateSidebar();
injectLevelTow();
saveMedia();

//
