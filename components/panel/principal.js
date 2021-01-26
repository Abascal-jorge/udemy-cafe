import React from 'react';
import Header from "./header";
import AsidePanel from "./aside";
import { PincipalPanel, PanelHeader } from "./estilosPanel";

const Principal = () => {
    return (
        <>  
            <PincipalPanel>
                <PanelHeader>
                    <Header/>
                    <h2>Hola mundo</h2>
                </PanelHeader>
                <AsidePanel/>
            </PincipalPanel>
        </>
     );
}
 
export default Principal;