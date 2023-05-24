import React, {useEffect, useState} from 'react'
import axios from "axios"

function Table() {
  const [data, setPresident] = useState([]);

  useEffect(() => {
    axios.get("https://nubsuenr.onrender.com/presidentes")
    .then(response => setPresident(response.data))
    .catch(err => console.log(err))
  })

    return ( 
        <div>
            <table class="table table-dark table-striped" style={{width: '100%'}}>
          <thead>
            <tr>
              <th scope="col">PRESIDENTS</th>
              <th scope="col">YEAR OF ADMINISTRATION</th>
            </tr>
          </thead>
          {
            
            data.map(item => (
              <tbody>
              <tr>
                <td>{item.name}</td>
                <td>{item.yearofadministration}</td>
              </tr> 
            </tbody>
            ))
          }
        </table>
        </div>
     );
}

export default Table;