## 주소

http://localhost:5000

## 공통 요청

### 로그인 정보

* 아이디: devbadak
* 비밀번호: 1234

> 로그인을 하거나 서버가 재시작 되면 인증 토큰이 바뀝니다.

### ContentType

`application/json`

### 인증 방식

헤더 인증방식을 사용한다.

`Authorization: Bearer 토큰`

## 공통 응답

### 에러 응답

서버에서 `code`, `message`값을 응답한다.

```json
{
    "code": 400,
    "message": "에러 메시지"
}
```

### 폼 검증을 포함한 에러응답

```json
{
    "code": 400,
    "message": "잘못된 요청입니다.",
    "validate": {
        "account": ["1~4글자만 입력할 수 있습니다.", "..."],
        "password": ["비밀번호를 입력해주세요"]
    }
}
```

## 인증

### 로그인
URI: `/auth/login`  
Method: `POST`

- Request
 
    ```json
    {
        "account": "아이디",
        "password": "비밀번호"
    }
    ```

- Response

    ```json
    {
        "accessToken": "xxx"
    }
    ```

### 로그아웃
URI: `/auth/logout`  
Method: `GET`  

- Response: `status 204`


## 회원정보

### 회원정보 조회

URI: `/v1/users/me`  
Method: `GET`

- Response

    ```json
    {
        "id": 1,
        "account": "devbadak",
        "name": "개발바닥",
        "level": 10
    }
    ```