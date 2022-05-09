const subSidebarData = {
  organization: {
    agents: [
      { name: 'agent informations', id: '' },
      { name: 'departments', id: '' },
      { name: 'login and security', id: '' },
      { name: 'images and greetings', id: '' },
      { name: 'automatic distribution', id: '' },
      { name: 'agent hours', id: '' },
      { name: 'email settings', id: '' },
      { name: 'advanced settings', id: '' },
    ],
    departments: [
      { name: 'department information', id: '' },
      { name: 'rollover departments', id: '' },
      { name: 'agents', id: '' },
      { name: 'automatic distribution', id: '' },
    ],
    'premission groups': [
      { name: 'account settings', id: '' },
      { name: 'actions', id: '' },
      { name: 'setup', id: '' },
      { name: 'folders', id: '' },
      { name: 'departments', id: '' },
    ],
    websites: [
      { name: 'general', id: '' },
      { name: 'data validation', id: '' },
    ],
    'custom agent status': [{ name: 'custom agent status', id: '' }],
    'agent performance indicators': [
      { name: 'agent performance indicators', id: '' },
    ],
  },
};

export const sidebarData = [
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
