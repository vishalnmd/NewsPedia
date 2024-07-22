import React, { Component } from 'react'
import NewItem from './NewsItem'

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
      return <div className='container-fluid d-flex'>
              <div className="spinner-border justify-content-center" role="status">
                <span className="visually-hidden">Loading...</span>
              </div>
      </div>
    }
    
    return (
      <>
        {console.log("this is articles at newslist", articles)}
        <h3 style={{textAlign:"center"}}>NewsList</h3>          
        <div className='container'>
            <div className='row'>
                { articles.map((element)=>{
                  if(element.image_url!=null && element.link!=null && element.description!=null && element.title!=null){
                    return <div className='col-md-3 m-3'><NewItem img={element.image_url} title = {element.title.slice(0,50)} desp={element.description.slice(0,90)} url={element.link} /></div>
                  }else{
                    return null;
                  }          
                })}
                
            </div> 

        {/* <h3 style={{textAlign:"center"}}>NewsList</h3>  
        <div className='container'>
            <div className='row'>
                { articles.map((element)=>{
                  if(element.urlToImage!=null && element.url!=null && element.description!=null && element.title!=null){
                    return <div className='col-md-3 m-3'><NewItem img={element.urlToImage} title = {element.title} desp={element.description} url={element.url} /></div>
                  }else{
                    return null;
                  }          
                })}
                
            </div> */}

        </div>
      </>
    )
  }
}

export default NewList