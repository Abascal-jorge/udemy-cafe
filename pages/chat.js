import React, { useContext, useEffect } from 'react';
import authContext from '../context/auth/authContext';
import io from "socket.io-client";
import { useRouter } from 'next/router';
import ListadoUsuario from "../components/chat-mensajes/listadoUsuarios";
import { PanelVerde, SectionPrincipal } from "../components/chat-mensajes/estilosChat";

let socket;

const chatMensajes = () => {
    const router = useRouter();
    const AuthContext = useContext( authContext );
    const { usuario, autenticado, activos, listarUsuario } = AuthContext;
    //let nombre = "jorge", correo="sdas", img = null;
    const { nombre, correo, img } = usuario;
    //////////////////////Socket configuration//////////////
    const PORTServidor = process.env.backendURL;

    useEffect(() => {
        socket = io(PORTServidor, {
            "extraHeaders" : { "x-token" : localStorage.getItem("token")}
        });
        //
        socket.on("recibir-mensajes", ( arg1 ) => {
            //Logica
            console.log(arg1);
        });
    
        socket.on("usuarios-activos", ( datos ) => {
            //usuarioConectados(datos.activos);
            listarUsuario(datos);
        } );
    
        socket.on("mensaje-privado", () => {
            //Logica
        });

        return () => {
            socket.off("usuarios-activos");
        };
    }, [ ]);
    //////////////Clcik en boton cerrar ///////////////
    const clickButton = () => {
        //cerrarSesion();
        console.log("Cerrar sesion");
    }
    ////////////////////////////////////////////////////

    return (

        <>
            <PanelVerde>
            </PanelVerde>
            <SectionPrincipal className="chat-section">
                <div className="info-usuario">
                    <h2>{nombre}</h2>
                    <p>Correo: {correo}</p>
                    <div className="perfil-salir">
                        <img src={ img ? img : "/perfil.png"}/>
                        <button
                            onClick={clickButton}
                        >Salir</button>
                    </div>
                </div>
                <div className="chat-area">
                    <div className="area-contactos">
                        <p>Contactos</p>
                        {activos &&
                            <ListadoUsuario/>
                        }
                    </div>
                    <div className="area-mensajes">
                        <div className="historial">
                            <p>Campo</p>
                        </div>
                        <div className="envios-nuevos">
                            <form>
                                <div className="mensajes-enviar">
                                    <textarea></textarea>
                                    <input type="submit" value="Enviar mensaje"/>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </SectionPrincipal>
        </>

     );
}
 
export default chatMensajes;