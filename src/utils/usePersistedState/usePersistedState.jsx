import { useEffect, useState } from 'react';

function usePersistedState( key, primoryState ) {

    const [ state, setState ] = useState ( () => {

        const storagedValue = localStorage.getItem(key);

        if (storagedValue) {
            return JSON.parse(storagedValue);
        } else {
            return primoryState;
        }

    });

    useEffect (() => {

        localStorage.setItem(key, JSON.stringify(state));

    }, [key, state]);

    return  [ state, setState ]; 
}

export default usePersistedState;