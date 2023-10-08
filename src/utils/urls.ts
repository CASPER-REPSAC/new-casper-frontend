export const ADMIN_PATH = {
  home: {
    name: '관리자',
    url: '/admin',
  },
  dashboard: {
    name: '대시보드',
    url: '/admin/dashboard',
  },
  users: {
    url: '/admin/users',
    name: '사용자',
    children: {
      log: {
        name: '로그',
        url: '/admin/users/log',
      },
      list: {
        name: '사용자 목록',
        url: '/admin/users/list',
      },
      authority: {
        name: '권한',
        url: '/admin/users/authority',
      },
    },
  },
  boards: {
    url: '/admin/boards',
    name: '게시판',
    children: {
      boards: { name: '게시판 관리', url: '/admin/boards/list' },
      posts: { name: '게시글 관리', url: '/admin/boards/posts' },
      comments: { name: '댓글 관리', url: '/admin/boards/comments' },
    },
  },
  files: {
    name: '파일',
    url: '/admin/files',
  },
  banner: {
    name: '배너',
    url: '/admin/banner',
  },
  menu: {
    name: '메뉴',
    url: '/admin/menu',
  },
};
export const PATH = {
  home: {
    name: '홈',
    url: '/',
  },
  boards: {
    notice: {
      name: '공지사항',
      url: '/boards/notice_board/1',
    },
    full: {
      name: '정회원 게시판',
      url: '/boards/full_member_board/1',
    },
    associate: {
      name: '준회원 게시판',
      url: '/boards/associate_member_board/1',
    },
    graduate: {
      name: '졸업생 게시판',
      url: '/boards/graduate_member_board/1',
    },
    posts: {
      name: '글 쓰기',
      url: '/boards/posts',
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
};
