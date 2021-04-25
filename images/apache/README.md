
0. 아키텍처 별 이미지를 빌드하고 푸시한다

- Linux/amd64
- Linux/arm64
# - Linux/arm
- Windows/amd64

1. `~/.docker/config.json` 파일에 다음 내용을 추가해 실험적 기능을 활성화 한다

```
{
  "experimental": "enabled"
}
```

2. 매니페스트 목록을 만든다(멑티 아키텍처 이미지명 뒤로 각 아키텍처 별 이미지를 열거)

```
docker manifest create `
 diamolkor/apache `
 diamolkor/apache:windows-amd64 `
 diamolkor/apache:linux-amd64 `
 diamolkor/apache:linux-arm64 `
# diamolkor/apache:linux-arm
```

3. 이미지 아키텍처 검사 및 확인


```
docker manifest inspect diamolkor/apache
```

4. 푸시

```
docker manifest push diamolkor/apache
```
