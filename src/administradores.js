import './administradores.css'
import {Portaladministrador} from './portaladministrador'

export function Administrador(){
    return <body className="Administrador" style={{text:'center'}}>
        <header><h1>Pagina Web Fandom</h1></header>
        <div>
        <section className='section'>
            <h2>Usuario:</h2>
            <input type={'email'} placeholder='Usuario'></input>
            <h2>Contraseña:</h2>
            <input type={'text'} placeholder='contraseña'></input><br></br><br></br><br></br>
            <button onClick={Portaladministrador} style={{color:'black',bgcolor:'black'}}>Ingresar</button>
        </section>
        <p className='ken'> Solo es para inicio de sesion de admininistradores, conoce mas de nuestros artistas
            idols y sus actualizaciones de noticias mas vistas, tambien podras disfutar de un chat en el que podras
            hablar y compartir tus gustos con otros fans que viven emociones similares a las vuestras... Ven y disfruta...
        </p>
        </div>
    </body>
}