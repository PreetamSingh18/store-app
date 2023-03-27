import React from 'react'
import Products from '../components/Products'
import Footer from './Footer'

const ProductPage = () => {
  return (
    <div className='ProductPage-Container'>
     <h3>Products</h3>
     <div className='ProductPage-Items' >
        <Products/> 

     </div>
     <Footer/>
    </div>
  )
}

export default ProductPage