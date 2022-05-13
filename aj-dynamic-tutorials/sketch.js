const Agents = [
  { solo: true, name: 'agent managment', data: '...', next: false },
  { solo: true, name: 'new agent', data: '...', next: false },
  {
    'agent information': [
      {
        solo: false,
        name: 'email address',
        data: '...',
        next: { name: 'email address2', data: '...' },
      },
      {
        solo: false,
        name: 'agent name',
        data: '...',
        next: { name: 'agent name2', data: '...' },
      },
      {
        solo: false,
        name: 'chat name',
        data: '...',
        next: { name: 'chat name2', data: '...' },
      },
      { solo: false, name: 'initials', data: '...', next: false },
      {
        solo: false,
        name: 'user name',
        data: '...',
        next: { name: 'user name2', data: '...' },
      },
      {
        solo: false,
        name: 'availability for channels',
        data: '...',
        next: false,
      },
      {
        solo: false,
        name: 'permission groups',
        data: '...',
        next: { name: 'permission groups2', data: '...' },
      },
      {
        solo: false,
        name: 'languages',
        data: '...',
        next: { name: 'languages2', data: '...' },
      },
    ],
  },
  {
    departments: [],
  },
  {
    'login and security': [],
  },
];
