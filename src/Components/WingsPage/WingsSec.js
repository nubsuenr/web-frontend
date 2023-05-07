function WingsSec(props) {
    return ( 
        <div>
    <div className="row">
    <div className="card_content">
      <div className="card">
        <div class="card-title" style={{color: 'ghostwhite'}}>{props.name}</div>
        <div>
          <p style={{color: 'ghostwhite'}}>{props.word1}<br style={{color: 'ghostwhite'}} />{props.word2}</p>
        </div>
        <button class="btn btn-outline-success" style={{width:'100px', borderRadius: '20px'}}>
          {/* eslint-disable-next-line */}
          <a style={{textDecoration: 'none', color:'white'}} href="https://forms.gle/5KtCo7MWdT72QJyt9" target="_blank">Join</a>
        </button>
      </div>
    </div>
  </div>
        </div>
     );
}

export default WingsSec;