export const API_URL = process.env.NEXT_PUBLIC_API_URL;
export const LOGIN_API = '/api/user/login';
export const LOGOUT_API = '/api/user/logout';
export const JOIN_API = '/api/user/join';
export const WITHDRAWAL_API = '/api/user/withdrawal';
export const USER_SHOW_API = '/api/user/show';
export const ALBUM_API = '/api/article/album';
export const BOARD_API = '/api/list/board/{num}';
export const ARTICLE_LIST_API = '/api/article'; // + {boardID}/{articleId}
export const ARTICLE_DETAIL_API = '/api/article/view';
export const POST_ARTICLE_API = '/api/article/write';
export const COMMENT_WRITE_API = '/api/article/write';
export const MEMBER_API = '/api/user/show';
export const AUTO_LOGIN_API = '/api/user/refresh';
export const ALL_MEMEBER_API = '/api/user/showall'; // + ?role={role}
export const DELETE_ARTICLE_API = '/api/article/delete'; // + {articleId}
export const UPDATE_ARTICLE_API = '/api/article/update'; // + {articleId}
export const PROFILE_UPLOAD_API = '/api/user/image';
export const PROFILE_UPDATE_API = '/api/user/update';
export const COMMENT_API = (articleId: string) =>
  `/api/article/${articleId}/comment`;

export const GOOGLE_OAUTH = 'https://accounts.google.com/o/oauth2/v2/auth';
export const GITHUB_OAUTH = '';
