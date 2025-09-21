import { Metadata } from "next"
import Link from "next/link"

export const metadata : Metadata = {
    title: "404 - Portafolio Christian Fidelio"
}

export default function NotFound(){
    return <main style={{display:"flex", }}>
        <section style={{margin:"auto", textAlign:"center"}}>

            <h1>
                404 - La página no existe
            </h1>
            <Link href="/" className="">
                ← Volver a Home
            </Link>
        </section>
    </main>
}