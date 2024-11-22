import S from "./querodoar.module.scss";
import bookdoados from "../../assets/img/bookdoados.png";

export default function QueroDoar() {
    return (
        <main>
        <section className={S.boxDoados}>
          <p>
            Por favor, preencha o formulário com suas informações e as informações
            do Livro
          </p>
        </section>
        <div className={S.boxLivros}>
            <div className={S.boxForms}>
              <img src={bookdoados} alt="Livro" />
              <h2>Informações do Livro</h2>
            </div>
            <input type="text" placeholder="Titulo" />
            <input type="text" placeholder="Categoria" />
            <input type="text" placeholder="Autor" />
            <input type="text" placeholder="Link de Imagem" />
            <button className={S.boxButton}><p>Doar</p></button>
        </div>
      </main>
    )
}