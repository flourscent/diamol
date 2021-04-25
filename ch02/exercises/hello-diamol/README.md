
0. 아키텍처별 이미지를 빌드하고 도커 허브에 푸시

1. `~/.docker/config.json`에서 experimental 필드의 값을 "enabled"로 수정

```
{
  "experimental": "enabled"
}
```

2. 매니페스트 리스트를 작성(이미지명 뒤에 아키텍처명을 붙임)

```
docker manifest create `
 diamol/ch02-hello-diamol:1.0 `
 diamol/ch02-hello-diamol:windows-x64 `
 diamol/ch02-hello-diamol:linux-x64 `
 diamol/ch02-hello-diamol:linux-amd64
```

3. 아키텍처별 이미지 확인

```
docker manifest inspect diamol/ch02-hello-diamol:1.0
```

4. 푸시

```
docker manifest push diamol/ch02-hello-diamol:1.0
``