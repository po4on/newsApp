import React, {useEffect, useState} from 'react';
import { getStoryIds } from "./services/hnAPi";

export const  App = () => {
    // eslint-disable-next-line
    const [storyIds, setStoryIds] = useState([]);

    useEffect( () => {
        getStoryIds().then(data => setStoryIds(data))
    }, []);
    return (
        <p>{JSON.stringify(storyIds)}</p>
    )
};

export default App;
