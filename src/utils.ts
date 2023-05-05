interface ImenuToUrl {
  [key: string]: string;
}

export const titleToUrl: ImenuToUrl = {
  "활동 중": "active",
  휴학생: "rest",
  졸업생: "graduate",
  공지사항: "notice_board",
  "정회원 게시판": "full_member_board",
  "준회원 게시판": "associate_member_board",
  "졸업생 게시판": "graduate_board",
};

export const urlToTitle: ImenuToUrl = {
  active: "활동 중",
  rest: "휴학생",
  graduate: "졸업생",
  notice_board: "공지사항",
  full_member_board: "정회원 게시판",
  associate_member_board: "준회원 게시판",
  graduate_board: "졸업생 게시판",
};
