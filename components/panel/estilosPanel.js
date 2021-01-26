import styled from "@emotion/styled";

export const PincipalPanel = styled.div`
    display: flex;
`;

export const AsideDiv = styled.div`
    order: -1;
    height: 100vh;
    width: 300px;
    background-color: #415777;
    
    h2{
        text-align: center;
        margin-top: 40px;
        margin-bottom: 80px;
    }
  
    summary{
        text-align: center;
        border: none;
        outline: none;
        background-color: #6F7988;
        padding: 10px;
    }
`;

export const HeaderPanel = styled.div`
    background-color: #255192;
    header{
        display: flex;
        justify-content: space-between;
        align-self: center;
        align-items: center;

        div img{
            margin-left: 40px;
            border-radius: 50%;
            padding:5px;
        }

        div ul{
            display: flex;
            list-style: none;
            margin-right: 40px;
            font-weight: bold;
            font-size: 1.3rem;
            li{
                padding: 10px;
            }
        }
    }
`;

export const PanelHeader = styled.div`
    width: 100%;
`;