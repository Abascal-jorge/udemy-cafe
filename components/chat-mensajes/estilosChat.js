import React from 'react';
import styled from "@emotion/styled";

export const PanelVerde = styled.div`
    width: 100%;
    height: 100px;
    background-color: #009688;
`;

export const SectionPrincipal = styled.section`
    max-width: 1300px;
    height: 600px;
    //border: 1px solid red;
    margin: -80px auto 0px auto;
    background-color: white;

    .info-usuario{
        //border: 1px solid blue;
        display: flex;
        justify-content: space-between;
        align-items: center;
        background-color: #E5DDD5;

        h2{
            margin: 0;
            padding: 0 0 0 10px;
        }

        p{
            margin: 0;
            padding: 0;
        }

        .perfil-salir{
            display: flex;
            align-items: center;

            button{
                display: inline-block;
                height: 30px;
                margin: 0 10px;
                width: 100px;
                outline: none;
                border: 2px solid crimson;
                background-color: crimson;
                color: white;
                font-size: 15px;
                font-weight: bold;
                &:hover{
                    background: none;
                    color: black;
                }
            }

            img{
                width: 50px;
                height: 50px;
                object-fit: cover;
                border-radius: 50%;
            }
        }
    }

    .chat-area{
        display: flex;
        height: 84%;
       //border: 1px solid purple;

        .area-contactos{
            flex-basis: 20%;
            p{
                text-align: center;
                position: relative;
                padding: 15px;
            }

            p::before{
                content: "";
                position: absolute;
                bottom: 0;
                left: 50%;
                width: 120px;
                height: 3px;
                background-color: black;
                transform: translateX(-50%);
            }

            p::after{
                content: "Mensajes";
                position: absolute;
                bottom: -8px;
                left: 50%;
                padding: 2px;
                background-color: white;
                transform: translateX(-50%);
            }


            .contactos-list{
                ul{
                    padding: 0;
                    list-style: none;
                    li{
                        padding: 10px;
                        background-color: #eee;
                        &:hover{
                            background-color: #ef2;
                        }
                    }
                }
            }
        }

        .area-mensajes{
            //border: 1px solid yellow;
            padding: 10px;
            flex: 1;
            .historial{
               //border: 1px solid green;
               height: 90%;
            }
            .envios-nuevos{
                //border: 2px solid magenta;
                height: 10%auto;
                padding: 0;
                margin: 0;
            }
            .mensajes-enviar{
                //border: 1px solid #eee;
                position: relative;
                padding: 0;
                margin: 0;
            }

            .mensajes-enviar textarea{
                width: 100%;
                height: 30px;
                padding: 0;
                resize: none;
                border-radius: 6px;
                border: 2px solid #eee;
            }

            .envios-nuevos form input{
                position: absolute;
                top: 2px;
                right: 2px;
                outline: none;
                appearance: none;
                border: none;
                //border: 1px solid #eee;
                background-color: white;
                padding: 5px;
            }
        }

    }

`;