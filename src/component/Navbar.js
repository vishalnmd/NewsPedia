import React, { Component } from 'react'
import { Link } from 'react-router-dom';

export class Navbar extends Component {

  constructor(props){
      super(props);
      this.state = {
        searchVal:null
      }    
  }

  componentDidMount(){
    this.onSearch(this.state.searchVal);
  }

  onChange = (event)=>{
    this.setState({searchVal:event.target.value})
  }

  onBtnClick = (event)=>{
    event.preventDefault();
    this.onSearch(this.state.searchVal);
  }

  onSearch = async (searcher)=>{
    if(searcher ==null){
      searcher = "top";
    }

    console.log("this is searchers",searcher);
    console.log(window.location.pathname.slice(1).toLowerCase() === "newspedia" ? "top" : window.location.pathname.slice(1).toLowerCase());
    let api = `https://newsdata.io/api/1/latest?apikey=pub_49020b2426982e3baff9174122d14619df4f1&q=${searcher}&category=${window.location.pathname.slice(1).toLowerCase() === "newspedia" ? "top" : window.location.pathname.slice(1).toLowerCase()}`;
    let option = {
      method:"GET",
      apiKey:"TfTOk2_goyvEdJOxZr0XJxoKoEKLU5Fpk_Q8CS9THWq1k95S"
   }
    let response = await fetch(api,option);
    let json = await response.json();
    this.props.setArticles(json.results);
    
    console.log(json.results);
  }

  render() {

    let {srchVal} = this.state;
    return (
      <>
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/NewsPedia">NewsPedia</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                    <Link className="nav-link" aria-current="page" to="/NewsPedia" onClick={() => this.props.setCategory('top')}>Top</Link>
                    </li>
                    <li className="nav-item">
                    <Link className="nav-link" aria-current="page" to="/Sport" onClick={() => this.props.setCategory('sports')}>Sport</Link>
                    </li>
                    <li className="nav-item">
                    <Link className="nav-link" aria-current="page" to="/Business" onClick={() => this.props.setCategory('business')}>Business</Link>
                    </li>
                    <li className="nav-item">
                    <Link className="nav-link " aria-current="page" to="/Entertainment" onClick={() => this.props.setCategory('entertainment')}>Entertainment</Link>
                    </li>
                    <li className="nav-item">
                    <Link className="nav-link " aria-current="page" to="/Health" onClick={() => this.props.setCategory('health')}>Health</Link>
                    </li>
                    <li className="nav-item">
                    <Link className="nav-link " aria-current="page" to="/Food" onClick={() => this.props.setCategory('food')}>Food</Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link " aria-current="page" to="/Other" onClick={() => this.props.setCategory('other')}>Other</Link>
                    </li>                    
                </ul>
                <form className="d-flex" role="search">
                  <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" value={srchVal} onChange={this.onChange}/>
                  <button className="btn btn-outline-success" type="submit" onClick={this.onBtnClick}>Search</button>
                </form>
                </div>            
            </div>
            </nav>
      </>
    )
  }
}

export default Navbar