import React, { Component } from 'react'

export class NewsItem extends Component {
  render(props) {
    return (
      <>        
        <div className="card shadow p-3 mb-5 bg-body-tertiary rounded mw-100 h-80"  style={{width: '18rem'}}>
            <img src={this.props.img} style={{width:"15em",height:"10em",objectFit:"cover",padding:"0.5em"}} className="card-img-top" alt="..."/>
            <div className="card-body">
                <h5 className="card-title">{this.props.title}</h5>
                <p className="card-text">{this.props.desp}</p>
                <a href={this.props.url} target='_blank' rel="noreferrer" className="btn btn-primary">Go somewhere</a>
            </div>
        </div>
      </>
    )
  }
}

export default NewsItem