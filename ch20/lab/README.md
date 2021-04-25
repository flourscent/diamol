# 20장 연습문제 해답 예

계산 부하가 큰 애플리케이션 앞에 캐시 프록시를 두어 성능을 개선하라

## 기존

프록시 없이 애플리케이션을 실행

```
docker-compose up -d
```

원주율을 소숫점 이하 5만 자리까지 계산하며 성능을 측정한다

http://localhost:8031/?dp=50000

> 필자의 환경에서 약 4초가 걸렸다

웹브라우저를 리프레시하면 매번 계산을 다시 하므로 응답시간이 비슷하게 걸린다.

## 개선 후

hosts 파일에 `pi.local` 도메인을 추가한다 - 맥 또는 리눅스

```
echo \$'\n127.0.0.1 pi.local' | sudo tee -a /etc/hosts
```

윈도우 환경에서는 다음과 같이 한다

```
Add-Content -Value "127.0.0.1 pi.local" -Path /windows/system32/drivers/etc/hosts
```

애플리케이션 컨테이너는 그대로 두고 [이 설정파일](./solution/sites-enabled/pi.local)을 사용해 nginx 컨테이너를 캐시 프록시로 배치한다 - 리눅스 컨테이너

```
docker-compose -f solution/docker-compose.yml -f solution/override-linux.yml up -d
```

윈도우 환경에서는 다음과 같이 한다

```
docker-compose -f solution/docker-compose.yml -f solution/override-windows.yml up -d
```

http://pi.local?dp=50000에 웹브라우저로 접근하면 이번에는 앞서 캐시된 응답이 돌아온다.

웹브라우저를 리프레시해도 캐시를 사용해 응답하므로 응답시간이 훨씬 빨라진다. 스크린샷에는 3.8초라고 나왔지만, 실제 응답시간은 98ms였다.

![원주율 5만 자리까지 계산하기](./solution.png)
