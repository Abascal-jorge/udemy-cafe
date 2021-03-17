import React from 'react';
import Head from "next/head";

const Layouts = props => {
    return ( 
        <>
            <Head>
               <title>Chat abascal</title>
               <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.css" integrity="sha512-oHDEc8Xed4hiW6CxD7qjbnI+B07vDdX7hEPTvn9pSZO1bcRqHp8mj9pyr+8RVC2GmtEfI2Bi9Ke9Ass0as+zpg==" crossOrigin="anonymous" />
           </Head>
            
            <h1>Titulo header</h1>

            <main>
                {props.children}
            </main>

            <footer>
                <h2>Pie de pagina jorge abascal lopez</h2>
            </footer>
        </>
     );
}
 
export default Layouts;