
import './Sesion.css'
export function Iniciarusuarios(){
    return <div className='sesionUsuario'>
        <header><h1>Pagina Web Fandom</h1></header>
        <section className='Todo'>
          <div className='sesion'>
            <h2>Iniciar Sesion</h2>
            <h4>Usuario:</h4>
            <input type='email' placeholder='Usuario'></input>
            <h4>Contraseña:</h4>
            <input type='text' placeholder='contraseña'></input><br></br><br></br>
            <button className='ingreso'>Ingresar</button>
            </div>
            <div className='registro'>
                <h2>Registra tu cuenta</h2>
                <p><b>INGRESA a nuestra pagina y vive momentos agradables charlando y informandote de tus artistas preferidos 
                    si no tienes aun una cuenta puedes registrarla aqui, luego podras iniciar sesion de forma gratuita,Ingresa al siguiente boton y registra tu cuenta:</b></p>
                <button className='form'>Registrarse</button>
            </div>
            </section> 
        </div>
}