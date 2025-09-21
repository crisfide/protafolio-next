import { Metadata } from "next"

export const metadata : Metadata = {
    title: "404 - Portafolio Christian Fidelio"
}

export default function NotFound(){
    return <main style={{display:"flex", }}>
        <h1 style={{margin:"auto"}}>
            404 - La página no existe
        </h1>
    </main>
}