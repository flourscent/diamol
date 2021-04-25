# to-do 애플리케이션 - 서버사이드 블레이저를 사용해 구현함

## 윈도우에서 빌드하기
 
볼륨 경로는 C 드라이브여야 한다

```
docker image build -t diamol/todo-blazor --build-arg DATA_DIRECTORY=C:/data .
```

## 볼륨 공유하기

컨테이너를 실행한다

```
docker container run --name todo1 -it diamol/ch06-todo-list
```

할일 항목을 몇 개 추가한다

또 다른 컨테이너를 실행한다

```
docker container run --name todo2 -it diamol/todo-blazor
```

새로 실행한 컨테이너의 할일 목록이 비어있는지 확인한다

첫 번째 컨테이너의 볼륨을 공유하는 컨테이너를 또 실행한다

```
docker container run --name todo3 --volumes-from todo1 -it diamol/todo-blazor
```

새로 실행한 컨테이너의 할일 목록에 첫 번째 컨테이너에서 추가한 항목이 있는지 확인한다.
