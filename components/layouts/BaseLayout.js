import Header from '../shared/Header'
import React from 'react'

const BaseLaout = (props) => {
    return (
        <>
            <Header />
            {props.children}
        </>
    )
}

export default BaseLaout