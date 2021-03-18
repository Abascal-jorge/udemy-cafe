import React, { useContext } from 'react';
import authContext from "../../context/auth/authContext";
import UsuariosActivos from "./usuariosActivos";

const ListadoUsuario = () => {

    const AuthContext = useContext(authContext);
    const { activos, usuarioPrivado } = AuthContext;

    /*
    smsPrivado
    { smsPrivado &&
        smsPrivado.map( men => (
            <MensajesTexto>
                { men.mensaje } <span>{men.de}</span>
            </MensajesTexto>
        ))
    } */
    
    return ( 
        <div className="contactos-list">
            <ul>
                <li onClick= { () => usuarioPrivado( { uid: "", nombre: "" } ) }>Mensaje Global</li>
                { activos &&
                    activos.map( datos => (
                        <UsuariosActivos
                            datos = {datos}
                            key = { datos.uid }
                        />
                    ))
                }
            </ul>
        </div>
     );
}
 
export default ListadoUsuario;