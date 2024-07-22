import './App.css';
import { Component } from 'react';
import Navbar from './component/Navbar';
import NewList from './component/NewsList';

class Func extends Component{

  constructor(props){
    super(props);
    this.state ={
      articles:null
    }
  }
  setQuery = (query)=>{
      this.setState({
        query:query
      })
  }

  onSearch = async (searcher)=>{
    if(searcher ==null){
      searcher = "top headlines";
    }
    // let api = `https://newsapi.org/v2/everything?q=${searcher}&from=2024-07-11&sortBy=popularity&apiKey=d24894c8737b466285c33f874954894f`;
    let api = `https://newsdata.io/api/1/latest?apikey=pub_49020b2426982e3baff9174122d14619df4f1&q=${searcher}`;
    let option = {
      method:"GET",
      // apiKey:"5f9ce4c720ea4daab0fe680193980b4f"
      apiKey:"TfTOk2_goyvEdJOxZr0XJxoKoEKLU5Fpk_Q8CS9THWq1k95S"
   }
    let response = await fetch(api,option);
    let json = await response.json();
    this.setState({
      // articles:json.articles
      articles:json.results
    });

    console.log(json);

  }

  render(){

    let {articles} = this.state;

      return(
        <>
            <Navbar onsearch={this.onSearch}/>
            <NewList articles={articles}/>            
        </>
      );
  }
}

export default Func;
