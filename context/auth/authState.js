import React, { useReducer } from 'react';
import authContext from "./authContext";
import authReducer from "./authReducer";
import { AUTENTICANDO_GOOGLE, 
         AUTENTICADO_CORREO} from "../../type/index";
import axios from "axios";


const AuthState = ({children}) => {

    const initialState = {
        token: typeof window !== "undefined" ? localStorage.getItem("token") : "",
        autenticado: null,
        usuario: null,
        mensaje: null
    }

    const [ state, dispatch ] = useReducer(authReducer, initialState);

    const iniciandoGoogle = async (token) => {
        try {
            dispatch({
                type: AUTENTICANDO_GOOGLE,
                payload: token
            });
        } catch (error) {
            console.log(error);
        }
    }

    const iniciandoCorreo = async ( datos ) => {
        try {   
            const url = `${process.env.backendURL}/login`;
            console.log(url);
            const token = await axios.post(url, datos); 
            console.log(token);
            /*
            distpach({
                type: AUTENTICADO_CORREO,
                payload: datos
            });*/
        } catch (error) {
            console.log(error);
        }
    }

    return ( 
        <authContext.Provider
            value = {
                {   
                    autenticado: state.autenticado,
                    iniciandoGoogle,
                    iniciandoCorreo
                }
            }
        >
            {children}
        </authContext.Provider>
     );
}
 
export default AuthState;

