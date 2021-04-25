# 6장 연습문제 해답 예


6장의 내용을 진행하는 동안 실행 중인 컨테이너의 수가 너무 많아졌다면, 다음 명령을 사용해 컨테이너를 제거한다.

> 주의: 다음 명령을 실행하면 기존의 **모든** 컨테이너가 제거된다.

```
docker container rm -f $(docker container ls -aq)
```

이제 연습문제의 이미지로 컨테이너를 실행한다.

```
docker container run -d -p 8015:80 diamolkor/ch06-lab
```

웹 브라우저에서 http://localhost:8015/list 에 접근해 보면 아래와 같은 화면을 볼 수 있다.

![할일 목록의 예](./todo-list-v3.png)

> 할일 목록의 예

그 다음 데이터베이스 파일을 저장할 볼륨을 생성한다.

```
docker volume create ch06-lab
```

설정 파일에서 데이터베이스 파일을 저장할 경로를 지정할 수 있는데, 이 경로는 볼륨 마운트를 대상으로 할 수도 있다.

필자의 [config.json](.solution/config.json) 파일에는 데이터베이스 파일을 `/new-data`에 저장하도록 설정했다.

그리고 다음 대상을 모두 사용하는 컨테이너를 실행한다.

- 컨테이너가 새로운 설정 파일을 읽어오는 읽기전용 바인드 마운트
- 데이터베이스 파일을 저장할 쓰기가능 볼륨 마운트


이 경로는 다음과 같이 지정한다(윈도우)

```
$configSource="$(pwd)/solution".ToLower()
$configTarget='c:\app\config'
$dataTarget='c:\new-data'
```

리눅스 환경에서는 다음과 같이 지정한다

```
configSource="$(pwd)/solution"
configTarget='/app/config'
dataTarget='/new-data'
```

그리고 컨테이너를 실행한다.

```
docker container run -d -p 8016:80 --mount type=bind,source=$configSource,target=$configTarget,readonly --volume ch06-lab:$dataTarget diamolkor/ch06-lab
```

마지막으로 웹 브라우저에서 http://localhost:8016/list 에 접근해 결과를 확인한다.

> 이제 할일을 무한정 추가할 수 있는 빈 목록을 볼 수 있다.