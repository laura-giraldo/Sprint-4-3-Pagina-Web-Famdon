
import './actualizarChat.css'
export function ActualizarChat(){
    return <div className="poadm" style={{textaling:'center'}}>
        <header className='Cabeza'>
            <h1>Pagina Web Fandom</h1>
        </header>
        <div className="chat">
            <div className="EPChat"><h2>Ven y chatea conmigo</h2></div>
            <h3>MENSAJES:</h3><br></br><br></br><br></br><br></br>
            <ul id="listado-msjs"></ul>
            <div id="env-msjs">
                <input id="nuevo-msj" placeholder="Nuevo mensaje"></input>
                <button id="btn-msj">Send</button>
            </div>
            <div>
                <button className="BTN" onClick={
                    (e)=>{if (alert){
                    alert("Quieres Actualizar el chat");
                    alert("Se eliminaran todos los mensajes de este chat");
                    alert("Mensajes eliminados exitosamente");
                    }
                   }}>ACTUALILAR CHAT</button>
                <button className="BTN" onClick={(e)=>{
                alert('Estas seguro de salir del chat')
                }}>SALIR DEL CHAT</button>
            <div className='Art'>
                <h6><i>BTS, MALUMA, KAROLG, AESPA, CNCO, STRAY KIDS.</i></h6> 
            </div>
            </div>
        </div>
    </div>
}