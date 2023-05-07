import { Link } from "react-router-dom/cjs/react-router-dom";
import Table from "./Table";

function AboutIndex() {
    return ( 
        <div>
        <div id="aboutpg" style={{ backgroundRepeat: 'no-repeat',backgroundSize: 'cover',backgroundPosition: 'center'}}>
             <div style={{background: 'rgba(0, 0, 0, 0.616)'}}>
                <h1 style={{textAlign: 'center', color: 'ghostwhite'}}>About NUBS-UENR </h1> 
                    <div style={{padding: '20px', color: 'ghostwhite',textAlign:'justify'}}>
                        Nubs- Uenr was established on <b>Saturday, 26th October, 2013</b>. God willing 2023 <b>Nubs- Uenr will be <i>10 years</i></b>.
                        Weekly activities of the union: Bible Studies (Tuesday), Prayer meeting (Thursday), Intercessors meeting (Saturday) and Sunday service.
                        Successive executives under the administration of various presidents, have handled the activities of the union to make us come this far.
                        <hr />
                <div>
                <p style={{color:'white'}}><b>Our Patron </b>- Mr. Alfred Appiah </p>
                <p style={{color:'white'}}><b>Our Patroness </b>- Dr. Baaba A. Danquah</p>
                <p style={{color:'white'}}><b>Campus Pastor </b>- Rev. Fred Kumi Achiever</p>
                </div>
            </div>
                <Table />
        <div style={{padding: '20px', color: 'ghostwhite'}}>
        <h3>Various Wings</h3>
        Bible Studies Wing
        <br />Prayer Wing
        <br />Music Wing
        <br />Outreach/ Evangelism wing
        <br />Organizing wing 
        <br />Theatre wing
        <p>If you want to know about the wings, click <Link to="/wing" style={{textDecoration:'none'}}>here</Link></p>
        {/* eslint-disable-next-line */}
        <p>Click <a href="https://drive.google.com/file/d/1jabGDOB0o-Xa_P_BoO4sqTWsC7DkcbKq/view?usp=share_link" target="_blank" style={{textDecoration:'none'}}>here</a>  to download our constitution</p> 
      </div>
      <br/>
    </div>
</div>
<br></br>
</div>
     );
}

export default AboutIndex;