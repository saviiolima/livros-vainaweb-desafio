import S from "./querodoar.module.scss";
import bookdoar from "../../assets/img/bookdoar.png";

export default function QueroDoar() {
  return (
    <main>
      <section className={S.boxPrincipal}>
        <section className={S.boxDoar}>
          <h2>
            Por favor, preencha o formulário com suas informações e as
            informações do Livro
          </h2>
          <form action="">
            <div>
              <img src={bookdoar} alt="icone de um livro" />
              <h3>Informações do Livro </h3>
            </div>
            <input type="text" placeholder="Título" />
            <input type="text" placeholder="Categoria" />
            <input type="text" placeholder="Autor" />
            <input type="text" placeholder="Link de Imagem" />
            <input type="submit" value="Doar" />
          </form>
        </section>
      </section>
    </main>
  );
}
