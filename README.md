# 생활코딩 ReactJS

Last Edited: Aug 18, 2019 9:53 PM

## 1. 수업소개

### React

- 페이스북에서 개발한 Javascript UI 라이브러리
- Component ⇒ 일종의 사용자 정의 함수
- 장점
    1. 가독성
    2. 재사용성
    3. 유지보수

## 2. 개발 환경

### 개발 환경의 종류

- 어떻게하면 빠르게 성장하고, 강사로 부터 독립할 수 있을까를 생각

    ⇒ 공식 문서에 익숙해지는 것!

### create-react-app

- Toolchains

#### npm을 이용한 설치

    $ sudo npm i -g create-react-app@2.1.8 // 설치
    create-react-app // 설치 확인
    create-react-app . // .은 경로 자기 자신을 의미

- 컴퓨터에 직접 설치하는 방법
- `sudo` : 명령어를 관리자 권한으로 실행
- `-g` : global의 약자로 해당 app을 시스템 전역에 설치
- `@2.1.8` : 뒤에 버전을 붙이면 해당 버전을 다운로드. 붙이지 않으면 최신 버전을 다운로드 한다.

#### npx를 이용한 설치

    $ npx create-react-app my-repo
    $ cd my-repo

- 실무에선 npx 사용 권장
- 설치해서 현재 프로젝트에 사용하고 사용이 끝나면 자동 삭제

### 배포하는 법

#### build 폴더 생성

    $ npm run build

#### 배포

    $ npx serve -s build

- 개발자 도구 네트워크 탭을 살펴보면 작업 시 사용한 서버와 실제 배포 서버에서 다운 받는 App의 크기가 다른 것을 확인할 수 있다. (배포 버전이 훨씬 경량)

## 3. 컴포넌트 제작

### 리액트가 없다면

- 기술은 절망감을 재물로 삼는다.

### 컴포넌트 만들기

- 컴포넌트를 만들 때는 반드시 하나의 최상위 태그로 시작해야 한다.
- 하단의 코드는 자바스크립트와 유사하지만 자바스크립트가 아닌 JSX이다.
```javascript
class App extends React.Component { // 컴포넌트 이름은 대문자로 시작해야 함
    render() {
    return (
        <div className="App"> // 최상위 태그
        Hello, react!
        </div>
    );
    }
}
```