import React, { Component } from 'react'
import NewItem from './NewsItem'

export class NewsList extends Component {
  
  constructor(props){
    super(props);
    this.state ={
      newsls:null
    }
  }

  render() {

    const {articles} = this.props;

    if(!articles){
      return <div>
              <div className="spinner-border d-flex justify-content-center" role="status">
                <span className="visually-hidden">Loading...</span>
              </div>
      </div>
    }
    
    return (
      <>        
        <h3 className='pt-1' style={{textAlign:"center"}}>NewsList</h3>          
        <div className='container'>
            <div className='row'>
                { articles.map((element)=>{
                  if(element.image_url!=null && element.link!=null && element.description!=null && element.title!=null){
                    return <div className='col-md-3 m-3'><NewItem key={element} img={element.image_url} title = {element.title.slice(0,50)} desp={element.description.slice(0,90)} url={element.link} /></div>
                  }else{
                    return null;
                  }          
                })}
                
            </div> 

        </div>
      </>
    )
  }
}

export default NewsList