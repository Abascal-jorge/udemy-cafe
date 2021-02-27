import React, { useContext } from 'react';
import styled from "@emotion/styled";
import io from "socket.io-client";
import authContext from '../context/auth/authContext';
import Image from 'next/image';

const SectionPrincipal = styled.section`
    max-width: 1300px;
    padding: 0 10px 0 10px;
    margin: 100px auto;
    background-color: white;

    .info-usuario{
        padding: 10px;
        display: flex;
        justify-content: space-between;
        align-items: center;

        img{
            width: 50px;
            height: 50px;
            object-fit: cover;
            border-radius: 50%;
        }
    }

    .chat-area{
        display: flex;

        .area-contactos{
            flex-basis: 30%;
            height: 80vh;

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
            flex-basis: 70%;
            .historial{
               height: 80%;
            }
            .envios-nuevos{
                height: 20%;
            }
        }

    }

`;

const nuevacuenta = () => {

    const AuthContext = useContext( authContext );
    const { usuario } = AuthContext;
    const { nombre, correo, img} = usuario;

    //////////////////////Socket configuration//////////////
    const PORTServidor = process.env.backendURL;
    const socket = io(PORTServidor);

    socket.on("connect", () => {
        console.log("Conectado desde froent end");
    });

    socket.emit("Mensaje", { mensaje: "Hola" });

    return ( 
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
                            <textarea></textarea>
                            <input type="submit" value="Enviar mensaje"/>
                        </form>
                    </div>
                </div>
            </div>
        </SectionPrincipal>
     );
}
 
export default nuevacuenta;