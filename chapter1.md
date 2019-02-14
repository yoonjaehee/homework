# node js chatper1 summary
1. nodejs의 등장으로 웹 브라우저 밖에서도 자바스크립트를 사용할 수 있다.
2. nodejs 는 이벤트 루프, 논블록킹I/O, 원쓰레드(싱글쓰레드) 특징을 갖고있다.
3. 이벤트 루프 : task queue에 맡겼다가 다시 콜스택에 돌아온다.
4. task queue에 들어가는 것들 : setTimeout, setInterval, setImmediate, Promise resolve, reject (async,asait), 이벤트리스너의 콜백
