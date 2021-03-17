import React, { useContext } from 'react';
import authContext from "../../context/auth/authContext";

const UsuariosActivos = ( { datos } ) => {

    const AuthContext = useContext(authContext);
    const { usuario } = AuthContext;

    return ( 
        <>
            { usuario.uid !=  datos.uid &&
                <li>
                    {datos.nombre}
                </li>
            }
        </>
     );
}
 
export default UsuariosActivos;