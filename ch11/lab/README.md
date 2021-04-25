# 11장 연습문제 해답 예

## 오버라이드 파일 생성하기

- 다음 내용을 담아 `docker-compose-build.yml` 파일을 만든다.

```
version: "3.7"

services:
  todo-web:
    build:
      context: todo-list
      dockerfile: Dockerfile
      args:
        BUILD_NUMBER: ${BUILD_NUMBER:-0}
```

## Jenkins job
## 젠킨스 빌드 잡 생성하기

- 젠킨스에 로그인

- `diamol` 항목을 복사한다

- 스크립트 경로를 ch11/lab/Jenkinsfile 로 수정한다

- Build Now를 클릭한다 

- 이미지가 로컬 레지스트리에 푸시된 것을 확인한다

```
curl http://registry.local:5000/v2/diamolkor/ch11-todo-list/tags/list
```
