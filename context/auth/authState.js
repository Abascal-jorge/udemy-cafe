import React, { useReducer } from 'react';
import authContext from "./authContext";
import authReducer from "./authReducer";
import { AUTENTICANDO_GOOGLE, 
         AUTENTICADO_CORREO,
         VALIDAR_TOKEN,
         ELIMINAR_SESION,
         LISTADO_USUARIOS,
         LISTADO_MENSAJE} from "../../type/index";
import axios from "axios";


const AuthState = ({children}) => {

    const initialState = {
        token: typeof window !== "undefined" ? localStorage.getItem("token") : "",
        autenticado: null,
        usuario: null,
        mensaje: null,
        activos: null
    }

    const [ state, dispatch ] = useReducer(authReducer, initialState);

    const iniciandoGoogle = async (id_token) => {
        try {

           const url =  `${process.env.backendURL}/api/auth/google`;
           //console.log( url );
           const respuesta = await axios.post(url, {id_token});

           dispatch({
                type: AUTENTICANDO_GOOGLE,
                payload: respuesta.data
            });

        } catch (error) {
            console.log(error);
        }
    }

    const iniciandoCorreo = async ( datos ) => {
        try {   
            const url = `${process.env.backendURL}/api/auth/login`;
            const token = await axios.post(url, datos); 
            //console.log(token.data);
            dispatch({
                type: AUTENTICADO_CORREO,
                payload: token.data
            });
        } catch (error) {
            console.log(error);
        }
    }

    const validarToken = async ( ) => {
        const token = localStorage.getItem("token");
        try {
            const url = `${process.env.backendURL}/api/auth`;
            const respuesta = await axios(url, {
                headers: { "x-token": token}
            });
    
            dispatch({
                type: VALIDAR_TOKEN,
                payload: respuesta.data
            });
        } catch (error) {
            console.log(error.response.data);
        }
    }

    const cerrarSesion = () => {
        dispatch({
            type: ELIMINAR_SESION
        });
    }

    const listarUsuario = (datos) => {
        //console.log(datos);
        dispatch({
            type: LISTADO_USUARIOS,
            payload: datos.activos
        });
    }

    const listarMensaje = (mensajes) => {
        dispatch({
            type: LISTADO_MENSAJE,
            payload: mensajes
        });
    }

    return ( 
        <authContext.Provider
            value = {
                {   
                    autenticado: state.autenticado,
                    usuario: state.usuario,
                    activos: state.activos,
                    mensaje: state.mensaje,
                    iniciandoGoogle,
                    iniciandoCorreo,
                    validarToken,
                    cerrarSesion,
                    listarUsuario,
                    listarMensaje
                }
            }
        >
            {children}
        </authContext.Provider>
     );
}
 
export default AuthState;

