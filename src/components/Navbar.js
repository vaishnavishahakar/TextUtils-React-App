import React from 'react'
import PropTypes from 'prop-types'
import './Navbar.css'


export default function Navbar(props) {
    return (
        <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
        <div className="container-fluid">
          <a className="navbar-brand" href="/">{props.title}</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/home">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" href="/about">{props.aboutText}</a>
              </li>
            </ul>

            <div className='d-flex'>
              <div className="bg-primary rounded mx-3" onClick={()=> {props.toggleMode('primary')}} style={{height: '30px', width: '30px', cursor: 'pointer', border: '1px solid black'}}></div>
              <div className="bg-danger rounded mx-3" onClick={()=> {props.toggleMode('danger')}} style={{height: '30px', width: '30px', cursor: 'pointer', border: '1px solid black'}}></div>
              <div className="bg-success rounded mx-3" onClick={()=> {props.toggleMode('success')}} style={{height: '30px', width: '30px', cursor: 'pointer', border: '1px solid black'}}></div>
              <div className="bg-warning rounded mx-3" onClick={()=> {props.toggleMode('warning')}} style={{height: '30px', width: '30px', cursor: 'pointer', border: '1px solid black'}}></div>
              <div className="bg-dark rounded mx-3" onClick={()=> {props.toggleMode('dark')}} style={{height: '30px', width: '30px', cursor: 'pointer', border: '1px solid black'}}></div>
              <div className="bg-secondary rounded mx-3" onClick={()=> {props.toggleMode('secondary')}} style={{height: '30px', width: '30px', cursor: 'pointer', border: '1px solid black'}}></div>
            </div>

           {/*<form className="d-flex">
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
              <button className="btn btn-primary" type="submit">Search</button>
            </form> */}

          </div>
        </div>
      </nav>
    )
}


Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  aboutText: PropTypes.string.isRequired
}

Navbar.defaultProps ={
  title: 'set title here',
  aboutText: 'About'
};