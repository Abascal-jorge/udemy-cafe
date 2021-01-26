import styled from "@emotion/styled";


export const Contenedor = styled.div`
  max-width: 400px;
  margin: 100px auto;
  background-color: white;
  border-radius: 10px;
  -webkit-box-shadow: 3px 3px 5px rgba(0,0,0,0.5);
  -moz-box-shadow: 3px 3px 5px rgba(0,0,0,0.5);
  box-shadow: 3px 3px 5px rgba(0,0,0,0.5);
`;

export const Formulario = styled.form`
    padding-bottom:20px;
    h2{
      text-align: center;
      padding-top: 10px;
      margin: 0;
    } 
    .campos{
        display: flex;
        flex-direction: column;

        label{
            font-weight: bold;
            padding: 5px 0;
        }

        input[type="password"], input[type="email"], input[type="text"]{
            appearance: none;
            outline: none;
            border: 1px solid gray;
            padding: 10px;
        }
    }   
    input[type="submit"]{
        margin-top:20px;
        margin-bottom: 20px;
        width: 100%;
        padding: 10px;
        color: white;
        background-color: #2980B9;
        border: none;
        font-weight: bold;

        &:hover{
            background-color:#A9CCE3;
            color: black;
        }
    }
`;

export const RadioButton = styled.div`
    font-weight: bold;
    padding: 10px 0 10px 0;
    div{
        padding-top: 5px;
        display: flex;
        div{
            display: flex;
            flex-direction: column;
        }

        div:last-of-type{
            margin-left: 20px;
        }
    }
`;