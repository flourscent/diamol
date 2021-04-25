# 10장 연습문제 해답 예


## 개발 환경

```
docker-compose up -d
```

## 테스트 환경

```
docker-compose -f .\docker-compose.yml -f .\docker-compose-test.yml -p ch10-lab-test up -d
```

> 데이터베이스 컨테이너가 볼륨을 사용하므로 'up', 'down' 후에도 데이터가 유지된다.
