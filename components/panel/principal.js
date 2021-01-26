import React from 'react';
import Header from "./header";
import AsidePanel from "./aside";
//import { PanelPrincipal } from "./estilosPanel";

const Principal = () => {
    return (
        <>  
            <div>
                <Header/>
                <AsidePanel/>
            </div>
        </>
     );
}
 
export default Principal;