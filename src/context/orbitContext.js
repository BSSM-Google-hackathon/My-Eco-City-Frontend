import React from "react";
import { useState, useContext } from "react";

const state = [
    {
        id: 1,
        created: 0,
        transformable: false,
    },
    {
        id: 2,
        created: 0,
        transformable: false,
    },
    {
        id: 3,
        created: 0,
        transformable: false,
    },
    {
        id: 4,
        created: 0,
        transformable: false,
    },
    {
        id: 5,
        created: 0,
        transformable: false,
    },
    {
        id: 6,
        created: 0,
        transformable: false,
    },
    {
        id: 7,
        created: 0,
        transformable: false,
    },
    {
        id: 8,
        created: 0,
        transformable: false,
}];

// 0 -> orbit
// 1 -> transform
export const OrbitContext = React.createContext([true, false, state]);

export const OrbitProvider = props => {
    const {children} = props;
    const initValue = [true, false, state];
    return <OrbitContext.Provider value={useState(initValue)}>{children}</OrbitContext.Provider>
}

export const useOrbitContext = () => {
    const [orbit, setOrbit] = useContext(OrbitContext);

    function completed(id) {
        let copyArray = [...orbit];
        copyArray[0] = false;
        copyArray[1] = true;
        copyArray[2][id] = {...copyArray[2][id], created: true, transformable: true};
        setOrbit(copyArray);
    }

    function checked(id) {
        let copyArray = [...orbit];
        copyArray[0] = true;
        copyArray[1] = false;
        copyArray[2][id] = {...copyArray[2][id], transformable: false};
        setOrbit(copyArray);
    }

    return {
        orbit,
        completed,
        checked
    }
}