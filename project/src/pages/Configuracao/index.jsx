import React from 'react';
import Header from "../../components/Header"
import Footer from "../../components/Footer"
import  styles from "./Configuracoes.module.css"

function Configuracoes(){
    return(
        <>
        <Header/>
          <section className={styles.container}>
               <figure>
                <img className='img-fundo' src='/sem_fundo.png' alt='imagem de Home' />
                </figure>

          </section>
          <Footer/>
        </>
      
    )
}

export default Configuracoes