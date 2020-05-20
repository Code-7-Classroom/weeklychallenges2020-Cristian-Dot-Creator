import React from 'react'


const Info = (props) =>{
    return (
        <div>
            <h1>My name is {props.name} call me at {props.number}. I was born by the river in {props.dob}</h1>
        </div>
    )
}

export default Info