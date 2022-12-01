
import './portaladministrador.css'
import {ActualizarChat} from './actualizarChat'
import {TablaUsuarios} from './TablaUS'


export function Portaladministrador(){
    return <div className='poadm'>
        <header className='Cabeza'><h1>Pagina Web Fandom</h1></header>
        <nav className='navegacion'>
            <button className='D' onClick={ActualizarChat}>ACTUALIZAR CHAT</button>
            <button className='D' onClick={TablaUsuarios}>REGISTRO USUARIOS</button>
            <button className='D'>ACTUALIZAR INFORMACION</button>
        </nav>
        <div className='frase'>
            <b>"Me ves tranquila, pero pienso en el outfit de Navidad constatemente"</b><br></br><br></br>
            <b>"Lo que se te hace atractivo y a mi tambien es aquello que sentimos con el corazon, y quizas
                alli radique la razon de la existencia de este fandom"</b>
                <p>Laura Giraldo Casas</p>
                <p>Karen Berrocal Avilez.</p>
        </div>
    </div> 
}