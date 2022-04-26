import "./styles.css";
import Button from "../Button";

function Banner() {
  return (
    <main id='banner'>
      <section className='spotify-free'>
        <article>
          <div>
            <p>Spotify free</p>
            <h1>Escutar muda tudo</h1>
            <h2>
              Milhões de músicas e podcasts para explorar. E nem precisa de cartão de crédito.
            </h2>
            <Button texto='Baixe o spotify free' variante='sucesso' />
          </div>
        </article>
      </section>
    </main>
  );
}

export default Banner;
