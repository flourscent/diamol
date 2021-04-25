# 21장 연습문제 해답 예

to-do 애플리케이션에 사용자가 저장한 텍스트를 수정하는 메시지 핸들러를 추가한다.

## 설정

필자가 작성한 [컴포즈 파일](./docker-compose.yml)은 본문에 제시된 모든 오버라이드 파일을 통합한 파일이며 이를 출발점으로 삼는다.

메시지 핸들러를 위한 환경 변수를 설정한다. 이 환경 변수는 "event-saved" 메시지가 퍼블리시 되도록 하는 역할을 한다([세이브 핸들러 도커 파일](../exercises/todo-list/src/save-handler/Dockerfile)을 참고하라).

```
  save-handler:
    image: diamol/ch21-save-handler
    environment:
      - Events__events.todo.itemsaved__Publish=true
    networks:
      - app-net
```

그리고 메시지를 수정하는 핸들러를 구현할 새로운 서비스를 추가한다. 메시지 큐의 URL이 필요하다([기본 설정 파일](../exercises/todo-list/src/mutating-handler/appsettings.json)을 참고하라).

```
  mutating-handler:
    image: diamol/ch21-mutating-handler
    environment:
      - MessageQueue__Url=nats://message-queue:4222
    networks:
      - app-net
```
## 테스트하기

`docker-compose up -d` 명령을 실행한다.

모든 핸들러가 메시지 큐를 주시하는지 확인한다

```
docker container logs lab_save-handler_1
docker container logs lab_audit-handler_1
docker container logs lab_mutating-handler_1
```

웹브라우저에서 http://localhost:8081/new에 접근해 새로운 할일을 몇 개 추가한다. 모든 핸들러가 동작을 마칠 때까지 잠시 기다렸다가 할일 목록을 리프레시한다. 업데이트된 목록을 확인하면 조금 전 저장한 할일의 내용에 변화가 있는 것을 알 수 있다.
![메시지 핸들러를 이용한 데이터 내용 변경](./solution.png)
