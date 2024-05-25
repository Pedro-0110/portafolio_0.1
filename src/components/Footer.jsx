import React from 'react'

export const Footer = ({datos}) => {
  const enlaceGit = datos.enlaces.git;
  const enlaceGmail = datos.enlaces.gmail;
  const enlaceWsp = datos.enlaces.wsp;
  
  return (
    <>
    <article className='contenedor-contacto'>

   

          <ul>
            <li><a href= {enlaceGit} target='_blank'><img src="src/iconos/icono-git.png" alt="" /></a></li>
            <li> <a href={enlaceGmail} target='_blank'><img src="src/iconos/icono-gmail.png" alt="" /></a></li>
            <li> <a href={enlaceWsp} target='_blank'> <img src="src/iconos/icono-wsap.png" alt="" /></a> </li>
          </ul>
           

    </article>
    </>
  )
}
