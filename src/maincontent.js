import React from "react";
import solCoin from './solanaLogoMark.svg';
import './mconte.css';
import ixi from './16275302498922.svg';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDollarSign, faEquals, faPlus } from "@fortawesome/free-solid-svg-icons";
import Stepone from "./step1";
import Steptwo from "./step2";
import Stepthree from "./step3";

function Maincontentnft(){
    return(
        <div className="container-fluid main-conent-nft-all-of-it" style={{backgroundColor:'black'}}>
            <div className="row">
                <div className="col-12 text-center text-white" >
                    <p style={{fontSize:'80px'}} className="fw-bold">Salutation And Greeting to Crypto enthusiast  </p>
                    <p style={{fontSize:'50px'}} className="fw-regular">You are cordially invited to make Your NFT</p>
                </div>
            </div>
            <div className="row">
                <div className="card col-12 text-center text-white" style={{backgroundColor:'black'}}>
                    <div className="card-body">
                        <div>
                            <h1>Have A piece of art And want to make money hell if you don't have art but still want to make money by selling scribbly line you drawn together 
                            </h1>
                            <h1>WE GOT YOU COVERED</h1>
                            <h1>Just Follow The Steps below</h1>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row mt-5">
                <div className="col-12">
                    <Stepone />
                </div>
            </div>
            <div className="row mt-5">
                <div className="col-12">
                    <Steptwo />
                </div>
            </div>
            <div className="row mt-5">
                <div className="col-12">
                    <Stepthree />
                </div>
            </div>
            <div className="row mt-5">
                <div className="col-12 text-center text-white fs-1 fw-bold">
                    In Summary  
                </div>
            </div>
            <div className="row">
                <div className="col-12 justify-content-around align-items-center d-flex flex-wrap mb-5 mt-3" style={{border:'4px solid white',borderRadius:'16px'}}>
                    <img src={solCoin} style={{width:'50px'}} className="img-make-rotate" alt="Sol coin "/>
                    <FontAwesomeIcon icon={faPlus} size="6x" style={{color:'white'}}/>
                    <h1 className="text-white">NFT</h1>
                    <FontAwesomeIcon icon={faPlus} size="6x" style={{color:'white'}}/>
                    <img src={ixi}  alt="ixi symbol"/>
                    <FontAwesomeIcon icon={faEquals} size="6x" style={{color:'white'}} />
                    <FontAwesomeIcon icon={faDollarSign}  size="6x" style={{color:'white'}}/>
                    <FontAwesomeIcon icon={faDollarSign}  size="6x" style={{color:'white'}}/>
                    <FontAwesomeIcon icon={faDollarSign}  size="6x" style={{color:'white'}}/>
                </div>
            </div>

        </div>
    );
}
export default Maincontentnft;