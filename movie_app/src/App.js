import './App.css';
import React from "react";
import axios from 'axios'
import Movie from "./Movie";
// function 선언 two way
// 1. func = () => {}
// 2. func() {}

// fetch를 해보자
// axios
class App extends React.Component{

  state = {
    isLoading: true,
    movies: []
  };
  // async 는 비동기 알리는 함수 정의 키워드 : 함수 내부에 있는거 실행 될때까지 기다리라고 알림
  // await : 기다려
  getMovies = async () => {
    //const movies = await axios.get("https://yts-proxy.now.sh/list_movies.jsonsort_by=rating")
    //console.log(movies.data.data.movies);
    const {data: {data : {movies}}} = await axios.get("https://yts-proxy.now.sh/list_movies.json?sort_by=rating")
    console.log(movies);
    //this.setState({movies: movies})
    this.setState({movies, isLoading: false})
  }

  componentDidMount() {
    this.getMovies();
  }

  render() {
    const { isLoading, movies } = this.state;
    //return <div>{isLoading ? "Loading" : "Mounting!!"}</div>
    return <section className="container">
      {isLoading
       ? <div className="loader">
          <span className="loader_text">Loading..</span>
       </div>
       : 
        <div className="movies">
            {movies.map(movie => {
              //console.log(movie);
              return <Movie 
                id={movie.id} 
                year={movie.year} 
                title={movie.title}
                summary={movie.summary} 
                poster={movie.medium_cover_image}
                genres={movie.genres}
            />
          })}
        </div>
       }
    </section>
  }
}

export default App;
