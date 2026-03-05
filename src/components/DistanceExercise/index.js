import React, { useState } from 'react';
const DistanceExercise = ({ name })  => {
    const [distance, setDistance] = useState(0);
    const incrementDistance = () => {
        setDistance((prevDistance) => prevDistance + 1);
    };
    const resetDistance = () => {
        setDistance(0);
    };
    return (
        <div>
            <h2>{name}</h2>
            <p>Distance: {distance} km</p>
            <button onClick={incrementDistance}>Increase Distance</button>
            <button onClick={resetDistance}>Reset Distance</button>
        </div>
    );
};
export default DistanceExercise;
