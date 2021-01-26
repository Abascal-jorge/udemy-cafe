import React, { useReducer } from 'react';
import authContext from "./authContext";
import authReducer from "./authReducer";
import { AUTENTICANDO_USUARIO, 
         MOSTRANDO_ALERTA} from "../../type/index";


const AuthState = ({children}) => {

    const initialState = {
        token: typeof window !== "undefined" ? localStorage.getItem("token") : "",
        autenticado: null,
        usuario: null,
        mensaje: null
    }

    const [ state, dispatch ] = useReducer(authReducer, initialState);

    const consultarApi = () => {
        initialState.token = "Hola";
    }

    return ( 
        <authContext.Provider
            value = {
                {   
                    consultarApi,
                    token: state.token,

                }
            }
        >
            {children}
        </authContext.Provider>
     );
}
 
export default AuthState;

