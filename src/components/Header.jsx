import React from 'react'

export default function Header({datos}) {
   
 
  return (
    <>

    <div className='contenedor-padre'>

    
    <article className='contenedor-imagen'>
        <img src="src/img/imagen-pedro.jpg" alt="" />
    </article>

    <article className='contenedor-informacion'>
         <h1>Hola soy {datos.nombre}!👋</h1>
         <h2>Desarrolador orientado al <i className='i'>Backend</i> con conocimiento en Frontend. </h2>
    </article>

    <article className='contenedor-imagen2'>
    <img src="src/img/imagen-compu-punk.jpeg" alt="" />
    </article>

    </div>
   

    </>
  )
}
