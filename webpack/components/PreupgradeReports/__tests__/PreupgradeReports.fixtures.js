export const preupgradeReports = [
  {
    hostId: 5,
    entries: [
      {
        title: 'Fix me!',
        severity: 'Too severe to talk about',
        id: 42,
        hostname: 'host.example.com',
      },
      {
        title: 'I am broken too',
        severity: 'medium',
        id: 43,
        hostname: 'host.example.com',
      },
    ],
  },
  {
    hostId: 6,
    entries: [
      {
        title: 'Octocat is not happy',
        severity: 'high',
        id: 44,
        hostname: 'foo.example.com',
      },
      {
        title: 'Not enough credits',
        severity: 'low',
        id: 45,
        hostname: 'foo.example.com',
      },
      {
        title: 'SELinux is turned off',
        severity: 'medium',
        id: 46,
        hostname: 'foo.example.com',
      },
      {
        title: 'Root password is too short',
        severity: 'medium',
        id: 47,
        hostname: 'foo.example.com',
      },
      {
        title: 'No chocolate chip cookies in cookie jar',
        severity: 'high',
        id: 49,
        hostname: 'foo.example.com',
      },
    ],
  },
];

export const reportsWithRemediations = [
  {
    hostId: 5,
    entries: [
      {
        title: 'Fix me!',
        severity: 'Too severe to talk about',
        detail: { remediations: [{ type: 'hint' }] },
      },
      { title: 'I am broken too', severity: 'medium' },
    ],
  },
  {
    hostId: 6,
    entries: [
      {
        title: 'Octocat is not happy',
        severity: 'high',
        detail: { remediations: [{ type: 'command' }] },
      },
      { title: 'Not enough credits', severity: 'low' },
    ],
  },
];
