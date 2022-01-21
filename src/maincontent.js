import React from "react";
import './mconte.css';


function Maincontentnft(){
    return(
        <div className="card main-content-nft-all-of-it" style={{backgroundColor:'#1C1A1C'}}>
            <div className="card-body container-fluid">
                <div className="row justify-content-around">
                    <div className="card col-5" style={{borderRadius:'16px'}}>
                        <div className="card-body text-center">
                            <h3 className="fw-bold">Account ID</h3>
                            <h1>1234567890</h1>
                            <h3 className="mt-5 fw-bold">Account Balance</h3>
                            <h1>1234567890</h1>
                        </div>
                    </div>
                    <div className="card col-5" style={{borderRadius:'16px'}}>
                        <div className="card-body text-center">
                            <h3 className="fw-bold">Account ID</h3>
                            <h1>1234567890</h1>
                            <h3 className="mt-5 fw-bold">Account Balance</h3>
                            <h1>1234567890</h1>
                        </div>
                    </div>
                </div>
                <div className="row" style={{marginTop:'100px'}}>
                    <div className="col-xl-5 ms-auto me-auto col-md-8">
                        <div className="card" style={{borderRadius:'16px'}}>
                            <div className="card-body">
                                <div className="d-flex justify-content-around">
                                    <input type='text' placeholder='Enter Tokens To Transfer'style={{borderRadius:'8px',border:'2px solid black'}}/>
                                    <button type="button" class="btn btn-dark fs-3" style={{borderRadius:'16px'}}>Transfer</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Maincontentnft;