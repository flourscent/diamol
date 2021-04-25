# 4장 연습문제 해답 예

## 최적화 전
docker image build -t ch04-lab .

docker container run -d -p 804:80 ch04-lab

이미지 크기는 리눅스 환경에서 800MB, 윈도우 환경에서 5.2GB다.

## 최적화 후
docker image build -t ch04-lab:optimized -f Dockerfile.optimized .

docker container run -d -p 805:80 ch04-lab:optimized

이미지 크기는 리눅스 환경에서 15MB, 윈도우 환경에서 230MB다.

## 리눅스

```
>docker image ls ch04*
REPOSITORY          TAG                 IMAGE ID            CREATED             SIZE 
ch04-lab            optimized           acd8afedcb0d        16 minutes ago      15.3MB
ch04-lab            latest              87d6bce2a950        19 minutes ago      802MB
```

## 윈도우

```
>docker image ls ch04*
REPOSITORY          TAG                 IMAGE ID            CREATED              SIZE
ch04-lab            optimized           2f017c0f1524        About a minute ago   260MB
ch04-lab            latest              42013cf1495c        2 minutes ago        5.14GB
```
