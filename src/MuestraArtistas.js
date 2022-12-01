
import './MuestraArtista.css'
export function ArtistasCompletos(){
    var id=1
    var editar=id;
    var eliminar= id+1; 
    return <div className="artist">
        <header className='Cabeza'><h1>Editar-Eliminar y Actualizar la informacion de tus artistas</h1></header>
        <section className='SesionArtist'>
            <div className='bts'><h6>BTS</h6>
            <a href='#' id={eliminar}>eliminar</a><br></br>
            <a href='#' id={editar}>editar</a>
            </div>
            <div className='cnco'><h6>CNCO</h6>
            <img src='../public/img/CNCO.png'></img>
            <a href='#' id={eliminar}>eliminar</a><br></br>
            <a href='#' id={editar}>editar</a>
            </div>
            <div className='maluma'><h6>MALUMA</h6>
            <a href='#' id={eliminar}>eliminar</a><br></br>
            <a href='#'id={editar}>editar</a>
            </div>
            <div className='stz'><h6>STRAY KIDS</h6>
            <a href='#' id={eliminar}>eliminar</a><br></br>
            <a href='#' id={editar}>editar</a>
            </div>
            <div className='KarolG'><h6>KAROL G</h6>
            <a href='#' id={eliminar}>eliminar</a><br></br>
            <a href='#'id={editar}>editar</a>
            </div>
            <div className='aespa'><h6>AESPA</h6>
            <a href='#' id={eliminar}>eliminar</a><br></br>
            <a href='#' id={editar}>editar</a>
            </div>
        </section>
    </div>
}