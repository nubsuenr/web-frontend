function Announcement(){
    return (
      <>
        <div className="container">
          <div className="row">
            <div className="col-md-12" style={{ marginTop: "10px" }}>
              <center>
                <h1>Upcoming Events</h1>
              </center>

              <div style={{ display: "flex", justifyContent:'center' }}>
                <div style={{width: "30%",boxShadow: "2px 2px 10px",marginRight: "10px",}}>
                  <img src={process.env.PUBLIC_URL + "/images/nubs@10_fliers.jpg"} alt="" />
                </div>
                <div>
                  <p style={{fontSize:'0.8rem' ,color:'white'}}>This is the 10th annniversary flier</p>
                </div>
              </div>
              
            </div>
          </div>
        </div>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
      </>
    );
}
export default Announcement