'use client';

import { BOARD_TYPE, MEMBER_TYPE } from './mock';
import { ADMIN_PATH, INTRA_PATH, NEW_PATH, PATH } from './urls';

const ONLY_ADMIN = ['admin'];
const CASPER_MEMBER_AND_ABOVE = ['admin', 'active', 'graduate', 'rest'];
const LOGIN_USER_AND_ABOVE = [
  'admin',
  'active',
  'graduate',
  'rest',
  'associate',
];
const ALL_ROLES = ['admin', 'active', 'graduate', 'rest', 'associate', 'guest'];

export const MEMBER_TABS = [
  {
    key: MEMBER_TYPE.active,
    href: PATH.members.active.url,
    name: PATH.members.active.name,
    startWith: PATH.members.active.url,
    accessibleRoles: ALL_ROLES,
  },
  {
    key: MEMBER_TYPE.rest,
    href: PATH.members.rest.url,
    name: PATH.members.rest.name,
    startWith: PATH.members.rest.url,
    accessibleRoles: ALL_ROLES,
  },
  {
    key: MEMBER_TYPE.graduate,
    href: PATH.members.graduate.url,
    name: PATH.members.graduate.name,
    startWith: PATH.members.graduate.url,
    accessibleRoles: ALL_ROLES,
  },
  {
    key: MEMBER_TYPE.all,
    href: PATH.members.all.url,
    name: PATH.members.all.name,
    startWith: PATH.members.all.url,
    accessibleRoles: ONLY_ADMIN,
  },
];

export const INTRA_TABS = [
  {
    name: 'Wiki',
    href: INTRA_PATH.wiki,
    accessibleRoles: CASPER_MEMBER_AND_ABOVE,
  },
  {
    name: 'Nas',
    href: INTRA_PATH.nas,
    accessibleRoles: CASPER_MEMBER_AND_ABOVE,
  },
  {
    name: 'Recruit',
    href: INTRA_PATH.recruit,
    accessibleRoles: CASPER_MEMBER_AND_ABOVE,
  },
];

export const BOARD_TABS = [
  {
    name: '공지사항',
    accessibleRoles: ALL_ROLES,
    key: BOARD_TYPE.notice,
    href: NEW_PATH.boardList.url({
      boardType: BOARD_TYPE.notice,
      category: 'all',
      page: 1,
    }),
    startWith: NEW_PATH.boardList
      .url({
        boardType: BOARD_TYPE.notice,
        category: 'all',
        page: 1,
      })
      .split('/list')[0],
  },
  {
    name: '정회원 게시판',
    accessibleRoles: CASPER_MEMBER_AND_ABOVE,
    key: BOARD_TYPE.full,
    href: NEW_PATH.boardList.url({
      boardType: BOARD_TYPE.full,
      category: 'all',
      page: 1,
    }),
    startWith: NEW_PATH.boardList
      .url({
        boardType: BOARD_TYPE.full,
        category: 'all',
        page: 1,
      })
      .split('/list')[0],
  },
  {
    name: '졸업생 게시판',
    accessibleRoles: CASPER_MEMBER_AND_ABOVE,
    key: BOARD_TYPE.graduate,
    href: NEW_PATH.boardList.url({
      boardType: BOARD_TYPE.graduate,
      category: 'all',
      page: 1,
    }),
    startWith: NEW_PATH.boardList
      .url({
        boardType: BOARD_TYPE.graduate,
        category: 'all',
        page: 1,
      })
      .split('/list')[0],
  },
  {
    name: '준회원 게시판',
    accessibleRoles: CASPER_MEMBER_AND_ABOVE,
    key: BOARD_TYPE.associate,
    href: NEW_PATH.boardList.url({
      boardType: BOARD_TYPE.associate,
      category: 'all',
      page: 1,
    }),
    startWith: NEW_PATH.boardList
      .url({
        boardType: BOARD_TYPE.associate,
        category: 'all',
        page: 1,
      })
      .split('/list')[0],
  },
  {
    name: '자유게시판',
    accessibleRoles: ALL_ROLES,
    key: BOARD_TYPE.freedom,
    href: NEW_PATH.boardList.url({
      boardType: BOARD_TYPE.freedom,
      category: 'all',
      page: 1,
    }),
    startWith: NEW_PATH.boardList
      .url({
        boardType: BOARD_TYPE.freedom,
        category: 'all',
        page: 1,
      })
      .split('/list')[0],
  },
];

export const MENU_ITEMS = [
  {
    title: 'Admin',
    href: `${ADMIN_PATH.user}`,
    desc: '관리자',
    accessibleRoles: ONLY_ADMIN,
  },
  {
    title: 'Members',
    href: PATH.members.active.url,
    tabs: MEMBER_TABS,
    desc: 'Casper 정회원 멤버들의 소개를 확인해보세요.',
    accessibleRoles: ALL_ROLES,
  },
  {
    title: 'Boards',
    href: NEW_PATH.boardList.url({
      boardType: BOARD_TYPE.notice,
      page: 1,
      category: 'all',
    }),
    tabs: BOARD_TABS,
    desc: 'Casper 회원들의 소통을 위한 공간이에요.?',
    accessibleRoles: ALL_ROLES,
  },
  {
    title: 'Assignment',
    desc: '과제 관리 서비스를 사용해보세요.',
    href: NEW_PATH.assignmentList.url(1),
    accessibleRoles: LOGIN_USER_AND_ABOVE,
  },
  {
    title: 'Intra',
    tabs: INTRA_TABS,
    desc: 'Casper의 서비스를 이용해보세요.',
    accessibleRoles: CASPER_MEMBER_AND_ABOVE,
  },
];
