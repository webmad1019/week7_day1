import React from 'react'
import Title from './Title'

function PageHeader(props) {

    console.log('El parámetro por defecto con props es:', props)

    return (
        <header>
            <Title text={props.title} />
            <p>{props.subtitle}</p>
        </header>
    )
}

export default PageHeader