import React, { useContext } from 'react';
import authContext from "../../context/auth/authContext";
import UsuariosActivos from "./usuariosActivos";

const ListadoUsuario = () => {

    const AuthContext = useContext(authContext);
    const { activos } = AuthContext;
    
    return ( 
        <div className="contactos-list">
            <ul>
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