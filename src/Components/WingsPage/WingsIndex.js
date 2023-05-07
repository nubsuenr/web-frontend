import WingsSec from "./WingsSec";

function WingsIndex() {
    return (  
        <div style={{backgroundImage: 'url(https://images.unsplash.com/photo-1616257011729-870fd9a37798?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fGNofGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60)', backgroundRepeat: 'no-repeat', backgroundSize: 'cover',backgroundPosition: 'center'}}>
        <div style={{background: 'rgb(0, 0, 0,.5)'}}>
  <h1 style={{textAlign: 'center', color: 'ghostwhite'}}>
  Wings Session
</h1>
<p style={{padding: '10px', color: 'ghostwhite'}}><b>Nubs-Uenr has six wings. Please you are advise to join at least one wing. These include;</b></p>
<div className="wingsindexcard">
<WingsSec name='Outreach Wing' word1='The Outreach Wing consist of JNUBS, which is nubs for Senior High Schools' word2='The Outreach Wing is in charge of evangelism and charity'/>
<WingsSec name='Theatre Wing' word1='The Theatre wing is in charge of the Drama and Choreography department.' word2='So if you are good in dancing and acting and also want to learn.'/>
<WingsSec name='Organising Wing' word1='The Organising Wing consist of Ushering, Publicity and Technical department.' word2='We also make fliers, sound and video editing. If you are interested, join us.'/>
</div>
<div className="wingsindexcard">
<WingsSec name='Music Wing' word1='The Music Wing is in charge of the melodious songs in the church.' word2="They also have a choir called; God's Love Choir. If love to sing, you can join us."/>
<WingsSec name='Bible Studies Wing' word1="The Bible Studies Wing is in charge of Tuesday's Bible Studies." word2='They are have Quiz boys, who normally represent the church when they have Bible Quiz. If you want to know of the word, join us.'/>
<WingsSec name='Prayer Wing' word1="The Prayer Wing is in charge of Thursday's Prayers on the School Field." word2='They also have intercessors who stand in the gap to Prayer for the church and their families. If you love to pray, join us.'/>
</div>
<div>
    <p style={{padding: '10px', color: 'ghostwhite', }}>Apart from the Wings we have Committes that help in the activities assigned to them specially to do.</p>
    <p style={{color: 'ghostwhite',paddingLeft:"10px", height:'0' }}>The Committes include:</p>
    <ul style={{paddingTop:'10px', color:'white'}}>
        <li>Prayer Committee</li>
        <li>Counselling Committee</li>
        <li>Food Committee</li>
        <li>Planning Committee</li>
    </ul>
    <p style={{paddingLeft: '10px', color: 'ghostwhite'}}><i>A section about each wing coming soon</i></p>
</div>
<br></br>
<br></br>
<br></br>
</div>
</div>
    );
}

export default WingsIndex;