import Proyecto from "../../componentes/main/proyectos/Proyecto"

interface Props {
  params: { slug: string };
}

export default function Proyectos({ params }: Props) {
  // console.log(params)
  const slug = decodeURIComponent(params.slug);

  return (
      <Proyecto nombre={slug} />
    
  );
}
