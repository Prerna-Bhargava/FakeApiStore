import React, { useEffect, useState } from 'react'
import Loader from './Loader'

const Singleproduct = (props) => {

  const [product, setSingleProduct] = useState([])
  const [loading, isloading] = useState(true)

  const fetchProduct = async () => {
    console.log(props)
    let response = await fetch(`https://fakestoreapi.com/products/${props.productKey}`)
    let data = await response.json();
    setSingleProduct(data);
    isloading(false)
  }

  useEffect(() => {
    fetchProduct()

  }, [])

  return (
    <div className='container  mt-5'>
      <h1 className='text-center my-3'>{product.title}</h1>

      {/* Show Spinner if product not fetched yet */}
      {loading && <Loader />}

      {product.title &&
        <div className="row single-product">
          <div className="col-lg-4">
            <img src={product.image} style={{ height: "80%" }} className="card-img-top " alt="..." />
          </div>
          <div className="col p-5">
            <div className="card" style={{ borderRadius: "20px" }} >
              <div className="card-body">

                <h5 className="card-title">{product.title}</h5>
                <h6 className="card-subtitle mb-2 text-muted">{product.category}</h6>
                <p className="card-text">{product.description}</p>
                <button className="btn btn-primary float-end">Buy Now</button>
                <h4 className='card-text my-2'>Price : {product.price}$</h4>
                <blockquote className="blockquote mt-3 mb-0">
                  <p>Rating - {product.rating.rate} / 5</p>
                  <footer className="blockquote-footer">Total purchases <cite title="Source Title">{product.rating.count}</cite></footer>
                </blockquote>

              </div>
            </div>
          </div>
        </div>

      }



    </div>
  )
}

export default Singleproduct