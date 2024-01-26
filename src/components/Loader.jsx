import React from 'react'

const Loader = () => {
    return (
        <>
            <div className="wrapper">
                <div className="circle"></div>
                <div className="circle"></div>
                <div className="circle"></div>
                <div className="shadow"></div>
                <div className="shadow"></div>
                <div className="shadow"></div>
                <span>Loading</span>
            </div>
        </>
    )
}

export default Loader