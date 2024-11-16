import logo from './logo.svg';
import './App.css';

// 컴포넌트
// props == props.fav == {fav}
function Food({name, picture}) {
  console.log(name);
  console.log(picture)
  return <div>
        <h1>I like {name}</h1>
        <img src = {picture}/>
      </div>
}

const foodILike = [
  {
    name : "kimchi",
    image : "https://gongu.copyright.or.kr/gongu/wrt/cmmn/wrtFileImageView.do?wrtSn=9046601&filePath=L2Rpc2sxL25ld2RhdGEvMjAxNC8yMS9DTFM2L2FzYWRhbFBob3RvXzI0MTRfMjAxNDA0MTY=&thumbAt=Y&thumbSe=b_tbumb&wrtTy=10004"
  },
  {
    name : "Samgyeopsal",
    image : "https://gongu.copyright.or.kr/gongu/wrt/cmmn/wrtFileImageView.do?wrtSn=9046601&filePath=L2Rpc2sxL25ld2RhdGEvMjAxNC8yMS9DTFM2L2FzYWRhbFBob3RvXzI0MTRfMjAxNDA0MTY=&thumbAt=Y&thumbSe=b_tbumb&wrtTy=10004"
  },
  {
    name : "Bibimbap",
    image : "https://gongu.copyright.or.kr/gongu/wrt/cmmn/wrtFileImageView.do?wrtSn=9046601&filePath=L2Rpc2sxL25ld2RhdGEvMjAxNC8yMS9DTFM2L2FzYWRhbFBob3RvXzI0MTRfMjAxNDA0MTY=&thumbAt=Y&thumbSe=b_tbumb&wrtTy=10004"
  },  

]

function renderFood(dish) {
  console.log(dish)
  return <Food name={dish.name} picture={dish.image} />
}
function App() {
  return (
  <div>
    <h1>Hello!!</h1>
    <Food name="kimchi"/>
    <Food name="ramen"/>
    <Food name="samgiopsal"/>

    {foodILike.map(dish => (
      <Food name={dish.name} picture={dish.image}/> 
      ))}
    {foodILike.map(renderFood)}
  </div>
  );
}

export default App;
