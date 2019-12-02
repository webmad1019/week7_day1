import React from 'react'
import './style/user.css'

function User(props) {

    return (
        <article className="user">
            <h2>{props.name}</h2>
            <p>{props.surname}</p>
            <hr />
        </article>
    )
}

export default User