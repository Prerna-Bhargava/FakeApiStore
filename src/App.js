import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Products from './components/Products';
import SingleProduct from './components/Singleproduct';
import { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

function App() {
  const [productKey, setProductKey] = useState(0);
  return (
    <div>
      <BrowserRouter>
        <Navbar />

        <main style={{ minHeight: "85vh" }}>
          <Routes>
            {/* Show AllProducts Page by default, If key prop is changed, shows the selected product */}
            <Route path='/' element={productKey == 0 ? <Products setProductKey={setProductKey} /> : <SingleProduct productKey={productKey} />} />
          </Routes>
        </main>

        <Footer />
      </BrowserRouter>


    </div>
  );
}

export default App;
