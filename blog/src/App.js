import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import { isDisabled } from '@testing-library/user-event/dist/utils';

/*  JSX 문법
  1. class 넣을 땐 className='이름' 
    App.css 에서 .이름 {속성 지정}
  2. 변수 넣을 땐 {변수명}
  3. style 넣을 땐 style={{이름 : '값'}}
*/

function App() {
  // let var const로 변수 저장
  let post = '강남 우동 맛집';
  //document.querySelector('h4').innerHTML = post;
  // {} : databinding

  // destructuring 문법 : array안에 있던 자료 밖으로 뺴줌
  // let num = [1,2]
  // let a = num[0];
  // let c = num[1];
  // 동일 let [a,c] = [1,2]

  // state 로 저장
  // a -> state에 저장된 정보
  // b -> state변경 도와주는 함수

  // state가 변경돼도 자동 재래더링해줌 ㅇㅇ
  let [a,b] = useState('남자 코트 추천')
  let [logo, setlogo] = useState('ReactBlog')

  // 실습
  let [제목, 제목불러오기] = useState(['ReactTitle1', 'ReactTitle2', 'ReactTitle3'])
  //

  let [따봉, 따봉변경] = useState(0);

  // 함수만들기
  function 함수() {
    console.log(1);
  }
  // function() {console.log(1)}
  // () => {console.log(1)}

  // 자주 변경될 것 같은 html부분은 state로 만들어 놓자 !
  return (
    // 안에는 <div> 하나만 가능..
    <div className="App">
      <div className="black-nav">
        <h4 style={{color : 'red', fontSize : '16px'}}>블로그임</h4>
      </div>
      <div className="black-nav">
        <h4>{logo}</h4>
      </div>
      <h4>{post}</h4>
      <div className="list">
        <h4>글제목</h4>
        <h4>{a}</h4>
        <p>2월 17일 발행</p>
      </div>
      <div className="list">
        <h4>글제목</h4>
        <p>2월 18일 발행</p>
      </div>
      <div className="list">
        <h4>{제목[0]} <span onClick={ 함수 }>👍</span> {따봉} </h4>
        <p>2월 18일 발행</p>
      </div>
      <div className="list">
        <h4>{제목[1]} <span onClick={ function() {console.log(1)} }>👍</span> {따봉} </h4>
        <p>2월 18일 발행</p>
      </div>
      <div className="list">
        <h4>{제목[2]} <span onClick={ () => { 따봉변경(따봉 + 1) } }>👍</span> {따봉} </h4>
        <p>따봉 누르면 1로 변경</p>
      </div>
    </div>
  );
}

export default App;