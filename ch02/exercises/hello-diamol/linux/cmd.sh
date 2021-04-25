echo ---------------------
echo 2장 학습을 시작합니다!
echo ---------------------
echo 컨테이너 명 :
echo $(hostname)
echo ---------------------
echo 동작 중인 운영체제 :
echo $(uname -s -r -m)
echo ---------------------
echo 컨테이너의 IP 주소 :
echo $(ifconfig eth0 | grep inet)
echo ---------------------