# github 설정
깃허브 접속
리포지폴더 
https://github.com/indasol/react-practice.git

# AXIOS 설치
npm i axios

# 리액트 회원가입폼 => AXIOS API =>PHP
- PHP 백엔드
파일명 : signup_insert_react.php

2. php 백엔드 ftp 업로드

3. php 백엔드 http 실행 테스트 확인
로컬 => http://localhost:3000/
실제 서버 주소 => http://indasol.co.kr/week_kurly/

4. 리액트 서버  주소와 웹호스팅 서버 주소 다르면 전송 실행 cors 정책 테러
서버 주소에서 서버파일 => 헤더영역에서 CORS 정책 허가 받아야 전송된다.

5. 리액트에서 직접 CORS 정책을 회피하는 프록시 서버를 사용하면 웹호스팅 서버에서 허가를 안받아도 전송 가능하다.
[단, 배포하면 반드시 4번과 같이 사용해야한다.]

- 리액트 POST 방식으로 입력데이터 전송된 변수값을 저장
   $userId=$_POST['userId'];
   $userPw=$_POST['userPw'];
   $userName=$_POST['userName'];
   $userEmail=$_POST['userEmail'];
   $userHp=$_POST['userHp'];
   $userPostcode=$_POST['userPostcode'];
   $userAddr1=$_POST['userAddr1'];
   $userAddr2=$_POST['userAddr2'];
   $userGender=$_POST['userGender'];
   $userYear=$_POST['userYear'];
   $userMonth=$_POST['userMonth'];
   $userDate=$_POST['userDate'];
   $userChooga=$_POST['userChooga'];
   $userChamyeoEvent=$_POST['userChamyeoEvent'];
   $userChoochanginId=$_POST['userChoochanginId'];
   $userService=$_POST['userService'];

# PHP 회원가입 데이터 입력
파일명 : signup_insert_test.php

userId
userPw
userName
userEmail
userHp
userPostcode
userAddr1
userAddr2
userGender
userYear
userMonth
userDate
userChooga
userChamyeoEvent
userChoochanginId
userService

userId,
userPw,
userName,
userEmail,
userHp,
userPostcode,
userAddr1,
userAddr2,
userGender,
userYear,
userMonth,
userDate,
userChooga,
userChamyeoEvent,
userChoochanginId,
userService,

# 프론트앤드(회원가입 폼) => axios api => php => db
1. 작성파일 signup.php

# 회원가입 테이블 저장(입력)
- 마이닷홈

- 데이터베이스 사용 권한 설정
   1. DB_SERVER = localhost;
   2. DB_USER_NAME = fnffn6935;
   3. DB_USER_PW = myung917!!;
   4. DB_NAME = fnffn6935;

# 회원가입 폼 db 설계
idx 자동증가번호 auto increasement
아이디 userId String 문자열 15
비밀번호 userPw String 문자열16
이름 userName String 문자열 50
이메일 userEmail 문자열 250
휴대폰 userHp 숫자만입력 11
우편번호 userPostcode 문자열5
주소1 userAddr1 문자열250
주소2 userAddr2 문자열250
성별 userGender 문자열4
생년 userYear 숫자
생월 userMonth 숫자
생일  userDate 숫자
추가입력사항1 userChooga 문자열50
참여이벤트명 userChamyeoEvent 문자열200
츄촌안어아다 userChoochanginId 문자열16
이용약관동의 userService 문자열 500
가입일 userGaib timestamp now()



# 회원가입 폼 구현
- 마이 닷홈
  기본 주소	fnffn6935.dothome.co.kr
  MySQL ID	fnffn6935 (계정아이디와 동일)
  myung917!!
  MySQL 관리(UTF-8)	fnffn6935.dothome.co.kr/myadmin
  웹로그 보기	fnffn6935.dothome.co.kr/weblog (유료회원 전용)

- 닷홈  MySQL 관리자 페이지
	fnffn6935.dothome.co.kr/myadmin


# 브라우저 라우터
-브라우저 라우터는 반드시 basename을 표기한다
=> 해시라우터
 <HashRouter >
 => 해시라우터
 <BrowserRouter basename={process.env.PUBLIC_URL}>

# 배포
1. 닷홈 배포 php mysql => http / https ssl 가입
2. 깃허브 배포
   2-1. git 설정 linux 명령어 ubuntu
   2-2. dragdrop              => https
3. 네틀리파이 배포
4. 카페24 툴킷 java mysql
5. 클라우드 배포


배포 폴더(프로젝트 폴더)
week_kurly
http://indasol.co.kr/week_kurly

package.json homepage 속성 추가
  "homepage": "http://indasol.co.kr/week_kurly"
  
터미널에서 npm run build

# 로그인 구현 리듀서
npm i @reduxjs/toolkit react-redux
npm i react-redux

# 로그인
1. 리덕스 리듀서 login
2. 상태변수 설정
loginId  = null
loginName = null
admin = false
3. 헤더(네비게이션) => 조건문 연산자
loginId 가 null 이 아니면 로그인 구현
loginname 바인딩
admin 이 true 면 관리자 로그인
admin 이 false 이면 일반 로그인

# 라우터 시작하기
1. 리액트 라우터 돔 설치
npm i react-router-dom

2. 브라우저 라우터 / 해시 라우터
- WrapComponent => 임포트 ( BrowserRouter, )

3. 네비게이션
<li><Link to='/sub2' className='main-btn'>베스트</Link></li>
<li><Link to='/sub3' className='main-btn'>알뜰상품</Link></li>




# 리액트 프로젝트 생성

## 프로젝트 폴더 생성

## 프로젝트 생성

1. app 프로젝트 생성
   CTRL + SHIFT + `

```JS
    npx create-react-app app

    cd app
    npm start
```


## 컴포넌트 생성(모듈) import / export

## 헤더컴포넌트 => 네비게이션 => 링크 => 라우터

2. [public] 퍼블릭 구성요소 정적 폴더 public 정리  
   [css]
   [img]
   [js]
   index.html

3. [src] 에스알씨 구성요소 동적 폴더 src 정리  
   [component]  
   index.js

4. [component] 컴포넌트 구성요소
   WrapComponent.jsx
   [wrap]

5. [wrap] 컴포넌트 구성요소
   [main]
   [sub]
   HeaderComponent.jsx
   MainComponent.jsx
   FooterComponent.jsx

# 자동완성 컴포넌트

- rsf 함수 컴포넌트 function 함수
- rsc 함수 컴포넌트 화살표함수
- rcc 클래스 컴포넌트

6. HeaderComponent.jsx 헤더컴포넌트 JSX 코딩

   - class= => className=  
     CTRL + H => class= 문자열을 className= 으로변경
   - <img src='' alt='' > => <img src='' alt='' />
   - <br> => <br />
   - <input type='' .... > => <input type='' .... />
   - <a href='#'> => <a href='!#'>
   - 링크태그 네비게이션 => 라우터 링크 구현

7. ModalTopComponent.jsx 탑모달컴포넌트 JSX 코딩

8. [main] 메인페이지
   Section1Component.jsx
   Section2Component.jsx
   Section3Component.jsx
   Section4Component.jsx
   Section5Component.jsx
   Section6Component.jsx
   Section7Component.jsx
   Section8Component.jsx
   Section9Component.jsx
   Section10Component.jsx
   Section11Component.jsx
   Section12Component.jsx
   Section13Component.jsx

9. [sub] 서브페이지
   [scss]
   SubPublicComponent.scss
   Sub1Component.jsx // 신상품
   Sub2Component.jsx // 베스트
   Sub3Component.jsx // 알뜰상품
   Sub4Component.jsx // 특가/혜택
   Sub5Component.jsx // 회원가입폼
   Sub6Component.jsx // 로그인
   Sub7Component.jsx // 공지사항(고객센터)

10. SASS 패키지 설치
    npm i sass;

11. [main] 사스 폴더 생성
    [scss]
    SectionPublicComponent.scss
    Section1Component.scss
    Section2Component.scss
    Section3Component.scss
    Section4Component.scss
    Section5Component.scss

12. WrapComponent.jsx => 라우터(Router) 설치
    npm i react-router-dom

13. WrapComponent.jsx => 라우터(Router) 구성요소 & 구현
    13-1. import {BrowserRouter, Routes, Route} 'react-router-dom'
    13-2. <BrowserRouter>로 컴포넌트를 감싸준다  
    13-3. <Routes>로 컴포넌트를 감싸준다
    13-4. <Route>로 컴포넌트를 감싸준다
    13-5. 패스네임(PathName) 설정 => <Route path='/main' element={<MainComponent />} />

```JS
      <BrowserRouter>
         <ModalTopComponent /> {/* 고정페이지 */}
         <Routes>
            <Route path='/' element={<HeaderComponent />}>
               <Route index element={<MainComponent />} />
               <Route path='/main' element={<MainComponent />} />
               <Route path='/sub1' element={<Sub1Component />} />
               <Route path='/sub2' element={<Sub2Component />} />
               <Route path='/sub3' element={<Sub3Component />} />
               <Route path='/sub4' element={<Sub4Component />} />
               <Route path='/sub5' element={<Sub5Component />} />
               <Route path='/sub6' element={<Sub6Component />} />
               <Route path='/sub7' element={<Sub7Component />} />
            </Route>
         </Routes>
         <FooterComponent /> {/* 고정페이지 */}
      </BrowserRouter>

```

14. HeaderComponent.jsx 헤더컴포넌트
    => 아울렛(페이지전환) 컴포넌트변경된다.
    => 링크걸어준다 => 패스네임

```JS
   <Link to='/sub1' className='main-btn'>신상품</Link>
   <Link to='/sub2' className='main-btn'>베스트</Link>
   <Link to='/sub3' className='main-btn'>알뜰상품</Link>
   <Link to='/sub4' className='main-btn'>특가/혜택</Link>
   <Link to='/sub5' className='on'>회원가입</Link>
   <Link to='/sub6'>로그인</Link>
   <Link to='/sub7'>고객센터</Link>
```

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
