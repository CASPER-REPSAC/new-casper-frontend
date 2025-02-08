import { BOARD_TYPE } from './mock';

const INTRA_PATH = {
  wiki: 'https://wiki.casper.or.kr',
  nas: 'https://nas.casper.or.kr',
  recruit: 'https://recruit.casper.or.kr',
};

const ADMIN_PATH = {
  user: '/admin/user',
  board: '/admin/board',
};

const NEW_PATH = {
  boardList: {
    url: ({
      boardType,
      page,
      category,
    }: {
      boardType: string;
      page: number;
      category: string;
    }) => `/boards/${boardType}/list/${category}/${page}`,
  },
  passwordUpdate: { url: '/mypage/password-update' },
  passwordFind: {
    url: '/find/password',
  },
  idFind: {
    url: '/find/id',
  },
  login: { url: '/login' },
  mypage: { url: '/mypage' },
  assignmentList: { url: (page: number) => `/assignment?page=${page}` },
  assignmentDetail: { url: (id: number) => `/assignment/${id}` },
  assignmentCreate: { url: '/assignment/create' },
  assignmentSubmit: { url: '/assignment/submit' },
  assignmentEdit: {
    url: ({
      assignmentId,
      submitId,
    }: {
      assignmentId: number;
      submitId: number;
    }) => `/assignment/${assignmentId}/${submitId}/edit`,
  },
  submitDetail: {
    url: ({
      assignmentId,
      submitId,
    }: {
      assignmentId: number;
      submitId: number;
    }) => `/assignment/${assignmentId}/${submitId}`,
  },
};

/**
 * @deprecated NEW_PATH 사용 권장
 */
const PATH = {
  home: {
    name: '홈',
    url: '/',
  },
  posts: {
    name: '글 쓰기',
    url: '/posts',
  },
  boards: {
    notice: {
      name: '공지사항',
      url: `/boards/${BOARD_TYPE.notice}`,
    },
    full: {
      name: '정회원 게시판',
      url: `/boards/${BOARD_TYPE.full}`,
    },
    associate: {
      name: '준회원 게시판',
      url: `/boards/${BOARD_TYPE.associate}`,
    },
    graduate: {
      name: '졸업생 게시판',
      url: `/boards/${BOARD_TYPE.graduate}`,
    },
    free: {
      name: '자유 게시판',
      url: `/boards/${BOARD_TYPE.freedom}`,
    },
  },
  members: {
    active: {
      name: '활동 중',
      url: '/members/active',
    },
    rest: {
      name: '휴학생',
      url: '/members/rest',
    },
    graduate: {
      name: '졸업생',
      url: '/members/graduate',
    },
    all: {
      name: '전체',
      url: '/members/all',
    },
  },
  user: {
    login: {
      name: '로그인',
      url: '/login',
    },
    mypage: {
      name: '마이페이지',
      url: '/mypage',
    },
    join: {
      name: '회원가입',
      url: '/join',
    },
  },
  assignment: {
    list: {
      name: '과제 목록',
      url: (page: number) => `/assignment/${page}`,
    },
  },
  extra: {
    nas: {
      name: 'Nas',
      url: 'https://nas.casper.or.kr/',
    },
    wiki: {
      name: 'Wiki',
      url: 'https://www.casper.or.kr/dokuwiki/doku.php',
    },
    recruit: {
      name: 'Recruit',
      url: 'https://recruit.casper.or.kr/',
    },
  },
} as const;

Object.freeze(PATH);
Object.freeze(ADMIN_PATH);
Object.freeze(INTRA_PATH);

export { PATH, ADMIN_PATH, NEW_PATH, INTRA_PATH };
