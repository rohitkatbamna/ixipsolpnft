import React from "react";
import './navbarcss.css'; 


function Navbarfornft(){
    return(
        <div className="card shadow navbar-of-all-of-it-font-change" style={{backgroundColor:'#1C1A1C'}}>
            <div className="card-body text-left ms-auto">
                <button type="button" class="btn btn-light me-5 fs-3" style={{height:'100px',borderRadius:'16px'}}>Connect To Wallet</button>
            </div>
        </div>
    );
}
export default Navbarfornft;