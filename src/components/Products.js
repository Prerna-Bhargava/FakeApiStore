import React, { useState, useEffect } from 'react'
import Loader from './Loader'
import './style.css'
const Products = (props) => {

  // products holds all the products returned by FakeApiStore
  const [products, setProducts] = useState([])
  // To show Spinner while we data is being fetched
  const [loading, isloading] = useState(true)

  const fetchProducts = async () => {
    let response = await fetch('https://fakestoreapi.com/products')
    let data = await response.json();
    setProducts(data);
    isloading(false)
  }
  useEffect(() => {
    fetchProducts()

  }, [])

  const showSingleProduct = (key) => {
    props.setProductKey(key)
  }

  return (
    <div className='container mt-3'>

      <h1 className='text-center mb-3'>Our Products</h1>

      {/* Show Spinner if products not fetched yet */}
      {loading && <Loader />}

      {/* To display each propduct by traversing the products array . */}
      <div className="row">
        {products.map((product) => {

          return <div className="card col-lg-4 mx-3 my-3 product" key={product.id} >
            <img src={product.image} style={{ height: "250px" }} className="card-img-top " alt="..." />
            <div className="card-body">
              <h5 className="card-title">{product.title}</h5>
              <p className="card-text">{product.description.slice(0, 100)}...</p>
              <button className="btn btn-primary" onClick={() => showSingleProduct(product.id)}>Know More</button>
              <h4 className='float-end'>{product.price}$</h4>
            </div>

          </div>

        })}

      </div>



    </div>
  )
}

export default Products