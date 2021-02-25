//import Head from 'next/head';
//import styles from '../styles/Home.module.css';
import React, { useEffect } from 'react';
import { GoogleLogin } from 'react-google-login';
import { Contenedor,
         Formulario } from "../components/esilos";
import io from "socket.io-client";

const Home = () => {
  //////////////////////Socket configuration//////////////
    const PORTServidor = process.env.backendURL;
    const socket = io(PORTServidor);

  useEffect(() => {
    socket.on("connect", () => {
      console.log("Conectado desde froent end");
    });

    socket.emit("Mensaje", { mensaje: "Hola" });
    
  }, [socket]);
  

  const responseGoogle = async googleUser => {
    /*let profile = googleUser.getBasicProfile();
    console.log('ID: ' + profile.getId()); // Do not send to your backend! Use an ID token instead.
    console.log('Name: ' + profile.getName());
    console.log('Image URL: ' + profile.getImageUrl());
    console.log('Email: ' + profile.getEmail()); // This is null if the 'email' scope is not present.
    */
    const id_token = googleUser.getAuthResponse().id_token;
  
    localStorage.setItem("token-google", id_token);
  }

  return(
    <Contenedor className="wrapper">
      <Formulario>
        <h2>Iniciar Sesion</h2>
          <div className="campos">
            <label>Correo: </label>
            <input type="email" id="email"/>
          </div>
          <div className="campos">
            <label>Password: </label>
            <input type="password"/>
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