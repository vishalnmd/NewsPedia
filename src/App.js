import './App.css';
import { Component } from 'react';
import Navbar from './component/Navbar';
import NewsList from './component/NewsList';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

class Func extends Component{

  constructor(props){
    super(props);
    this.state ={
      articles:null,
      category:"top",
      progress:0
    }
  }

  setArticles = (arts)=>{
    this.setState({
      articles:arts
    })
  }

  setCategory = (category)=>{
    this.setState({
      category:category
    })
    this.fetchArticles(category);
  }

  setProgress = (prg)=>{
    this.setState({progress:prg})
  }

  componentDidMount() {
    this.fetchArticles(this.state.category); // Fetch articles when component mounts
  }

  fetchArticles = async (category) => {
    const api = `https://newsdata.io/api/1/latest?apikey=${process.env.REACT_APP_API_KEY}&q=top&category=${category}`;
    this.setProgress(15);
    let response = await fetch(api);
    this.setProgress(45);
    let json = await response.json();
    this.setProgress(65);
    this.setArticles(json.results);
    this.setProgress(100);
    console.log("Fetch Artical method of App.js")
  }

  render(){

    const {articles} = this.state;

      return(        
        <>
        <Router>
          <Navbar setArticles={this.setArticles} setProgress={this.setProgress} progress={this.state.progress} setCategory={this.setCategory} category={this.state.category}/>
          <Routes>
            <Route path="/NewsPedia" element={<NewsList articles={articles}/>} />
            <Route path="/Sport" element={<NewsList articles={articles} />} />
            <Route path="/Business" element={<NewsList articles={articles}/>} />
            <Route path="/Entertainment" element={<NewsList articles={articles} />} />
            <Route path="/Health" element={<NewsList articles={articles} />} />
            <Route path="/Food" element={<NewsList articles={articles}  />} />
            <Route path="/Other" element={<NewsList articles={articles} />} />
          </Routes>
        </Router>
      </>
      );
  }
}

export default Func;
