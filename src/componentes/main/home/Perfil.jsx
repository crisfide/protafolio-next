import BtnLinkedin from './BtnLinkedin';
import BtnWhatsApp from './BtnWhatsApp';
import styles from './perfil.module.css'

export const Perfil = ( {sobreMi:{titulo, subtitulo, descripcion}} ) => {
  return (
    <section className={styles.perfil} id="perfil">
      <article>
        <h1>{titulo}</h1>
        <h2>{subtitulo}</h2>
        {descripcion}
        <br />
        <div className='gap-10'>
          <a href="assets/cv_Christian_Fidelio.pdf" target="_blank" rel="noopener noreferrer" className="btn-action" title='Descargar CV'>Descargar CV</a>
          <BtnLinkedin />
          <BtnWhatsApp />
        </div>


      </article>
      
      <article>
        <figure>
          <img src="assets/fotoPerfil.jpg" alt="Foto Christian Fidelio desarrollador web" loading="lazy" />
        </figure>
      </article>

    </section>
  );
};
