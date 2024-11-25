import S from "./inicio.module.scss";
import circle from "../../assets/img/circle.png";
import manbook from "../../assets/img/manbook.png";
import hands from "../../assets/img/hands.png";
import balance from "../../assets/img/balance.png";

export default function Inicio() {
  return (
    <>
      <main>
        <section className={S.boxInicio}>
          <h2>VENHA FAZER PARTE DA MAIOR REDE DE DOAÇÃO</h2>
        </section>
        <section className={S.boxDevoDoar}>
          <div>
            <h2>Por que devo doar?</h2>
          </div>
          <section className={S.boxCard}>
            <article>
              <img src={circle} alt="" />
              <p>
                {" "}
                Oferece livros a quem não tem acesso, ajudando a reduzir a
                exclusão social.
              </p>
            </article>
            <article>
              <img src={manbook} alt="" />
              <p>Estimula o hábito da leitura e o aprendizado contínuo.</p>
            </article>
            <article>
              <img src={hands} alt="" />
              <p>
                Fornece conhecimento e inspiração, permitindo que indivíduos
                transformem suas vidas.
              </p>
            </article>
            <article>
              <img src={balance} alt="" />
              <p>
                Garante que todos, independentemente de sua condição, tenham
                oportunidades de aprendizado.
              </p>
            </article>
          </section>
        </section>
      </main>
    </>
  );
}
