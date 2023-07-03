import React from "react";
import PropTypes from 'prop-types';
import TextUtilsLogo from '../TextUtilsLogo.png';
import Profile from '../profile.jpg';



export default function Navbar(props) {
    return (
        <>
        <nav className={`navbar navbar-expand-lg navbar-${props.mode}`} style={{ backgroundColor: props.mode === 'dark' ? '#03001C' : 'white'}}>
            <div className="container-fluid">
                <button className="navbar-toggler" type="button" data-mdb-toggle="collapse" data-mdb-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <i class="fas fa-bars"></i>
                </button>
                <div className="row">
                    <div className="col d-flex align-items-center">
                        <img src={TextUtilsLogo} className="rounded-circle me-2" height="25" alt="Black and White Portrait of a Man" loading="lazy"/>
                        <h1 className="navbar-brand py-0 my-0">{props.title}</h1>
                    </div>
                </div>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link" aria-current="page" href="/">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/">Features</a>
                        </li>
                        {/* <form className="d-flex input-group mx-3">
                            <input type="search" className="form-control searchBAR" placeholder="Search" aria-label="Search" aria-describedby="search-addon"/>
                            <button type="button" className="btn btn-info searchBTN">
                                <i className="fas fa-search"></i>
                            </button>
                        </form> */}
                    </ul>
                    <div className="row">
                        <div className="col d-flex align-items-center">
                            <div className={`form-check form-switch me-5 text-${props.mode==='light'?'muted':'muted'}`}>
                                <input className="form-check-input" onClick={props.toggleMode} type="checkbox" role="switch" id="flexSwitchCheckDefault" />
                                <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Enable Dark Mode</label>
                            </div>
                            <a className="btn px-2 py-1 rounded-circle btn-info me-3" href="https://github.com/SpookyGriffin" role="button">
                                <i className="fab fa-github"></i>
                            </a>
                            <div className="dropdown">
                                <a className="dropdown-toggle d-flex align-items-center hidden-arrow" href="/" id="navbarDropdownMenuAvatar" role="button" data-mdb-toggle="dropdown" aria-expanded="false">
                                    <img src={Profile} className="rounded-circle" height="27" alt="Black and White Portrait of a Man" loading="lazy"/>
                                </a>
                                <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdownMenuAvatar">
                                    <li><a className="dropdown-item" href="/">My profile</a></li>
                                    <li><a className="dropdown-item" href="/">Settings</a></li>
                                    <li><a className="dropdown-item" href="/">Logout</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
        </>
    );
}

Navbar.propTypes = {
    title: PropTypes.string.isRequired
  }

// Specifies the default values for props:
Navbar.defaultProps = {
    title: 'Default Title'
  };
