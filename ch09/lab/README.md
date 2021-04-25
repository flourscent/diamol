# 9장 연습문제 해답 예

이번 연습문제의 to-do 애플리케이션은 프로메테우스 지원이 포함돼 있다. 다음과 같이 컨테이너를 실행해 이를 확인할 수 있다.

```
docker container dun -d -p 8050:80 diamol/ch09-todo-list
```

웹브라우저에서 http://localhost:8050 에 접근해 할일 항목을 몇개 추가한다.

그 다음 웹브라우저에서 다시 http://localhost:8050/metrics 에 접근해 프로메테우스가 수집한 정보를 볼 수 있다.

## 프로메테우스 커스텀 이미지

프로메테우스에서 to-do 애플리케이션의 정보를 수집하려면 수집 설정이 필요하다.

[prometheus.yml](./prometheus/prometheus.yml) 파일에서 수집 설정을 볼 수 있다.

```
  - job_name: "todo-list"
    metrics_path: /metrics
    static_configs:
      - targets: ["todo-list"]
```

그리고 이 설정 파일을 이미지에 함께 패키징하는 스크립트 [Dockerfile](./prometheus/Dockerfile)도 볼 수 있다.

## 그라파나 커스텀 이미지

to-do 애플리케이션 및 수집 설정이 끝난 프로메테우스 컨테이너가 있을 때 수집된 정보를 보여주는 대시보드가 정의된 그라파나 컨테이너도 준비해 두었다. 이 대시보드는 세 개의 패널로 구성된다.

![to-do 애플리케이션의 그라파나 대시보드 화면](./dashboard.png)

통합이나 필터링을 사용하지 않는 직관적인 PromQL 쿼리만을 사용했다.

- `todo_tasks_created_total`
- `http_requests_received_total`
- `http_requests_in_progress`

이 쿼리를 JSON 파일 [dashboard.json](./grafana/dashboard.json)로 익스포트했다.

그라파나 이미지의 [Dockerfile](./grafana/Dockerfile)은 프로메테우스 데이터소스 및 대시보드를 포함한다(9장의 내용과 같은 방법으로 만들었다).


## 측정값 수집이 적용된 애플리케이션 실행

이 컴포즈 파일 [docker-compose.yml](docker-compose.yml)은 측정값 수집 및 그라파나 시각화를 포함해 애플리케이션을 실행한다.

다음 명령을 사용하면 된다.

```
docker-compose up -d
```

컨테이너 실행 후 웹브라우저에서 http://localhost:8050에 접근해 할일 항목을 몇 개 추가한 다음, http://localhost:3000에 접근한다.
