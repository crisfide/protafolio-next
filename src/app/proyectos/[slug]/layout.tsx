import { Metadata } from "next";
import { ReactNode } from "react";

type Props = {
    params: { slug: string };
    children: React.ReactNode;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { slug } = params;
    const nombre = decodeURIComponent(slug).replaceAll("_"," ")

    return {
        title: `${nombre} - Portafolio Christian Fidelio`,
        description: `Detalles del proyecto ${nombre}.`,
    };
}

export default function ProyectoLayout ({children}:{children:ReactNode}) {
    return <>
        {children}
    </>
}