import { BOARD_TYPE, MEMBER_TYPE } from './mock';
import { PATH } from './urls';

export const MEMBER_TABS = [
  {
    key: MEMBER_TYPE.active,
    href: PATH.members.active.url,
    name: PATH.members.active.name,
    startWith: PATH.members.active.url,
    accessibleRoles: ['관리자', '정회원', '준회원', '손님'],
  },
  {
    key: MEMBER_TYPE.rest,
    href: PATH.members.rest.url,
    name: PATH.members.rest.name,
    startWith: PATH.members.rest.url,
    accessibleRoles: ['관리자', '정회원', '준회원', '손님'],
  },
  {
    key: MEMBER_TYPE.graduate,
    href: PATH.members.graduate.url,
    name: PATH.members.graduate.name,
    startWith: PATH.members.graduate.url,
    accessibleRoles: ['관리자', '정회원', '준회원', '손님'],
  },
  {
    key: MEMBER_TYPE.all,
    href: PATH.members.all.url,
    name: PATH.members.all.name,
    startWith: PATH.members.all.url,
    accessibleRoles: ['관리자'],
  },
];

export const BOARD_TABS = [
  {
    key: BOARD_TYPE.notice,
    href: `${PATH.boards.notice.url}/list/1`,
    name: PATH.boards.notice.name,
    startWith: PATH.boards.notice.url,
    accessibleRoles: ['관리자', '정회원', '준회원', '손님'],
  },
  {
    key: BOARD_TYPE.full,
    href: `${PATH.boards.full.url}/list/1`,
    name: PATH.boards.full.name,
    startWith: PATH.boards.full.url,
    accessibleRoles: ['관리자', '정회원'],
  },
  {
    key: BOARD_TYPE.graduate,
    href: `${PATH.boards.graduate.url}/list/1`,
    name: PATH.boards.graduate.name,
    startWith: PATH.boards.graduate.url,
    accessibleRoles: ['관리자', '정회원'],
  },
  {
    key: BOARD_TYPE.associate,
    href: `${PATH.boards.associate.url}/list/1`,
    name: PATH.boards.associate.name,
    startWith: PATH.boards.associate.url,
    accessibleRoles: ['관리자', '정회원', '준회원'],
  },
  {
    key: BOARD_TYPE.freedom,
    href: `${PATH.boards.free.url}/list/1`,
    name: PATH.boards.free.name,
    startWith: PATH.boards.free.url,
    accessibleRoles: ['관리자', '정회원', '준회원', '손님'],
  },
];
