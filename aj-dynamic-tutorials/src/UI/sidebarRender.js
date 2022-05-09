import { sidebarData } from './UIdata';

const sidebarMenuEl = document.getElementById('sidebar-menu');

const collapseButton = (item, content, ms = '') => {
  return `
    <li class='mb-1 ${ms}'>
      <button
        class='btn btn-toggle align-items-center rounded collapsed'
        data-bs-toggle='collapse'
        data-bs-target='#${item.name}-collapse'
        aria-expanded='true'
      >
        ${item.name}
      </button>
      <div class='collapse' id='${item.name}-collapse'>
        <ul class='btn-toggle-nav list-unstyled fw-normal pb-1 small'>
        ${content}
        </ul>
      </div>
    </li>
    `;
};

const collapseButtonContent = item => {
  if (item.name === 'channels') {
    return item.content
      .map(i => {
        const content = collapseButtonContent(i);
        return collapseButton(i, content, 'ms-3');
      })
      .join('');
  }

  return item.content
    .map(el => {
      return `<li><a href='#' class='link-dark rounded'>${el}</a></li>`;
    })
    .join('');
};

function populateSidebar(data) {
  data &&
    data.forEach(item => {
      const content = collapseButtonContent(item);

      sidebarMenuEl.innerHTML += collapseButton(item, content);
    });
}

populateSidebar(sidebarData);

export default populateSidebar;

// add a click event listener in the inner list items
// when clicked it populates the screen with the relevent content
// the first item will be selected by default to have conetent displayed by default
// the first parameter of the first item will show its content
