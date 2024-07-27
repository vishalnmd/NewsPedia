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
      category:"top"
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

  componentDidMount() {
    this.fetchArticles(this.state.category); // Fetch articles when component mounts
  }

  fetchArticles = async (category) => {
    const api = `https://newsdata.io/api/1/latest?apikey=pub_49020b2426982e3baff9174122d14619df4f1&q=top&category=${category}`;
    let response = await fetch(api);
    let json = await response.json();
    this.setArticles(json.results);
  }

  render(){

    const {articles} = this.state;

      return(        
        <>
        <Router>
          <Navbar setArticles={this.setArticles} setCategory={this.setCategory} category={this.state.category}/>
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
