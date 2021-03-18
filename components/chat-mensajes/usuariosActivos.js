import React, { useContext } from 'react';
import authContext from "../../context/auth/authContext";

const UsuariosActivos = ( { datos } ) => {

    const AuthContext = useContext(authContext);
    const { usuario, usuarioPrivado } = AuthContext;

    return ( 
        <>  
            { usuario.uid !=  datos.uid &&
                <li  onClick= { () => usuarioPrivado( { uid: datos.uid, nombre: datos.nombre } ) }>
                    {datos.nombre}
                </li>
            }
        </>
     );
}
 
export default UsuariosActivos;