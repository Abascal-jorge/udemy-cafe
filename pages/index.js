//import Head from 'next/head';
//import styles from '../styles/Home.module.css';
import React, { useEffect, useContext, useState } from 'react';
import { GoogleLogin } from 'react-google-login';
import { Contenedor,
         Formulario } from "../components/esilos";
import io from "socket.io-client";
import authContext from "../context/auth/authContext";

const Home = () => {
  //Context Funciones authState
  const AuthContext = useContext(authContext);
  const { iniciandoGoogle, iniciandoCorreo } = AuthContext;
  //////////////////////Socket configuration//////////////
  const PORTServidor = process.env.backendURL;
  const socket = io(PORTServidor);

  socket.on("connect", () => {
    console.log("Conectado desde froent end");
  });

  socket.emit("Mensaje", { mensaje: "Hola" });

  //UseState para recompilar los datos de los inputs
  const [ datos, setDatos ] = useState({
      correo: "",
      password: "",
  });
  const { correo, password } = datos;
  
  const obtenerDatos = ( e ) => {
      setDatos({
        ...datos,
        [e.target.name] : e.target.value
      });
  }

  const onSubmitDatos = (e) => {
  
      e.preventDefault();

      iniciandoCorreo(datos);
  
  }

  const responseGoogle = googleUser => {
    /*let profile = googleUser.getBasicProfile();
    console.log('ID: ' + profile.getId()); // Do not send to your backend! Use an ID token instead.
    console.log('Name: ' + profile.getName());
    console.log('Image URL: ' + profile.getImageUrl());
    console.log('Email: ' + profile.getEmail()); // This is null if the 'email' scope is not present.
    */
    const id_token = googleUser.getAuthResponse().id_token;
    iniciandoGoogle( id_token );
  }

  return(
    <Contenedor className="wrapper">
      <Formulario 
        onSubmit = { onSubmitDatos }
      >
        <h2>Iniciar Sesion</h2>
          <div className="campos">
            <label>Correo: </label>
            <input 
              name="correo"
              placeholder="Ingresa tu correo aquí"
              type="email"
              value={correo}
              onChange={obtenerDatos}
            />
          </div>
          <div className="campos">
            <label>Password: </label>
            <input 
              type="password"
              placeholder="Ingresa tu contraseña aqui"
              name="password"
              value={password}
              onChange={obtenerDatos}
            />
          </div>
          <input type="submit" value="Iniciar Sesión"/>

          <GoogleLogin
              clientId="967684378270-lovb56upvdlhp729pjdihr92pfhd5lb4.apps.googleusercontent.com"
              buttonText="Iniciar Sesión Google"
              onSuccess={responseGoogle}
              cookiePolicy={'single_host_origin'}
              className="google"
          />
         
      </Formulario>
    </Contenedor>
  )
}

export default Home;