## 출처

Anchore의 참조 문서 https://docs.anchore.com/current/docs/engine/engine_installation/docker_compose/

Anchore Engine 버전 0.5.2를 사용함

```
docker create --name ae anchore/anchore-engine:v0.5.2

docker cp ae:/docker-compose.yaml ./docker-compose.yaml

docker rm -f ae
```
