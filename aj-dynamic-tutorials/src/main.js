import './main.css';
import './learn.css';
import './sidebar.css';
import populateSidebar from './sidebar';
import injectLevelTow from './UImedia';
import saveMedia from './saveMedia';

const hideBtn = document.getElementById('hide-sidebar');
const sidebarEl = document.getElementById('sidebar');

hideBtn.addEventListener('click', () => {
  sidebarEl.classList.toggle('hide');
});

populateSidebar();
injectLevelTow();
saveMedia();

//