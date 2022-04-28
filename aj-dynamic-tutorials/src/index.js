import './main.css';
import populateSidebar from './sidebar';
import injectLevelTow from './media';

const hideBtn = document.getElementById('hide-sidebar');
const sidebarEl = document.getElementById('sidebar');

hideBtn.addEventListener('click', () => {
  sidebarEl.classList.toggle('hide');
});

populateSidebar();
injectLevelTow();
