import React from 'react'
import { Link} from 'react-router-dom'

const Navbar = () => {

  // Function To direct to contact us screen
  const scrollToBottom=()=>{
    window.scrollTo({
      top:document.documentElement.scrollHeight,
      behavior:'auto'
    })
  }
  return (
    <nav className="navbar navbar-expand-lg bg-light sticky-top">
      <div className="container">
        <a className="navbar-brand" href="#">FakeShop</a>

        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item pe-3">
              <Link className="nav-link active" aria-current="page" to="/">Home</Link>
            </li>
            <li className="nav-item pe-3">
              <a className="nav-link" href='#' onClick={scrollToBottom} >Contact Us</a>
            </li>  
          </ul>

        </div>
      </div>
    </nav>
  )
}

export default Navbar