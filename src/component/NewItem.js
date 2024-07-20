import React, { Component } from 'react'

export class NewItem extends Component {
  render(props) {
    return (
      <>
        {console.log(props)}
        <div className="card" style={{width: '18rem'}}>
            <img src={this.props.img} className="card-img-top" alt="..."/>
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

export default NewItem