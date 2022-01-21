import React from "react";

function Steptwo(){
    return(
        <div className="container-fluid">
            <div className="row card" style={{backgroundColor:'black',color:'white'}}>
                <div className="card-body text-center col-6 ms-auto me-auto" style={{border:'4px solid white',borderRadius:'16px'}}>
                    <h1>Step 2</h1>
                    <h2>Upload Your scribbly Lines</h2>
                    <div class="input-group mb-3">
                        <input type="file" class="form-control" id="inputGroupFile01" />
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Steptwo;