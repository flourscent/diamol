# 16장 연습문제 해답 예

There are multiple problems with the original [Dockerfile](./Dockerfile) which stop it being multi-arch:
기존의 [Dockerfile](./Dockerfile)은 멀티 아키텍처 빌드를 불가능하게 하는 문제가 여럿 있다.

- `FROM` 인스트럭션에 리눅스-인텔 이미지가 사용됨
- `RUN` 인스트럭션에 리눅스 전용 명령어가 사용됨
- `CMD` 인스트럭션에 리눅스 전용 명령어가 사용됨
- 경로 표기 방식이 리눅스에서만 사용되는 방식임

해답 파일인 [Dockerfile.solution](./Dockerfile.solution)은 다음 방법으로 이 문제를 해결한다.

- 기반 이미지로 다중 아키텍처 이미지를 사용함
- 특정 운영체제 전용 명령어 대신 `WORKDIR` 명령어를 사용해 디렉토리를 변경함 
- CMD 인스트럭션에는 리눅스와 윈도우에서 공통적으로 사용되는 명령어를 사용함

해답 파일을 이용하면 이 책에서 지원하는 아키텍처 중 무엇으로도 이미지를 빌드할 수 있다.

```
docker image build -t diamol/ch16-lab -f Dockerfile.solution .

docker container run diamol/ch16-lab
```
