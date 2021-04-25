
0. 아키텍처 별 이미지를 빌드하고 푸시한다

- Linux/amd64
- Linux/arm64
- Linux/arm
- Windows/amd64

1. `~/.docker/config.json` 파일에 다음 내용을 추가해 실험적 기능을 활성화 한다

```
{
  "experimental": "enabled"
}
```

2. 매니페스트 목록을 만든다(아키텍처명이 이미지명 뒤에 오도록 명명)

```
docker manifest create `
 diamolkor/base `
 diamolkor/base:windows-amd64 `
 diamolkor/base:linux-amd64 `
 diamolkor/base:linux-arm64 `
 diamolkor/base:linux-arm
```

3. 이미지 아키텍처 검사 및 확인


```
docker manifest inspect diamolkor/base
```

4. 푸시

```
docker manifest push diamolkor/base
```
