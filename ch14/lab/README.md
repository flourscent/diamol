# 14장 연습문제 해답 예

스택을 배포한 다음 모든 레플리카가 정상인지 확인한다

```
docker stack deploy -c image-gallery.yml image-gallery

docker stack ps image-gallery
```

API 서비스가 정상적으로 설정되고 실행됐는지 확인한다

```
docker service inspect --pretty image-gallery_iotd

docker service ps image-gallery_iotd
```

v2 컴포즈 파일을 합쳐 v2로 업데이트한다.

```
docker-compose -f image-gallery.yml -f v2.yml --log-level ERROR config > stack.yml

docker stack deploy -c stack.yml image-gallery

docker service ps image-gallery_iotd
```

롤링 업데이트가 정상적으로 진행된다. 업데이트가 실패하고 롤백된다면 헬스 체크 대기 허용 시간을 좀더 길게 설정한다.

필자의 환경에서 실행한 결과 이미지다.

![Bat Nebula](solution.png)
