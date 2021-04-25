# 8장 연습문제 해답 예

원래 애플리케이션은 [Dockerfile](./Dockerfile) 스크립트로 패키징됐다. 여기에 디펜던시 체크와 헬스체크를 추가한 스크립트가 [Dockerfile.solution](./Dockerfile.solution)이다.


## 사용 방법

다음과 같이 Dockerfile.solution 스크립트를 사용한다

```
docker image build -t diamolkor/ch08-lab:solution -f Dockerfile.solution .
```

그 다음 컨테이너를 대화식으로 실행하면 메모리 할당 메시지(흉내만 냈지만)를 출력할 것이다


```
docker container run diamolkor/ch08-lab:solution
```

> 컨테이너 목록에서 컨테이너 상태를 확인한다. 그리고 헬스 체크 메시지가 출력되는지 확인한다

## 디펜던시 체크

컨테이너를 시작할 때 `memory-check.js` 스크립트를 실행해 남아있는 메모리 용량이 충분한지 확인한다. 메모리가 충분하다면 애플리케이션을 실행하며, 그렇지 않으면 컨테이너가 종료된다.

CMD 인스트럭션을 사용해 여러 플랫폼에서 동일하게 동작하도록 할 수 있다.

```
CMD node memory-check.js && \
    node memory-hog.js
```

## 헬스 체크

5초에 한번씩 `memory-check.js` 스크립트를 실행해 헬스 체크를 수행한다.

```
HEALTHCHECK --interval=5s \
 CMD node memory-check.js
```
