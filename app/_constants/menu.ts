import { BOARD_TYPE, MEMBER_TYPE } from './mock';
import { NEW_PATH, PATH } from './urls';

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
    name: '공지사항',
    accessibleRoles: ['관리자', '정회원', '준회원', '손님'],
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
    accessibleRoles: ['관리자', '정회원'],
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
    accessibleRoles: ['관리자', '정회원'],
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
    accessibleRoles: ['관리자', '정회원', '준회원'],
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
    name: '지유게시판',
    accessibleRoles: ['관리자', '정회원', '준회원', '손님'],
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
