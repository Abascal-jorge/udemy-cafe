import React, { useReducer } from 'react';
import authContext from "./authContext";
import authReducer from "./authReducer";
import { AUTENTICANDO_USUARIO, 
         MOSTRANDO_ALERTA} from "../../type/index";
import axios from "axios";


const AuthState = ({children}) => {

    const initialState = {
        token: typeof window !== "undefined" ? localStorage.getItem("token") : "",
        autenticado: null,
        usuario: null,
        mensaje: null
    }

    const [ state, dispatch ] = useReducer(authReducer, initialState);

    const agregandoUsuarioGoogle = async (token) => {
        try {
            const url = "https://rest-cafe-udemy.herokuapp.com/google";

            const resultado = await axios.post(url, {token}); 
            
            dispatch({
                type: AUTENTICANDO_USUARIO,
                payload: resultado.data
            });
        } catch (error) {
            console.log(error);
        }
    }

    return ( 
        <authContext.Provider
            value = {
                {   
                    autenticado: state.autenticado,
                    agregandoUsuarioGoogle
                }
            }
        >
            {children}
        </authContext.Provider>
     );
}
 
export default AuthState;

