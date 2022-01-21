import React from "react";

function Stepone(){
    return(
        <div className="container-fluid">
            <div className="row card" style={{backgroundColor:'black',color:'white'}}>
                <div className="card-body text-center col-6 ms-auto me-auto" style={{border:'4px solid white',borderRadius:'16px'}}>
                    <h1>Step 1</h1>
                    <h2>Connect your wallet</h2>

                    <button type="button" className="btn btn-dark" data-bs-toggle="modal" data-bs-target="#exampleModal" style={{fontFamily:'sans-serif',marginTop:'25px'}}>
                    Connect Your Wallet Now
                    </button>


                    <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true" >
                        <div className="modal-dialog" >
                            <div className="modal-content" style={{fontFamily:'sans-serif',backgroundColor:'black',color:'white',border:'4px solid white',borderRadius:'16px'}}>
                                <div className="modal-header">
                                    <h5 className="modal-title" id="exampleModalLabel">Wallet Connect</h5>
                                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                </div>
                                <div className="modal-body">
                                    <h2>Click the Button Below</h2>
                                </div>
                                <div className="modal-footer">
                                    <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">
                                        Connect
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}
export default Stepone;