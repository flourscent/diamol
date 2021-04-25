# 15장 연습문제 해답 예

먼저 빌드 인프라스트럭처를 실행한다. 이 디렉토리를 작업 디렉토리로 터미널을 열어 다음 명령을 입력한다.

```
cd infrastructure

# 리눅스 컨테이너인 경우
docker-compose -f .\docker-compose.yml -f .\docker-compose-linux.yml up -d

# 윈도우 컨테이너인 경우
# docker-compose -f .\docker-compose.yml -f .\docker-compose-windows.yml up -d
```

## 젠킨스에 도커 허브 인증 수단 도입

도커 허브 보안 페이지(https://hub.docker.com/settings/security)에서 액세스 토큰을 발급받는다. 이 토큰을 젠킨스 컨테이너에 저장해 사용한 후 연습문제가 끝나면 삭제하라(패스워드를 그대로 사용하는 것보다 편리하다).

젠킨스 페이지(http://localhost:8080/credentials/store/system/domain/_/)에 접근하라.

> 젠킨스에 로그인한다. `diamol/diamol`

_Add Credentials_를 클릭해 `docker-hub-user`라는 이름의 사용자를 추가하고, 이 사용자에 도커 허브 액세스 토큰을 지정한다.

![젠킨스에서 도커 허브 액세스 토큰 발급받기](img/jenkins-new-cred.png)

## Git 서버 설정 및 코드 푸시하기

Gogs 페이지(https://localhost:3000)에 접근해 설정을 완료한 후, 새로운 사용자 `diamol`과 저장소 `diamol`을 생성한다.

[Jenkinsfile](./Jenkinsfile)을 수정해 `pwd-domain`을 사용 중인 [Play with Docker](https://labs.play-with-docker.com) **보안** 세션 도메인으로 교체한다.

변경된 코드를 저장소에 푸시한다.

```
git add --all

git commit -m 'My domain'

git push ch15 master
```

## 빌드 파이프라인을 실행한다

젠킨스 웹페이지(http://localhost:8080/job/diamol/)에서 _Build Now_ 링크를 클릭한다. 빌드가 승인 단계에 에르면, Play with Docker 세션으로 돌아가 UAT 배포를 확인한다(`docker container ls` 또는 `docker container logs` 명령을 사용).

모두 정상이라면 젠킨스로 돌아와 승인 단계에 있는 빌드를 승인해 운영 환경으로 배포한다. 파이프라인 전체가 성공하면 녹색이 될 것이다(필자는 다섯 번 시도 끝에 성공했다).

![성공적으로 끝난 젠킨스 빌드](img/jenkins-success.png)

다시 Play with Docker의 운영 환경으로 돌아온다. 모든 것이 잘 동작 중일 것이다.

![젠킨스에서 Play with Docker의 운영 환경에 배포 완료](img/pwd-all-good.png)
