import React from 'react';
import './HorizontalNav.css'
import Logo from '../../../assets/SoprtSee_logo.png'

const HorizontalNav = () => {
    return (
        <header className='horizontal__nav__wrapper'>
            <img className='horizontal__nav__logo'
                src={Logo}
                alt='SportSee Logo'/>
            <nav>
                <ul>
                    <li>Accueil</li>
                    <li>profil</li>
                    <li>Réglages</li>
                    <li>Communauté</li>
                </ul>
            </nav>


        </header>
    );
}

export default HorizontalNav;
