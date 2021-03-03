import React, { useContext } from 'react';
import authContext from "../../context/auth/authContext";

const ListadoUsuario = ( ) => {

    const AuthContext = useContext(authContext);
    const {} = AuthContext;
    return ( 
        <div className="contactos-list">
            <ul>
                <li>Jorge Abascal López</li>
            </ul>
        </div>
     );
}
 
export default ListadoUsuario;