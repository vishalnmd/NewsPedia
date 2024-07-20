import React, { Component } from 'react'
import NewItem from './NewItem'

export class NewList extends Component {
  
  constructor(props){
    super(props);
    this.state ={
      newsls:null
    }
  }

  // async componentDidMount(){
  //   let api = "https://newsapi.org/v2/everything?q=cricket&from=2024-07-11&sortBy=popularity&apiKey=5f9ce4c720ea4daab0fe680193980b4f";
  //   let option = {
  //     method:"GET",
  //     apiKey:"5f9ce4c720ea4daab0fe680193980b4f"
  //  }
   
  //  let response = await fetch(api,option);
  //  let json = await response.json();

  //  this.setState({newsls:json.articles});

  // }

  render() {

    const {articles} = this.props;

    if(!articles){
      return <div>loading...</div>
    }
    
    return (
      <> 
        <h3 style={{textAlign:"center"}}>NewsList</h3>  
        <div className='container'>
            <div className='row'>
                { articles.map((element)=>{
                  if(element.urlToImage!=null && element.url!=null && element.description!=null && element.title!=null){
                    return <div className='col-md-3 m-3'><NewItem img={element.urlToImage} title = {element.title} desp={element.description} url={element.url} /></div>
                  }else{
                    return null;
                  }          
                })}
                {/* <div className='col-md-3 m-3'><NewItem img={newsls[2].urlToImage} title = {newsls[2].title} desp={newsls[2].description} url={newsls[2].url} /></div>
                <div className='col-md-3 m-3'><NewItem img={newsls[0].urlToImage} title = {newsls[0].title} desp={newsls[0].description} url={newsls[0].url}  /></div> */}
            </div>
            {/* <div className='row'>
                <div className='col-md-3 m-3'><NewItem img={newsls[3].urlToImage} title = {newsls[3].title} desp={newsls[3].description} url={newsls[3].url} /></div>
                <div className='col-md-3 m-3'><NewItem img={newsls[4].urlToImage} title = {newsls[4].title} desp={newsls[4].description} url={newsls[4].url} /></div>
                <div className='col-md-3 m-3'><NewItem img={newsls[5].urlToImage} title = {newsls[5].title} desp={newsls[5].description} url={newsls[5].url} /></div>
            </div>
            <div className='row'>
                <div className='col-md-3 m-3'><NewItem img={newsls[6].urlToImage} title = {newsls[6].title} desp={newsls[6].description} url={this.state.newsls[6].url} /></div>
                <div className='col-md-3 m-3'><NewItem img={newsls[7].urlToImage} title = {newsls[7].title} desp={newsls[7].description} url={this.state.newsls[7].url} /></div>
                <div className='col-md-3 m-3'><NewItem img={newsls[8].urlToImage} title = {newsls[8].title} desp={newsls[8].description} url={this.state.newsls[8].url} /></div>
            </div> */}
        </div>
      </>
    )
  }
}

export default NewList