import React, { useContext } from 'react';
import authContext from "../../context/auth/authContext";

const ListadoUsuario = ( ) => {

    const AuthContext = useContext(authContext);
    const { activos } = AuthContext;
    
    return ( 
        <div className="contactos-list">
            <ul>
                { activos &&
                    activos.map( datos => {
                        console.log(datos.nombre);
                        <li>{datos.nombre}</li>
                    })
                }
            </ul>
        </div>
     );
}
 
export default ListadoUsuario;