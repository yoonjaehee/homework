# nodejs chapter4 summary
1. 포트 http:80, https:443
2. 서버를 만드는 방법 : const server = http,createServer((req,res) => {
	~}).listen(8080);이런식으로 하면 됨. 
   
3. 쿠키 설정하기요청이나 응답에는 그에 대한 정보를 담고 있는 헤더가 포함되어 있다. res.writeHead(200, {'set-cookie':'mycookie=test'});
4. queryString이 parsing 되서 cookie로 저장되서 client로 넘어간다.
5. writeHead의 상태코드 302는 임시 이동으로, 브라우저에게 Location에 적힌 페이지로 이동하라는 뜻입니다.
6. memory session을 사용하면 value가 random으로 사용할 수 있어서 쿠키보다 보안에 좋음.
7. rest api : 서버의 자원들을 주소를 통해서 가져오는데 그 주소들을 어떻게 구조화할까 하는 것.
http 메소드인 get,post,put : 전체 수정,patch : 부분 수정,delete 주소/users와 같은방식이 있다.
8. http vs https
	https는 인증서가 필요함. http2는 https기반으로 인증서가 필요하다.
9. cluster로 멀티 프로세싱

cluster에는 master(관리자)프로세스와 worker(일꾼)프로세스가 있다. master.fork()가 worker를 만든다.

