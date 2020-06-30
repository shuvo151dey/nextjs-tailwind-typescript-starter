import React from 'react'
import FirstColumn from '../Components/firstColumn'
import MiddleColumn from '../Components/middleColumn'
import LastColumn from '../Components/lastColumn'
export default function Index(): React.ReactElement {
    return (
        <>
            <FirstColumn />
            <MiddleColumn />
            <LastColumn />
        </>
    )
}
