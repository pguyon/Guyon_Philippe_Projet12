import React from 'react';
import './VerticalNav.css';
import Yoga from '../../../assets/yoga.png'
import Natation from '../../../assets/natation.png'
import Cycling from '../../../assets/cycling.png'
import Workout from '../../../assets/workout.png'

const VerticalNav = () => {
    const icons = [
        Yoga,
        Natation,
        Cycling,
        Workout
    ]
    return (
        <aside>
            {icons.map((icon, index) => (
                <img key={index} src={icon} alt='' />
            ))}
            <span>Copyright, SportSee 2020</span>
        </aside>
    );
}

export default VerticalNav;
