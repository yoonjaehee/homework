# nodejs chapter3 summary
1. 모듈이 될 파일은 module.exports = 값;을 마지막에 써야함
2. 전역변수 = global사용(window사용불가) -> global.setTimeout
3. global은 편하지만, 실제로는 이런 편함이 보안이나 그런 위험이 될 수 있다.
4. console 객체
	console.dir(object, {color: boolean, depth: ?});
    console.trace : 에러 위치 추적
    console.time, console.timeEnd : 시간측정
5. 타이머
	setTimeout, setInterval 로 설정
    clearTimeout, clearInterval로 해제
6. _ __filename,_ __dirname,process
	파일이름, 위치
    process 객체에는 현재 실행중인 노드 프로그램 정보가 들어있다
7. os 모듈
8. path 모듈
	path.parse(분해) <-> path.format(합침)
    path.normatlize : 알아서 경로를 제대로 만들어줌
    path.isAbsolute : 절대경로 
    path.relative : 상대결로
    path.join : 절대경로 무시하고 합침
    path.resolve : 절대경로 고려하고 합침
    
9. url 모듈
	url.parse는 host가 없을때도 사용가능
    WHATWG(url.URL)은 seach처리가편함
    append : 값추가
    set : 기존값초기화 후 수정

10. querystring 모듈
11. crypto 단방향 암호화 console.log(crypto.createHash('sha512').update('재희재힁').digest('base64'));
-> 재희재힁을 입력하면 sha512라는 hash코드가 만들어짐.
-> 우연히 다른번호가 같은 hash를 만들 수 있는데 이걸 해시 충돌 공격이라고 함
pbkdf2 방식을 사용하면 문자열을 추가하고 iteration 횟수를 높여(1초가 걸릴때까지) 해시 충돌 공격을 막아줌

	-> 복호화가 없음

12. crypto 양방향 암호화
	aes-256-cbc
    createCipher(aes-256) : utf8 평문 -> base64 암호문
    createDecipher : base64 암호문 -> utf8 평문

13. util
	deprecated는 지원이 조만간 중단될 메서드임을 알려줌
	utril. promisify를 사용하면 callback을 promise방식으로 사용가능
    
14. fs 모듈
	파일을 읽고 쓰기 가능. readFile, writeFile.(비동기)
    callback을 쓰거나 readFilesync처럼 뒤에 sync붙이면 동기화됨
15. buffer, stream
	data를 조각내서 buffer라는 공간에 넣음. 그것을 전달.
    buffer단위로 보내는게 스트리밍.(버퍼의 흐름)
    pipe
    여러개의 스트림을 이어 버퍼가 흘러가게 할 수 있다.

16. fs 기타 method
	모든 method 뒤에 Sync를 붙이면 동기식으로 작동.

17. events 모듈
	.emit :출력 , .addListener = .on : 이벤트 설정,
    .listenerCount

18. 예외 처리하기
	process.on('uncaughtException', (err) => {
    console.error('unexception error', err);
    });