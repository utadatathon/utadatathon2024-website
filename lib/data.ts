export const buttonDatas = [
  { text: 'Apply', path: '/' },
  { text: 'Discord', path: '/' },
  { text: 'Dev Post', path: '/' },
];

export const navItems = [
  { text: 'Home', path: '/' },
  { text: 'Dashboard', path: '/profile' },
  { text: 'Schedule', path: '/schedule' },
  // { text: 'HackerPack', path: '/hackerpacks' },
];

export const stats = [
  {
    data: 'Big',
    object: 'statistic 1',
  },
  {
    data: 'Shocking',
    object: 'statistic 2',
  },
  {
    data: 'Incredible',
    object: 'statistic 3',
  },
];

export const DEFAULT_EVENT_FORM_DATA: ScheduleEvent = {
  description: '',
  title: '',
  page: '',
  type: '',
  track: '',
  location: '',
  speakers: [],
  startDate: new Date(),
  endDate: new Date(),
  Event: -1,
};
