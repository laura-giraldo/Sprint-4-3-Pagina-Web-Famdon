import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css' 
import {Administrador} from './administradores'
import { Iniciarusuarios } from './Sesion'
import {Formulario} from './formulario'
import cnco from './cnco'
const root = ReactDOM.createRoot(document.getElementById('root'));

function Principal(){
   
    return <body>
        <header><h1>Pagina Web Fandom</h1></header>
        <nav>
            <button className='A'  style={{color:'white',margin:'40px', variant:'contained'}}>INICIO</button>
            <button className='A' onClick={ function Nos(){ Navigator('./nosotros');}}
             variant='conatained' style={{color:'white',margin:'40px'}}>NOSOTROS</button>
            <button className='A' onClick={Administrador} style={{color:'white',margin:'40px'}}>ADMINISTRADORES</button>
            <button className='A' onClick='' style={{color:'white',margin:'40px'}}>INICIAR SESION</button>
        </nav><br></br><br></br>
        <section><br></br>
        <button className='c'><b><i>Inicia sesion de forma gratuita y asi podras:</i></b></button><br></br><br></br><br></br>
        <button className='AB'>Chatear en Vivo con personas que comparten tus mismos gustos.</button><br></br><br></br><br></br>
        <button className='B'>Informate de las noticias de tus artistas preferidos de forma gratuita.</button><br></br><br></br><br></br>
        </section>
</body>

}
root.render(<div>
  <Principal/>
  <Iniciarusuarios/>
  <Formulario/>
  <ArtistasEdicion/>
  <CNCO/>
</div>)