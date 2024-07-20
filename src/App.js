import './App.css';
import { Component } from 'react';
import Navbar from './component/Navbar';
import NewList from './component/NewList';

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
    let api = `https://newsapi.org/v2/everything?q=${searcher}&from=2024-07-11&sortBy=popularity&apiKey=d24894c8737b466285c33f874954894f`;
    let option = {
      method:"GET",
      // apiKey:"5f9ce4c720ea4daab0fe680193980b4f"
      apiKey:"d24894c8737b466285c33f874954894f"
   }
    let response = await fetch(api,option);
    let json = await response.json();
    this.setState({
      articles:json.articles
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
