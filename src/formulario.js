
import './formulario.css'
export function Formulario(){
    return <div className="formulario">
       <header>
        <h1>REGISTRA TU CUENTA Y SIGUE LA VIDA DE TUS ARTISTAS</h1>
        </header> 
        <div className='FormCaja'>
            <h2>Ingresa un correo electronico:</h2>
            <input  type='email'></input>
            <h2>Ingresa una contraseña:</h2>
            <input type='text'></input><br></br><br></br>
            <button type="button" className="crearC">CREAR CUENTA</button>
        </div>
    </div>
}