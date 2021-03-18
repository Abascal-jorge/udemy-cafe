import React, { useContext } from 'react';
import authContext from "../../context/auth/authContext";
import styled from "@emotion/styled";

const MensajesTexto = styled.p`
    padding: 5px;
    margin: 10px 0;
    border-radius: 10px;
    border: 1px solid #222;
    width: 50%;
    position: relative;
    span{
        position: absolute;
        color: blue;
        bottom: 4px;
        right: 10px;
        font-size: 0.6em;
    }
`;

const Mensajes = () => {

    const AuthContext = useContext( authContext );
    const { mensaje, privado, smsPrivado } = AuthContext;
    
    return ( 
        <>  
            { privado.uid === "" ?
                mensaje &&
                    mensaje.map( info => (
                        <MensajesTexto> 
                            { info.mensaje } <span>{info.nombre}</span>
                        </MensajesTexto>
                    ))
                :
                smsPrivado.length > 0 &&
                    smsPrivado[0].uidRemitente === privado.uid &&
                    smsPrivado.map( men => (
                        <MensajesTexto>
                            { men.mensaje } <span>{men.de}</span>
                        </MensajesTexto>
                    ))
            }
        </>
     );
}
 
export default Mensajes;