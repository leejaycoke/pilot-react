## 파일럿 프로젝트 - React

React 파일럿 프로젝트를 진행한다.

본인이 알고 있는 지식, 할 수 있는 모든것을 총 동원하여 만든다.

로그인을 통해 토큰을 입력받은 뒤 회원정보를 보여주는 페이지로 이동한다.

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

- git (github)
- webstorm
- React
- Typescript
- Test Case 작성
- 자바스크립트 Object `{}` (type object 포함)의 사용을 하지말아보자!
- API 요청, 응답 데이터는 클래스를 이용

## 구현 내용

화면 구성, 디자인은 자유

### 로그인 페이지

아이디, 비밀번호를 입력하고 로그인하는 화면을 만든다.  
로그인이 완료되면 회원정보 페이지로 이동한다.

### 회원정보 페이지

회원정보를 보여주는 화면

## API 문서

[링크](https://github.com/leejaycoke/pilot-react/blob/master/API.md)

## 자랑하기

- [leejaycoke](https://github.com/leejaycoke/pilot-react/tree/main/results/hodolman) 예를들어 초보 개발자인데 한 번 해봤습니다. 피드백주세요
- [hojongs](https://github.com/leejaycoke/pilot-react/tree/main/results/hojongs) 프론트엔드 경험 전무하지만 Vue로 스타트 끊어봅니다!
- [jho2301](https://github.com/leejaycoke/pilot-react/tree/main/results/jho2301) 우아한테크코스 화이팅
- [kimbiyam](https://github.com/leejaycoke/pilot-react/tree/main/results/kimbiyam) 주니어 개발자인데 한번 구현해 봤습니다!
- [rolancia](https://github.com/leejaycoke/pilot-react/tree/main/results/rolancia) 응애 프엔 취준생입니다~! 당근과 채찍을...
- [byeongukchoi](https://github.com/leejaycoke/pilot-react/tree/main/results/byeongukchoi) 도전..!
- [boksilab](https://github.com/boksilab/pilot-react/tree/main/results/boksilab) 취준생 여러분 화이팅

