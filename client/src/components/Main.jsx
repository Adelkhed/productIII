import React, {useState, useEffect } from 'react'
import Axios from 'axios'
import { Link } from "react-router-dom"
const Main =() => {
   const [products, setProducts]= useState([]);
   //const [error, setError] = useState(null);
   useEffect(() => {
    Axios.get("http://localhost:5000/api/products")
      .then((response) => {
        setProducts(response.data.jokes);
        console.log(response.data);
      })
      .catch((err) => {
       // setError(err.message);
        console.log(err);
      });
  }, []);
  return (
    <div>
      <h2>All Products</h2>
     {
      products.map((oneProduct) => {
        return(
          <div key={oneProduct._id}>
            <Link to={"/products/" + oneProduct._id}>
                <h1>{oneProduct.title}</h1>
            </Link>
          </div>
        
        )
        })
        }
    </div>
  )
}

export default Main
