import React from "react";
import logonavbarixi from './solanaLogoMark.svg';
import './navbarcss.css'; 
import ixi from './16275302498922.svg';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

function Navbarfornft(){
    return(
        <div className="card sticky-top shadow navbar-of-all-of-it-font-change" style={{backgroundColor:'black',fontFamily:'cursive'}}>
            <div className="card-body">
                <nav className="navbar navbar-expand-lg navbar navbar-dark">
                    <div className="container-fluid">
                        <a className="navbar-brand d-flex justify-content-around align-items-center" href="#">
                           <img src={ixi} style={{width:'50px'}}/> <FontAwesomeIcon icon={faPlus} size="1x"/> <img src={logonavbarixi} style={{width:'25px',marginLeft:'5px',marginRight:'5px'}} /> <FontAwesomeIcon icon={faPlus} size="1x"/><h4>NFT</h4> 
                        </a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="#">Home</a>
                            </li>
                            <li className="nav-item">
                            <a className="nav-link" href="#">Validation</a>
                            </li>
                            <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Developers
                            </a>
                            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <li><a className="dropdown-item" href="#">Getting Started</a></li>
                                <li><a className="dropdown-item" href="#">NFTs</a></li>
                                <li><hr className="dropdown-divider"/></li>
                                <li><a className="dropdown-item" href="#">Community</a></li>
                            </ul>
                            </li>
                            <li className="nav-item">
                            <a className="nav-link">Ecosystem</a>
                            </li>
                        </ul>
                        <form className="d-flex">
                            <input className="form-control me-2" type="search" placeholder="So it comes to this" aria-label="Search" />
                            <button className="btn btn-outline-success" type="submit">Search</button>
                        </form>
                        </div>
                    </div>
                </nav>
            </div>
        </div>
    );
}
export default Navbarfornft;