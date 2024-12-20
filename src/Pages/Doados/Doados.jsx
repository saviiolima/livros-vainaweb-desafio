import S from "./doados.module.scss";
import booksdoados from "../../assets/img/booksdoados.png";

export default function Doados() {
  return (
    <main>
      <section className={S.boxDoados}>
        <h2>Livros Doados</h2>
        <section className={S.boxLivros}>
          <article>
            <img src={booksdoados} alt="livro o protagonista" />
            <h3>O protagonista</h3>
            <p>Susanne Andrade</p>
            <p>Ficção</p>
          </article>
          <article>
            <img src={booksdoados} alt="livro o protagonista" />
            <h3>O protagonista</h3>
            <p>Susanne Andrade</p>
            <p>Ficção</p>
          </article>
        </section>
      </section>
    </main>
  );
}
