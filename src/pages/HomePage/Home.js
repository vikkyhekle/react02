import React from 'react'
import { homeObjOne, homeObjTwo, homeObjThree, homeObjFour } from './Data';
import { InfoData } from '../../components'

const Home = () => {
    return (
        <>
            <InfoData {...homeObjOne} />   
            <InfoData {...homeObjTwo} />   
            <InfoData {...homeObjThree} />   
            <InfoData {...homeObjFour} />   
        </>
    )
}

export default Home
