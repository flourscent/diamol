# 19장 연습문제 해답 예

일래스틱서치와 fluentd로 로그를 수집하도록 설정된 무작위 숫자 애플리케이션을 실행하라.


## 해답

필자의 해답은 크게 세 부분으로 구성된다.

- [solution.conf](./fluentd/conf/solution.conf) - fluentd의 로그 가공 및 필터링 설정
- [fluentd/solution.yml](./fluentd/solution.yml) - fluentd의 설정 오버라이드 파일
- [numbers/solution.yml](./numbers/solution.yml) - 애플리케이션의 fluentd 사용 설정 오버라이드 파일

## 테스트

현재 디렉토리에서 다음 명령으로 EFK 스택을 실행한다

```
docker-compose -f fluentd/docker-compose.yml -f fluentd/solution.yml up -d
```

그 다음 무작위 숫자 애플리케이션을 실행한다

```
docker-compose -f numbers/docker-compose.yml -f numbers/solution.yml up -d
```

웹브라우저에서 http://localhost:8090에 접근해 무작위 숫자를 몇 차례 생성한다.

그 다음 http://localhost:5601에 접근해 키바나를 사용한다

- 인덱스 패턴을 `fleuntd`로 설정
- 시간 필드를 `@timestamp`로 설정 

Discover 탭에서 API와 애플리케이션에서 수집된 로그를 볼 수 있다.

![키바나를 통해 본 애플리케이션 로그](./solution.png)
