import React from 'react'
import User from '../User/User'
import PropTypes from 'prop-types'



export default function People(props) {
    console.log(props)
    return (

        <div>

            {props.results.length === 0 ? <div>No hay nadie</div> : props.results.filter(user => user.name.includes(props.filter)).map((user, index) => (
                <User
                key={index}
                {...user}
                />
            ))}
        </div>
    )
}


People.propTypes = {
    results: PropTypes.array,
}

People.defaultProps = {
    results: []
}
