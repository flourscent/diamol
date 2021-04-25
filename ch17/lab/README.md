# 17장 연습문제 해답 예

도커 CLI를 설치하는 Dockerfile 스크립트 최적화하기

## 리눅스 버전

기존 [Dockerfile](linux/Dockerfile)은 데비안을 운영 체제와 도커 공식 설치 방법을 사용한다. 사용하는데는 문제가 없지만 도커 CLI만 사용하기엔 불필요한 요소가 너무 많다. 이 이미지의 용량은 970MB다.

필자가 최적화한 스크립트 [Dockerfile.optimized](linux/Dockerfile.optimized)는 알파인 리눅스를 기반으로 도커 CLI 패키지만을 설치한다. 빌드 마지막 단계는 도커 CLI 바이너리만 복사하는 단계다. 이 이미지의 용량은 75.3MB다.

## 윈도우 버전

기존 [Dockerfile](windows/Dockerfile)은 윈도우 서버 코어를 기반으로 초콜레티를 설치한 후 이를 사용해 도커를 설치한다. 이때 설치되는 도커는 도커 전체 패키지이므로 이미지 용량이 4.95GB나 된다.

반면 필자가 최적화한 스크립트 [Dockerfile.optimized](windows/Dockerfile.optimized)은 기존 스크립트를 이용하는 다중 스테이지 빌드다. 다중 스테이지 빌드의 마지막 부분은 나노 서버를 기반으로 도커 CLI 바이너리(와 DLL 파일, 이 파일이 없으면 오류가 발생한다)만 복사해 만들어진다. 이미지 용량은 320MB다.
