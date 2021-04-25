# 5장 연습문제 해답 예

[레지스트리 v2 API 참고문서](https://docs.docker.com/registry/spec/api)

> 윈도우의 파워쉘 환경에서는 `curl` 명령을 실행하면 `Invoke-WebRequest` 명령이 대신 실행된다. 이 명령은 cURL과 다르게 동작하므로, 윈도우 10의 최근 업데이트에서  제공되는 진짜 cURL인 `curl.exe`를 사용하기 바란다(실행할 때 뒤에 확장자 `.exe`)만 붙여주면 된다.

## 푸시하기

```
docker image push registry.local:5000/gallery/ui
```

> 모든 태그를 레지스트리에 푸시한다.

## 푸시 결과 확인하기

```
curl http://registry.local:5000/v2/gallery/ui/tags/list
```

## `latest` 태그 이미지의 매니페스트 확인하기

```
curl --head \
  http://registry.local:5000/v2/gallery/ui/manifests/latest \
  -H 'Accept: application/vnd.docker.distribution.manifest.v2+json'
```
> 출력된 헤더를 보면 `Docker-Content-Digest`라는 내용이 있을 것이다. 이 부분이 매니페스트다.

예> 

```
Docker-Content-Digest: sha256:127d0ed6f7a8d148a39b7ea168c083694d030e2bffbda60cb53057e731114fbb
```

## 삭제하기

```
curl -X DELETE \
  http://registry.local:5000/v2/gallery/ui/manifests/sha256:127d0ed6f7a8d148a39b7ea168c083694d030e2bffbda60cb53057e731114fbb
```

## 삭제 결과 확인하기

```
curl http://registry.local:5000/v2/gallery/ui/tags/list
```