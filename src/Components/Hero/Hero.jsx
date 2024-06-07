import React from 'react'
import './Hero.css'
import hand_icon from '../Assets/hand_icon.png'
import arrow_icon from '../Assets/arrow.png'
import hero_igm from '../Assets/hero_image.png'

export const Hero = () => {
    return (
        <div className='hero'>
            <div className="hero-left">
                <h2>NOUVELS ARRIVAGE UNIQUEMENT</h2>
                <div>
                    <div className="hero-hand-icon">
                        <p>Nouvel</p>
                        <img src={hand_icon} alt="" />
                    </div>
                    <p>Collections</p>
                    <p>Pour tous</p>
                </div>
                <div className="hero-latest-btn">
                    <div>Dernière Collection</div>
                    <img src={arrow_icon} alt="" />
                </div>
            </div>
            <div className="hero-right">
                <img src={hero_igm} alt="" />
            </div>
        </div>
    )
}
