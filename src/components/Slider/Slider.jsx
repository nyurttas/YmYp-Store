import React from 'react'
import './Slider.css'

function Slider() {
  return (
    <section className="slide-wrapper">
        <div className="slide-info">
            <p>Her kesime hitap eden uygun ürünler!!!</p>
            <h2>İlkbahar Kampanyası</h2>
            <a href="#">Keşfet</a>
        </div>
        <div className="image-wrapper">
            <img src="/images/campaigne2.png" alt="Kampanya" 
            className="slider-image"/>
        </div>


    </section>
  )
}

export default Slider