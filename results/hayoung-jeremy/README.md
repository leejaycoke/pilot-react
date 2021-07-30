# 파일럿 프로젝트

로그인 및 회원 정보 페이지를 구현합니다.  
개발 과정은 [여기](https://www.notion.so/pilot-react-b157a0338a4241059380400d608727d7)에 기록하였습니다.
<br/><br/>

## 시연

![React App - Chrome 2021-07-30 16-24-08](https://user-images.githubusercontent.com/74491172/127616969-9d9640f7-930d-44fa-842a-f144a2a4e596.gif)

## 기술 스택

* build tool : `create-react-app`
* language : `typescript`
* SPA framework : `react`
* state management : `redux-toolkit`

## PR

- React 프로젝트는 `./results/본인아이디`에 생성한다.
- README.md 마지막 `자랑하기`에 본인의 repository 주소를 넣고 PR

## 설치

1. [Docker](https://www.docker.com/) 설치
2. [Repository](https://github.com/leejaycoke/pilot-auth) Fork & Clone

```bash
$ docker build -t pilot-auth .
$ docker run --name pilot-auth -p 5000:5000 pilot-auth

# restart
$ docker start -a pilot-auth
```

> 서버가 재시작 되면 인증 토큰이 갱신됩니다.

## 요구 사항

- [x] git (github)
- [x] webstorm
- [x] React
- [x] Typescript
- [ ] Test Case 작성
- [x] 자바스크립트 Object `{}` (type object 포함)의 사용을 하지말아보자!
- [x] API 요청, 응답 데이터는 클래스를 이용

## 구현 내용

화면 구성, 디자인은 자유

### 로그인 페이지

아이디, 비밀번호를 입력하고 로그인하는 화면을 만든다.  
로그인이 완료되면 회원정보 페이지로 이동한다.

### 회원정보 페이지

회원정보를 보여주는 화면

## API 문서

[링크](https://github.com/leejaycoke/pilot-react/blob/master/API.md)
