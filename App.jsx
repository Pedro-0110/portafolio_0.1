import React from 'react'
import Header from './src/components/Header'
import { Main } from './src/components/Main'
import { Footer } from './src/components/Footer'
import "./src/styles/index.css"

export const App = () => {
  
  const datos = {
    nombre : "Pedro",
    estudio : "Tecnicatura Universitaria en Programación - UTN",
    enlaces : {
      git : "https://github.com/Pedro-0110",
      gmail: "https://mail.google.com/mail/u/0/?fs=1&to=pcordobaj0@gmail.com&su=Asunto&body=Mensaje&tf=cm",
      wsp :"https://api.whatsapp.com/send?phone=+34123456789&text=Hola,%20este%20es%20un%20mensaje%20desde%20HTML"
    }

  }
  return (
    <div>
        <Header datos = {datos}/>
        <Main datos = {datos} />
        <Footer datos={datos}/>
    </div>
  )
}
