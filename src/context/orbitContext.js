import React from "react";
import { useState, useContext } from "react";

// 0 -> orbit
// 1 -> transform
export const OrbitContext = React.createContext([true, false]);

export const OrbitProvider = props => {
    const {children} = props;
    const initValue = [true, false];
    return <OrbitContext.Provider value={useState(initValue)}>{children}</OrbitContext.Provider>
}

export const useOrbitContext = () => {
    const [orbit, setOrbit] = useContext(OrbitContext);

    function completed() {
        setOrbit([false, true]);
    }

    function checked(id) {
        setOrbit([true, false]);
        
    }

    return {
        orbit,
        completed,
        checked
    }
}