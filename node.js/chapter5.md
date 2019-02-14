# nodejs chatper5 summary


#### npm 설명
- npm = node package manager


#### npm 패키지 설치
- npm install --global ~ -> npm i -g ~

#### SemVer 버전 이해하기
- engine : 이 패키지가 사용할 node와 npm버전을 적는 곳
- major.minor.patch 이렇게 씀.
- minor는 신기능 추가
- major는 대규모 변화
- patch는 버그 수정
- ^(minor,patch 업데이트)
- ~(patch 업데이트)
- X.X.X(X는 모든 숫자를 의미)

#### npm 명령어
- npm ls ,npm info, npm search : npm에 속한 어떤걸 찾는다, npm outdated : 최신버전 확인, npm update ~: ~을 업데이트함등 있음.
- npm adduser 로 로그인하고 npm whoami로 로그인 확인. npm version minor,patch,major하면 알아서 버전 올라감.

#### 패키지 배포하기

- json 파일안에 main 에 가장 중요한 파일을 써놓음. npm publish 로 배포가능.
- npm unpublish ~ --force 를 하면 지울 수 있음(24시간 이내).
