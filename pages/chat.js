import React, { useContext, useEffect, useState } from 'react';
import authContext from '../context/auth/authContext';
import io from "socket.io-client";
import { useRouter } from 'next/router';
import ListadoUsuario from "../components/chat-mensajes/listadoUsuarios";
import { PanelVerde, SectionPrincipal } from "../components/chat-mensajes/estilosChat";
import Mensajes from "../components/chat-mensajes/mensajes";

let socket;

const chatMensajes = () => {
    const router = useRouter();
    const AuthContext = useContext( authContext );
    const { usuario, autenticado, listarUsuario, listarMensaje } = AuthContext;
    const { nombre, correo, img, uid } = usuario;
    const [mensaje, setMensaje] = useState("");
    const [alerta, setAlerta] = useState(false);
    //////////////////////Socket configuration//////////////
    const PORTServidor = process.env.backendURL;
    useEffect(() => {
        socket = io(PORTServidor, {
            "extraHeaders" : { "x-token" : localStorage.getItem("token")}
        });
        //
        socket.on("recibir-mensajes", ( arg1 ) => {
            //Logica
            listarMensaje(arg1.mensajes);
        });
    
        socket.on("usuarios-activos", ( datos ) => {
            //usuarioConectados(datos.activos);
            listarUsuario(datos);
        } );
    
        socket.on("mensaje-privado", ( payload ) => {
            //Logica
            console.log(payload);
        });0

        return () => {
            socket.off("usuarios-activos");
        };
    }, [ ]);
    
    //////////////Clcik en boton cerrar ///////////////
    const clickButton = () => {
        //cerrarSesion();
        console.log("Cerrar sesion");
    }
    ////////////Submit formulario enviar mensajes//////////////////
    const onSubmitMensaje = e => {
        e.preventDefault();
        if(mensaje === ""){
            setAlerta(true);
            return;
        }
        setAlerta(false);
        socket.emit("mensaje-nuevo", { uid: "604918720cebb31740a11911", nombre: "Spyder pc", mensaje });
        //socket.broadcast.emit("mensaje-nuevo", { mensaje });
        setMensaje("");
    }

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
                            onClick = { clickButton }
                        >Salir</button>
                    </div>
                </div>
                <div className="chat-area">
                    <div className="area-contactos">
                        <p>Contactos</p>
                            <ListadoUsuario/>
                    </div>
                    <div className="area-mensajes">
                        <div className="historial">
                            <Mensajes/>
                        </div>
                        <div className="envios-nuevos">
                            <form onSubmit={ onSubmitMensaje }>
                                <div className="mensajes-enviar">
                                    <input 
                                        type="text"
                                        value = { mensaje }
                                        onChange={ e => setMensaje( e.target.value )}
                                    />
                                    <input type="submit" value="Enviar mensaje"/>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </SectionPrincipal>
            {alerta && <p className="error">Escribe un mensaje para continuar</p>}
        </>

     );
}
 
export default chatMensajes;