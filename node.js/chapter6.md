# nodejs chapter6 summary

#### express-generator, npmscripts, bin www.mp4
- npm i -g express-generator -> express 명령어 사용 가능
- express learn-express --view = pug -> learn-express라는 폴더 만들음.
- npm start, npm run start로 시작

#### express app.js 이해하기
- app.js 에서 app.get,post,delete를 사용해서 내용 추가/삭제 가능

#### 미들웨어 이해하기
- app.set : 익스프레스 설정 또는 값 저장
- app.use : 미들웨어 장착
- pug는 html엔진을 대체함
- 요청 -> 미들웨어들 -> 응답
- app.use 안의 req,res로 요청과 응답을 조작. next로 다음 미들웨어로 넘어감(req, res, next)
- 미들웨어에서는 next를 호출해 다음 미들웨어로 넘어가거나 res.send 등으로 응답을 보낸다.
- app.get,post(라우팅 미들웨어) 등은 get,post 요청들에만 걸리는 미들웨어를 장착한다. 주소가 붙으면 그 주소와 일치하는 요청만 걸린다.
- use 는 공통 미들웨어, get,post,put,patch,delete는 라우팅 미들웨어 장착

#### 유명한 미들웨어들
- body-parser : express가 높으면 더이상 안깔아도됨
- 미들웨어간의 순서가 중요할 때도 있다. 
- cookieParser(비밀번호)Session은 메모리 세션이지만, session id 를cookie로 쓰기 때문에 cookie가 필요하다.
- flash : 로그인 실패했을 때, 로그인 실패 알림 처럼 일회성 메세지를 표현해주는 것


#### 라우팅 미들웨어(라우터도 미들웨어다)
- router를 다른 js에서 분리하는 방법
```
const express = require('express');
const router = express.Router();
router.get('/', function(req,res,next{
	res.render('index', {title:'Express'});
}));
module.exports = router;
```

- app.use('/abc')  + router.get('/df') = GET/abc/df
- app.use('/') + router.post('/') = POST/ 


#### 404처리 미들웨어와 에러 처리 미들웨어
- next도 하지않고 res method도 사용하지 않으면 클라이언트는 timeout 될때까지 무한 로딩된다. 
- express에서는 writeHead(404) 대신 status(404)를 쓴다
- next(error)를 하면 다음 미들웨어를 다 건너뛰고 에러처리 미들웨어로 이동한다.(404,에러처리 미들웨어는 끝에 둬야해야 error잡음)

#### pug 
- pug는 html보다 좀 쉽게 쓸 수 있고, 변수 선언 가능하다.
- -뒤에 변수를 선언할 수 있고 = 뒤에 변수를 사용하면 된다.
- pug는 들여쓰기로 부모 자식 태그를 구분한다. 들여쓰기는 탭이든 스페이스든 상관없지만 하나로 통일해야한다.
- 속성은 () 안에, div는 생략가능 내용은 태그 한 칸 띄고 작성 id는 #, class는 . |로 여러 줄, 태그.으로 그 태그안의 문법사용가능
- 변수 선언은 res.render로도 사용가능
- if,for문(파이썬처럼) 사용가능
- 웹페이지에서 중복되는 부분은 include나 layout, 바뀌는 부분은 block으로 표현한다.


#### EJS
- 쉽게 사용할 수 있지만, html처럼 <>쓰고 거의 html이랑 비슷하다. 변수는 %=var%로 표시한다.
- 반복문이나 조건문도 %를 써서 쓸 수 있다.
- ejs는 include는 쓸 수 있지만 layout이 안되기 때문에 nunjecks엔진이 더 좋을 수도 있다.

#### 미들웨어 꿀팁들
- 변수를 res.render로 쓸 수도 있지만, `res.locals.message = err.message;`처럼 쓸 수 있다.
- req.app.set/get : express에서 잠깐 변수같을 것을 공유/저장 가능(전역변수)
- res.json() : 데이터를 json으로 주고 받을 때 많이 씀