import React from "react";

function Stepthree(){
    return(
        <div className="container-fluid">
            <div className="row card" style={{backgroundColor:'black',color:'white'}}>
                <div className="card-body text-center col-6 ms-auto me-auto" style={{border:'4px solid white',borderRadius:'16px'}}>
                    <h1>Step 3</h1>
                    <h2>Click Button Below for sell you NFT below</h2>
                    <button type="button" className="btn btn-dark fs-4 mt-3">Mint Now</button>
                </div>
            </div>
        </div>
    );
}
export default Stepthree;