import './App.css';
import React from "react";
 
/* componetn life cycle

  mounting (생성)
   - constuctor
   - render
   - componentDidMount (컴포넘트 처음 만들어질떄)
  updating (변경)
   - componentDidUpdate
  unmounting (삭제)
   - componentWillUnmount

*/

// class component
// dont have return, have render method
// 자동적으로 클래스 컴포넘트안에 있는 render를 실행해줌
// 변하는 데이터는 state안에 저장
class App extends React.Component{
  constructor(props) {
    super(props);
    console.log("start")
  }

  // state object
  state = {
    count: 0
  }

  // add func
  add = () => {
    console.log("add");
    //this.state.count = 1; <-이거 동작 안함
    // 아래 처럼(setState) 해야 render 다시 호출해서 반영해줌 ㅇㅇ why? virtual DOM 갖고있어서,,
    // this.setState({ count: 1 })
    // 이것도 좋은 방법 아님..
    //this.setState({ count: this.state.count + 1 })

    // best state 이용법
    this.setState(current => ({count: current.count + 1}));
  };

  // minus func
  minus = () => {
    console.log("minus")
    this.setState(current => ({count: current.count - 1}));
  };

  componentDidMount() {
    console.log("component Mount")
  }

  componentDidUpdate() {
    console.log("component update")
  }

  componentWillUnmount() {
    console.log("died")
  }

  // render func
  render() {
    console.log("render func")
    return (
      <div>
        <h1>Im a class component, the number is {this.state.count} </h1>
        <button onClick={this.add}>Add</button>
        <button onClick={this.minus}>Minus</button>
      </div>
    )
  }
}

export default App;
