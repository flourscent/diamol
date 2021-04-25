# 7장 연습문제 해답 예

## 개발 환경

Sqlite 데이터베이스를 사용하며, 웹 애플리케이션이 포트 8020을 통해 공개된다.

이 디렉토리에서 다음 명령을 실행하면 된다.

```
docker-compose -f docker-compose-dev.yml up -d
```

## 테스트 환경

```
mkdir -p /data/postgres

docker-compose -f docker-compose-test.yml up -d
```

## 테스트 환경 (윈도우)

```
mkdir -p /data/postgres

docker-compose -f docker-compose-test-windows.yml up -d
```
