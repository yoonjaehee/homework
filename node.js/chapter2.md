# nodejs chapter2 summary
1. var let const 차이

	const : 한번 선언하면 변경 불가,선언만 하기 불가, 객체 변경 가능
	let : 여러번 바뀌어도 변경 가능
	var : 선언만 해도됨
2. template literal

	백틱(`),${?}사용가능
    
3. object literal

	var 과 다르게 const에서는 object의 함수를 선언할때 function을 안써도 된다.
    키의 이름과 값이 똑같은 경우 ex)data:data -> data 로 표시
    동적 속성 할당을 literal 안에 표현 가능 ex){ [변수]: 값}
    
4. 화살표 함수

	함수표현식 : const add2 = (x,y) => x+y;
    함수선언문 : function add1(x,y) { return x+y}
    화살표 함수는 함수 내부의 this를 외부의 this와 같게 만들어준다
    
5. 비구조화 할당
	const a = 객체.a
    const b = 객체.b
    -> const {a,b} = 객체
	비구조화 할당에서 객체를 못찾아 this를 못찾는 경우도 있음
    
    배열도 비구조화가 가능함
    const array = [0,1,2];
    const [node,obj,bool] = array; //node에 array[0],obj에 array[2],...들어감
    나머지 묶는 array는 변수 앞에 ...붙임
    
6. callback & promise

	callback : 함수안에 함수를 써서 아래에서 위로 가는 코드
    promise : .then,catch,return을 써서 위에서 아래로 가는 코드
    callback은 결과를 표시하는게 바로 이어서 나와야한다.
    promise는 결과를 표시하는게 나중에 써도 된다.(결과값은 미리 설정됨)

7. promise

	const x = new Promise((resolve,reject) => {~})
    x .then((success) => {})
      .catch((fail)=> {})
	resolve(msg) -> then((msg))
    reject(err) -> catch((err))
    
    promise.all로 여러 프로미스를 동시에 실행 가능
    
8.  async, await(동기식)

	promise는 then과catch다음의 console.log는 순서가 바뀌지만, 		async func()=> { const user = await Users.findOne('zero');
    console.log(user)}; 처럼 순서를 자기가 정할 수 있음
    catch문은 try catch문 형식으로 써야한다.
    

