function Table() {
    return ( 
        <div>
            <table class="table table-dark table-striped" style={{width: '100%'}}>
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">PRESIDENTS</th>
              <th scope="col">YEAR OF ADMINISTRATION</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td>Paul Kwasi Pobi</td>
              <td>2013-2017</td>
            </tr>
            <tr>
              <th scope="row">2</th>
              <td>Eliezer Quansah</td>
              <td>2017-2018</td>
            </tr>
            <tr>
              <th scope="row">3</th>
              <td>Emmanuel Acquah</td>
              <td>2018-2019</td>
            </tr>
            <tr>
              <th scope="row">4</th>
              <td>Emmanuel Mokobi Aryee</td>
              <td>2019-2020</td>
            </tr>
            <tr>
              <th scope="row">5</th>
              <td>Sam Robert</td>
              <td>2020-2021</td>
            </tr>
            <tr>
              <th scope="row">6</th>
              <td>Elikplim Dagba</td>
              <td>2021-2022</td>
            </tr>
            <tr>
              <th scope="row">7</th>
              <td>Tweneboah Henry</td>
              <td>2022-2023</td>
            </tr>
          </tbody>
        </table>
        </div>
     );
}

export default Table;