import React from 'react'
import './Home.css'
import Product from './Product'

function Home() {
  return (
    <div className='home'>
      <div className='homeContainer'>
        <img className='homeImage' src="https://images-eu.ssl-images-amazon.com/images/G/31/img2020/img21/apparelGW/U599/JUNE/PC/2._CB667373073_.jpg" alt=" "/>
      <div className='homeRow'>
      <Product title="a lean startup" price="29.99" image="https://m.media-amazon.com/images/I/81vvgZqCskL._AC_UY436_FMwebp_QL65_.jpg" rating={3}/>
      <Product/>
      </div>
      <div className='homeRow'>
      <Product/>
      <Product/>
      <Product/>
      </div>
      <div className='homeRow'>
        <Product/>
      </div>
      </div>
    </div>
  )
}

export default Home