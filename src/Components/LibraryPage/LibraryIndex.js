import React, {useEffect, useState} from 'react'
import axios from "axios"

export const LibraryIndex = () => {
    const [searchValue, setSearchValue] = useState("");
    const handleInputChange = (event) => {
        setSearchValue(event.target.value.toLowerCase());
      };

    const [data, setLibrary] = useState([]);

    useEffect (() => {
        axios.get("https://nubsuenr.onrender.com/library")
        .then(response => setLibrary(response.data))
        .catch(err => console.log(err))
    },[])

    

  return (
    <div className='container'>
        <div className='row'>
            <div className='col-md-12'>
                <h3 style={{textAlign:"center",marginTop:'10px'}}>Welcome to E-Library</h3>
                <div className='searchable-header'>
                    <input type='text' className="form-control" id="myInput" onChange={handleInputChange} placeholder='Search Book'></input>
                </div>
                <div>
                    <table className="table table-dark">
                        <thead>
                            <tr>
                                <th>Book Title</th>
                                <th>Author</th>
                            </tr>
                        </thead>
                        {
                            data.map(item => {
                                const itemString = String(item);
                                return(
                        <tbody id='myTable'>
                            <tr key={itemString} style={{ display: item.book_title.toLowerCase().indexOf(searchValue) > -1 ? 'table-row' : 'none' }}>
                                 {/* eslint-disable-next-line */}
                                <td><a target='_blank' href={item.link} style={{textDecoration:"none"}}>{item.book_title}</a></td>
                                <td>{item.author_name}</td>
                            </tr>
                        </tbody>        
                            )})
                        }
                        
                    </table>
                </div>
            </div>
        </div>
    </div>
  )
}
