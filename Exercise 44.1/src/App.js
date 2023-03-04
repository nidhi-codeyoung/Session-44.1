import React from "react";
import axios
 from "axios";
const { useState, useEffect } = React

const App = () => {
  const [data, setData] = useState([]);
  
  useEffect(() => {
    axios
      .get('https://jsonplaceholder.typicode.com/users')
      .then(function(response) {
        setData(response.data)
      })
      .catch(error => console.log(error));
    
  }, []);
  
  const listItems = data.map((item) =>
    <li>{ item.email}</li>
    
  );
                             
  return (
    <div>
      <center>
           
      <ol>
      <h2>React & Axios api</h2>
        {listItems}
      </ol>
      </center>
    </div>
  );
}
export default App;