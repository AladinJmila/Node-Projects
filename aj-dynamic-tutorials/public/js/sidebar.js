/* global bootstrap: false */
// (function () {
//   'use strict';
//   var tooltipTriggerList = [].slice.call(
//     document.querySelectorAll('[data-bs-toggle="tooltip"]')
//   );
//   tooltipTriggerList.forEach(function (tooltipTriggerEl) {
//     new bootstrap.Tooltip(tooltipTriggerEl);
//   });
// })();

const sidebarData = [
  {
    name: 'organization',
    content: [
      'agents',
      'departments',
      'permission groups',
      'websites',
      'custom agent status',
      'agent performance indicators',
    ],
  },
  {
    name: 'channels',
    content: [
      {
        name: 'chat',
        content: [
          'chat buttons (static)',
          'chat buttons (floating)',
          'chat windows',
          'automatic distribution',
          'canned messages',
          'wrap-up fields',
          'routing rules',
          'chat folders',
        ],
      },
      {
        name: 'messaging',
        content: [
          'facebook messenger',
          'SMS',
          'automatic distribution',
          'canned messages',
          'wrap-up fields',
          'routing rules',
          'messaging folders',
        ],
      },
      {
        name: 'email',
        content: [
          'email accounts',
          'automatic distribution',
          'canned messages',
          'wrap-up fields',
          'routing rules',
          'email folders',
        ],
      },
    ],
  },
  {
    name: 'customers',
    content: [
      'custom invitations',
      'invitation rule sets',
      'invitation settings',
      'PIN invitaion',
      'customer info card',
      'conversion codes',
    ],
  },
  {
    name: 'general',
    content: [
      'login controls',
      'single sign on',
      'restrictions',
      'data retention',
      'data protection',
      'transfer rules',
      'outgoing email setup',
    ],
  },
  {
    name: 'intergrations',
    content: [
      'API access keys',
      'API settings',
      'API triggers',
      'auto-translation',
      'salesforce',
      'genesys DX ai',
    ],
  },
];

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
    console.log(item.content);
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
  data.forEach(item => {
    const content = collapseButtonContent(item);

    sidebarMenuEl.innerHTML += collapseButton(item, content);
  });
}

populateSidebar(sidebarData);
