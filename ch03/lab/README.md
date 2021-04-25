# 도커를 다루는 기술 3장 연습문제 - 해답

## 1번째 방법

docker container run -it --name ch03lab diamol/ch03-lab

echo Elton >> ch03.txt 

exit

docker container commit ch03lab ch03-lab-soln
      
docker container run ch03-lab-soln cat ch03.txt


## 2번째 방법 

docker container run ch03-lab-soln cmd /s /c type ch03.txt
