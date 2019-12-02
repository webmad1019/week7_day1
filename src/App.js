import React from 'react';
import './App.css';
import PageHeader from './components/PageHeader'
import User from './components/User'
import Title from './components/Title'

import Button from './components/Button'

import ReactPlayer from 'react-player'

function App() {

  return (

    <>

      <PageHeader
        title="Nuestro equipo"
        subtitle="Conoce al dream team de la programación"
      />

      <User name="Germán" surname="Álvarez" />
      <User name="Alex" surname="Alarcó" />


      <Title text="Nuestros sponsors" />
      <User name="Sandra" surname="Tejedor" />

      <Title text="Nuestro componente de clase" />
      <Button action="Enviar información" />

      <Title text="Nuestras novedadaes" />
      <ReactPlayer url="https://vimeo.com/channels/top/22439234" />
      <ReactPlayer url='https://www.youtube.com/watch?v=_W0bSen8Qjg'
        playing
        controls
        volume="0.5"
      />

    </>


  )

}

export default App;