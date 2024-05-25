import React from 'react'

export const Main = ({datos}) => {
   
  return (
    <>
   
    <article className='contenedor-habilidades'>
        <h2>Tecnologias</h2>

        <ul>
        <li><td> <img src="src/iconos/icono-c.png" alt="as" /> </td></li>
        <li><td><img src="src/iconos/icono-sqlserver.png" alt="as" /></td></li>
        <li> <td><img src="src/iconos/icono-mysql.png" alt="as" /></td></li>
        <li><td><img src="src/iconos/icono-js.png" alt="as" /></td></li>
        <li><td><img src="src/iconos/icono-nodo-js.png" alt="as" /></td></li>  
        <li> <td><img src="src/iconos/icono-git-repo.png" alt="as" /></td></li>
        <li> <td><img src="src/iconos/icono-react.png" alt="as" /></td></li>
        <li> <td><img src="src/iconos/icono-css.png" alt="as" /></td></li>
        <li><td><img src="src/iconos/icono-html.png" alt="as" /></td></li>  
        </ul>
    
    </article>
    
    <article className='contenedor-proyectos'>     
    <h2 className='encabezado-proyectos'>Proyectos</h2>
    <div class="card">
        <img src="src/img/imagen-proyecto-balance.PNG" alt="Card Image" class="card-img"/>
        <div class="card-content">
            <h2 class="card-title">Balance general</h2>
            <p class="card-description"></p>
        </div>
        <div class="card-footer">
            <button class="card-btn">Visitar</button>
        </div>
    </div>

    <div class="card">
        <img src="src/img/imagen-proyecto-algoritmos.PNG" alt="Card Image" class="card-img"/>
        <div class="card-content">
            <h2 class="card-title">Algoritmos info</h2>
            <p class="card-description"></p>
        </div>
        <div class="card-footer">
            <button class="card-btn">Visitar</button>
        </div>
    </div> 

    </article>

    <article className='contenedor-educacion'>
        <h2>Educacion</h2>
        <ul>
        <li>{datos.estudio}</li>
        </ul>
    </article>
    
    </>
  )
}
