import { BOARD_TYPE } from './mock';
import { INTRA_PATH, NEW_PATH, PATH } from './urls';

export const MEMBER_TABS = [
  {
    href: PATH.members.active.url,
    name: PATH.members.active.name,
    startWith: PATH.members.active.url,
    accessibleRoles: ['관리자', '정회원', '준회원', '손님'],
  },
  {
    href: PATH.members.rest.url,
    name: PATH.members.rest.name,
    startWith: PATH.members.rest.url,
    accessibleRoles: ['관리자', '정회원', '준회원', '손님'],
  },
  {
    href: PATH.members.graduate.url,
    name: PATH.members.graduate.name,
    startWith: PATH.members.graduate.url,
    accessibleRoles: ['관리자', '정회원', '준회원', '손님'],
  },
  {
    href: PATH.members.all.url,
    name: PATH.members.all.name,
    startWith: PATH.members.all.url,
    accessibleRoles: ['관리자'],
  },
];

export const INTRA_TABS = [
  {
    name: 'Wiki',
    href: INTRA_PATH.wiki,
    accessibleRoles: ['관리자', '정회원', '준회원'],
  },
  {
    name: 'Nas',
    href: INTRA_PATH.nas,
    accessibleRoles: ['관리자', '정회원', '준회원'],
  },
  {
    name: 'Recruit',
    href: INTRA_PATH.recruit,
    accessibleRoles: ['관리자', '정회원', '준회원'],
  },
];

export const BOARD_TABS = [
  {
    name: '공지사항',
    accessibleRoles: ['관리자', '정회원', '준회원', '손님'],

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
    accessibleRoles: ['관리자', '정회원'],

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
    accessibleRoles: ['관리자', '정회원'],

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
    accessibleRoles: ['관리자', '정회원', '준회원'],

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
    accessibleRoles: ['관리자', '정회원', '준회원', '손님'],

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
