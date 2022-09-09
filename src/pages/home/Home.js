import React from 'react';
import './Home.css'
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <main className='home__wrapper'>
            <Link to="/dashboard/12">Lien vers l'id 12</Link>
            <Link to="/dashboard/18">Lien vers l'id 13</Link>
        </main>
    );
}

export default Home;
