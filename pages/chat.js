import React, { useContext, useEffect } from 'react';
import styled from "@emotion/styled";
import authContext from '../context/auth/authContext';
import io from "socket.io-client";

const PanelVerde = styled.div`
    width: 100%;
    height: 100px;
    background-color: #009688;
`;

const SectionPrincipal = styled.section`
    max-width: 1300px;
    height: 600px;
    //border: 1px solid red;
    margin: -80px auto 0px auto;
    background-color: white;

    .info-usuario{
        //border: 1px solid blue;
        box-sizing: inherit;
        padding: 10px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        background-color: #E5DDD5;

        img{
            width: 50px;
            height: 50px;
            object-fit: cover;
            border-radius: 50%;
        }
    }

    .chat-area{
        display: flex;
        height: 84%;
       //border: 1px solid purple;

        .area-contactos{
            flex-basis: 20%;
            p{
                text-align: center;
                position: relative;
                padding: 15px;
            }

            p::before{
                content: "";
                position: absolute;
                bottom: 0;
                left: 50%;
                width: 120px;
                height: 3px;
                background-color: black;
                transform: translateX(-50%);
            }

            p::after{
                content: "Mensajes";
                position: absolute;
                bottom: -8px;
                left: 50%;
                padding: 2px;
                background-color: white;
                transform: translateX(-50%);
            }


            .contactos-list{
                ul{
                    padding: 0;
                    list-style: none;
                    li{
                        padding: 10px;
                        background-color: #eee;
                        &:hover{
                            background-color: #ef2;
                        }
                    }
                }
            }
        }

        .area-mensajes{
            //border: 1px solid yellow;
            padding: 10px;
            flex: 1;
            .historial{
               //border: 1px solid green;
               height: 90%;
            }
            .envios-nuevos{
                //border: 2px solid magenta;
                height: 10%auto;
                padding: 0;
                margin: 0;
            }
            .mensajes-enviar{
                //border: 1px solid #eee;
                position: relative;
                padding: 0;
                margin: 0;
            }

            .mensajes-enviar textarea{
                width: 100%;
                height: 30px;
                padding: 0;
                resize: none;
                border-radius: 6px;
                border: 2px solid #eee;
            }

            .envios-nuevos form input{
                position: absolute;
                top: 2px;
                right: 2px;
                outline: none;
                appearance: none;
                border: none;
                //border: 1px solid #eee;
                background-color: white;
                padding: 5px;
            }
        }

    }

`;

const chatMensajes = () => {

    const AuthContext = useContext( authContext );
    const { usuario, autenticado, validarToken } = AuthContext;
    //let nombre = "jorge", correo="sdas", img = null;
    const { nombre, correo, img } = usuario;
    let spinner = true;
    //const { nombre, correo, img } = usuario;
    //const nombre = "jorge", correo="sdas", img = null;

    //////////////////////Socket configuration//////////////
    /*const PORTServidor = process.env.backendURL;
    const socket = io(PORTServidor, {
        "extraHeaders" : { "x-token" : localStorage.getItem("token")}
    });

    
    socket.on("connect", () => {
        console.log("Conectado desde froent end");
    });

    socket.emit("Mensaje", { mensaje: "Hola" });
    //fin sockets*/

    return (
        <> 
                { spinner ?
                 <>
                    <PanelVerde>
                    </PanelVerde>
                    <SectionPrincipal className="chat-section">
                        <div className="info-usuario">
                            <h2>{nombre}</h2>
                            <p>Correo: {correo}</p>
                            <img src={ img ? img : "/perfil.png"}/>
                        </div>
                        <div className="chat-area">
                            <div className="area-contactos">
                                <p>Contactos</p>
                                <div className="contactos-list">
                                    <ul>
                                        <li>Manuel Abascal</li>
                                        <li>Juan arturo coboj</li>
                                        <li>Elias enrique</li>
                                        <li>Valeria</li>
                                        <li>Karla</li>
                                    </ul>
                                </div>
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
                : null }
        </>
     );
}
 
export default chatMensajes;