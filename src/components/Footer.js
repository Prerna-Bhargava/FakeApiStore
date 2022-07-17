import React from 'react'

const Footer = () => {
  return (
    <footer className="footer bg-light pt-3 pb-2">
      <div className="container">
        <h4 className="">FakeShop</h4>

        <div className="row">
          <div className="col-4">
            <h5>Features</h5>
            <ul className="list-group">

              <li> Various Categories Available</li>
              <li>Best Prices Ever</li>
              <li>One place for all your needs</li>

            </ul>
          </div>
          <div className="col-3">
            <h5>Categories</h5>
            <ul className="list-group">
              <li>Men's Clothing</li>
              <li>Women's Clothing</li>
              <li>Jewelery</li>
              <li>Electronics</li>

            </ul>
          </div>

          <div className='col'>
            <h5>Contact Us</h5>
            <form>
              <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
              </div>
              <div className="mb-3">
                <label htmlFor="exampleInputPassword1" className="form-label">Comment</label>
                <input type="text" className="form-control" id="exampleInputPassword1" />
              </div>

            </form>

          </div>
        </div>

        <p className='text-center'>Copright &copy; Notes App </p>
      </div>
    </footer>

  )
}

export default Footer