# 😀 Introduction


### 프로젝트 요약
캐스퍼의 새로운 홈페이지 개발을 위한 프론트엔드 repository 입니다.

|제목|내용|
|---|---|
|사용 기술|Next.js 14 (App router), Typescript, Tailwind CSS, recoil, react-query, framer-motion, react-hook-form|
|개발 일지|[Blog](https://velog.io/@jijiseong/series/new-casper-%EA%B0%9C%EB%B0%9C-%EC%9D%BC%EC%A7%80)|
|협업 공간|[Notion](https://small-warrior-8dd.notion.site/New-Casper-2203c874dec94cbaa4d6065ba7076606?pvs=4)|
|개발 기간|2023.04 ~ 진행 중|


### 팀원

|<img src="https://avatars.githubusercontent.com/u/77661228?v=4" width="100" />|<img src="https://avatars.githubusercontent.com/u/54249015?v=4" width="100" />|<img src="https://avatars.githubusercontent.com/u/108794308?v=4" width="100" />|
|---|---|---|
|[FE - 박지성](https://github.com/jijiseong)|[BE - 우태정](https://github.com/ine9141)|[Server - 차원제](https://github.com/breakpack)|

# 주요기능

## 게시글 목록 페이지
![image](https://github.com/CASPER-REPSAC/new-casper-frontend/assets/77661228/013ecb4e-911b-4d37-b6f7-27b99c26f5b7)
### 기능
- 게시글 목록을 볼 수 있습니다.
- 공지사항, 정회원 게시판, 준회원 게시판, 졸업생 게시판, 자유 게시판이 존재합니다.
- **SSR** 방식과 **Skeleton UI** 사용을 통해 UX를 향상하였습니다.
- 회원의 권한에 따라 접근을 제한합니다.
    - 관리자: 모든 게시판 접근 가능
    - 정회원: 모든 게시판 접근 가능
    - 준회원: 공지사항, 준회원 게시판, 자유 게시판 접근 가능
    - 비로그인: 공지사항, 자유 게시판 접근 가능

## 게시글 쓰기 페이지
![글쓰기](https://github.com/CASPER-REPSAC/new-casper-frontend/assets/77661228/dec22de2-047e-4b27-ab34-7a01c5b008b3)


### 기능

- Notion과 유사한 UX를 제공하는 에디터를 통해 게시글 쓰기를 할 수 있습니다.

### 예외 처리

- 쓰기 권한이 없다면, 팝업 알림과 함께 로그인 페이지로 이동합니다.

## 게시글 상세 페이지
![image](https://github.com/CASPER-REPSAC/new-casper-frontend/assets/77661228/0611bb93-ac9f-4175-9ab0-3cecfbbec8bd)
### 기능

- 게시글 상세 내용을 조회, 수정, 삭제할 수 있습니다.
- 수정 / 삭제 버튼은 본인의 글에서만 나타납니다.
- 댓글 기능 (구현 예정)

### 예외 처리

- 타인의 글을 수정/삭제 시도할 시 토스트 팝업 알림이 나타납니다.

## 정회원 소개 페이지
![멤버소개](https://github.com/CASPER-REPSAC/new-casper-frontend/assets/77661228/921ca2c0-948a-4c34-b452-c60ba9d394ce)

### 기능

- 동아리 정회원들의 소개를 카드 형식으로 볼 수 있는 페이지입니다.
- 멤버 카드를 클릭해 상세 내용을 조회할 수 있습니다.
- **ISG 방식을 사용하여 빠른 렌더링이 가능합니다.**

## 회원가입
![회원가입](https://github.com/CASPER-REPSAC/new-casper-frontend/assets/77661228/0a20048d-5aa0-4c0e-be08-a7defe5f5af4)

### 기능

- 아이디, 패스워드, 이름, 닉네임 등을 입력한 후 회원 가입할 수 있습니다.
- Funnel 패턴 사용
    - 한 페이지에서 하나의 정보만을 입력하도록 유도하여 UX를 향상하였습니다.
- 이메일 인증 (구현 예정)

### 예외 처리

- **react-hook-form**을 사용해 유효성 검사를 하였습니다.
- 유효하지 않은 값이 입력 되었을 때, 빨간색 오류 메시지를 보여줍니다.
- 값이 누락된 채로 회원가입을 시도할 때, 토스트 팝업 알림을 띄웁니다.

## 로그인
![image](https://github.com/CASPER-REPSAC/new-casper-frontend/assets/77661228/33d73879-090c-4401-afb3-d18093d1378a)

### 기능

- JWT를 사용해 로그인을 수행합니다.
- **refreshToken을 사용하여** **자동 로그인이 가능합니다.**

### 예외처리

- 아이디, 비밀번호를 잘 못 입력하였을 때, 토스트 팝업 알림을 띄웁니다.

## 반응형 디자인
|모바일|태블릿|데스크탑|
|---|---|---|
|(이미지 업데이트 예정..)|(이미지 업데이트 예정..)|(이미지 업데이트 예정..)|


## dark/light mode
![image](https://github.com/CASPER-REPSAC/new-casper-frontend/assets/77661228/f1c4bd89-021e-4573-a3fa-770aa9d0f0a3)
### 기능

- dark / light 모드를 지원합니다.
- localStorage를 이용해 사용자의 선택을 기억합니다.


## 내 정보 페이지
![image](https://github.com/CASPER-REPSAC/new-casper-frontend/assets/77661228/f37aa2fa-f1ee-47ef-8298-be32ef8bded2)

### 기능

- 나의 정보(이름, 닉네임, 소개글, 회원 권한, 이메일)를 확인할 수 있습니다.
- 소개글, 이름, 닉네임을 수정할 수 있습니다.

## 토스트팝업
![토스트](https://github.com/CASPER-REPSAC/new-casper-frontend/assets/77661228/7674d9a2-cd8e-48ee-b3de-813ea6e67a11)

### 기능

- 사용자의 액션에 대한 피드백을 제공합니다.
- 예외적인 상황 또는 에러 처리에 활용합니다.
