import React from 'react'
// import Login from '../../login';

const BigComponent = ({ClassName, smallComponent, inilog}) => {
    console.log(smallComponent)
    return (
        <div className={ClassName}>
            {smallComponent}
        </div>
            //FindValue(smallComponent)
    )
}

export default BigComponent;