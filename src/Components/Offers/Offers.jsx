import React from 'react'
import './Offers.css'
import exclusive_img from '../Assets/exclusive_image.png'


export const Offers = () => {
    return (
        <div className='offers'>
            <div className="offers-left">
                <h1>Exclusive</h1>
                <h1>Offre pour vous</h1>
                <p>Les produits les plus demande</p>
                <button>Commencez maintenant</button>
            </div>
            <div className="offers-right">
            <img src={exclusive_img} alt="" />
            </div>
        </div>
    )
}
