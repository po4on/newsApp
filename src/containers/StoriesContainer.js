import React, {useEffect, useState} from 'react';
import { getStoryIds, getStory } from "../services/hnAPi";

export const  StoriesContainer = () => {
    // eslint-disable-next-line
    const [storyIds, setStoryIds] = useState([]);

    useEffect( () => {
        getStoryIds().then(data => setStoryIds(data));
        getStory('21346349').then(data => console.log(data));
    }, []);
    return (
        <p>{JSON.stringify(storyIds)}</p>
    )
};

