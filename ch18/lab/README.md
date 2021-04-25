# 18장 연습문제 해답 예

분산 애플리케이션에 설정 오버라이드 파일과 환경 변수를 이용한 설정 적용하기

## 해답

필자가 작성한 [docker-compose-solution.yml](./docker-compose-solution.yml) 파일은 각 컴포넌트의 설정 파일을 볼륨을 통해 주입한다. 설정 파일은 각각의 컴포넌트에 설정된 이름을 가지므로 모든 설정 파일을 한 디렉토리에 둘 수 있다.

설정 파일에 릴리즈 주기 정보를 변경한다.

## 테스트

현재 디렉토리에서 다음 명령으로 애플리케이션을 실행한다.

```
docker-compose -f docker-compose-solution.yml up -d
```

그 다음 각 컴포넌트의 설정 API를 호출한다.

```
curl http://localhost:8030/config
curl http://localhost:8020/config
curl http://localhost:8010/config
```

모든 컴포넌트의 환경이 `TEST`이고, 릴리즈 주기는 `20.01`이면 정상이다.
또한 http://localhost:8010에 웹브라우저에서 접근하면 애플리케이션이 정상 동작해야 한다.

![애플리케이션의 화면과 설정 API의 호출 결과](./solution.png)
