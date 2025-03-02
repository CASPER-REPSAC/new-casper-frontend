const ACTIVITY_STATUS = {
  active: '활동 중',
  rest: '휴학생',
  graduate: '졸업생',
};

export const ONLY_ADMIN = ['admin'];
export const CASPER_MEMBER_AND_ABOVE = ['admin', 'active', 'graduate', 'rest'];
export const LOGIN_USER_AND_ABOVE = [
  'admin',
  'active',
  'graduate',
  'rest',
  'associate',
];
export const ALL_ROLES = [
  'admin',
  'active',
  'graduate',
  'rest',
  'associate',
  'guest',
];

export default ACTIVITY_STATUS;
