import React from 'react'
import Products from '../components/Products'

const ProductPage = () => {
  return (
    <div className='ProductPage-Container'>
     <h3>Products</h3>
     <div className='ProductPage-Items' >
        <Products/> 

     </div>
    </div>
  )
}

export default ProductPage