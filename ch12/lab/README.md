# 12장 연습문제 해답 예

도커 네트워크를 생성하고 서비스를 실행한다.

```
docker network create --driver overlay numbers

docker service create --detach --network numbers --name numbers-api diamolkor/ch08-numbers-api:v3

docker service create --detach --network numbers --name numbers-web --publish 8020:80  diamolkor/ch08-numbers-web:v3
```

> Browse to http://localhost:8020 (or from a remote machine if you're using Windows containers)
> 웹브라우저에서 http://localhost:8020 에 접근한다(윈도우 컨테이너를 사용한다면 원격 컴퓨터에서 접근하라).

애플리케이션 화면이 보일 것이다.

![](solution.png)
