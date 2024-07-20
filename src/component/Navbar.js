import React, { Component } from 'react'

export class Navbar extends Component {

  constructor(props){
      super(props);
      this.state = {
        searchVal:null
      }
      this.props.onsearch(this.state.searchVal);
  }

  onChange = (event)=>{
    this.setState({searchVal:event.target.value})
  }

  onBtnClick = (event)=>{
    event.preventDefault();
    this.props.onsearch(this.state.searchVal);
  }

  render() {

    let {srchVal} = this.state;
    return (
      <>
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
                <a className="navbar-brand" href="/">NewsPedia</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                    <a className="nav-link " aria-current="page" href="/">Home</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link " aria-current="page" href="/">About</a>
                    </li>
                </ul>
                </div>
                <form className="d-flex" role="search">
                  <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" value={srchVal} onChange={this.onChange}/>
                  <button className="btn btn-outline-success" type="submit" onClick={this.onBtnClick}>Search</button>
                </form>
            </div>
            </nav>
      </>
    )
  }
}

export default Navbar