

import './TablaUS.css'
export function TablaUsuarios(){
    var id=1;
    var name='Karen.berrocal@gmail.com';
    /*const email = name;*/
    const Usuarios= id;
    return <div className="TablaUsuarios">
        <header className='Cabeza'>
        <h1>Pagina Web Fandom</h1>
        <h2>Registro de Todos Los usuarios</h2>
    </header>
    <div>
    <table border={'1px'} className="Tabla">
        <thead className="dark">
            <tr>
            <td>ID</td>
            <td>EMAIL</td>
            <td>CONTRASEÑA</td>
            <td>USUARIO:Nombre de pila</td>
            </tr>
        </thead>
        <tbody className='Tablacuerpo'>
            <tr>
            <td>{Usuarios}</td>
            <td>{name}</td>
            <td>JungHoseok18</td>
            <td>kaso</td>
            </tr>
            <tr>
                <td>2</td>
                <td>LauraGiraldo@gmail.com</td>
                <td>LauraBrian</td>
                <td>Lauri</td>
            </tr>
            <tr>
                <td>3</td>
                <td></td>
                <td></td>
                <td></td>
            </tr>
        </tbody>
    </table>
    </div>
</div>
}