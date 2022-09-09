import React from 'react';
import './VerticalNav.css';
import Yoga from '../../../assets/yoga.png'
import Natation from '../../../assets/natation.png'
import Cycling from '../../../assets/cycling.png'
import Workout from '../../../assets/workout.png'

/**
 * Aside template
 * @returns 4 icons and a text
 * @author Philippe Guyon
 * @version 1.0
 */


const VerticalNav = () => {
    const icons = [
        Yoga,
        Natation,
        Cycling,
        Workout
    ]
    return (
        <aside className='vertical__wrapper'>
            <div className='vertical__img'>
                {icons.map((icon, index) => (
                    <img key={index} src={icon} alt='' />
                ))}
            </div>
            <div className='vertical__span'>Copyright, SportSee 2020</div>
        </aside>
    );
}

export default VerticalNav;
