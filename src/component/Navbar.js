import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import LoadingBar from 'react-top-loading-bar';

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

    console.log(window.location.pathname.slice(1).toLowerCase());

    let tail = window.location.pathname.slice(1).toLowerCase();

    this.props.setProgress(10);
    let api = `https://newsdata.io/api/1/latest?apikey=${process.env.REACT_APP_API_KEY}&q=${searcher}&category=${(tail === "newspedia/" || tail === "newspedia" )? "top" : tail}`;
    this.props.setProgress(20);
    let response = await fetch(api);
    this.props.setProgress(40);
    let json = await response.json();
    this.props.setProgress(70);
    this.props.setArticles(json.results);        
    this.props.setProgress(100);
  }

  render() {

    let {srchVal} = this.state;
    return (
      <>
         <div>
            <LoadingBar
              color='#f11946'
              progress={this.props.progress}
              onLoaderFinished={() => this.props.setProgress(0)}
            />              
        </div>
        <nav className="navbar navbar-expand-lg bg-body-secondary" >
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